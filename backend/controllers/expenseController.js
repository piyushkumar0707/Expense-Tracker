const Expense = require("../models/Expense");

exports.getExpenses = async (req, res) => {
  const userId = req.user.id;

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 5;
  const skip = (page - 1) * limit;

  const { category, minAmount, maxAmount } = req.query;

  const filter = { userId };

  if (category) {
    filter.category = category;
  }

  if (minAmount || maxAmount) {
    filter.amount = {};
    if (minAmount) filter.amount.$gte = Number(minAmount);
    if (maxAmount) filter.amount.$lte = Number(maxAmount);
  }

  const [expenses, total] = await Promise.all([
    Expense.find(filter).skip(skip).limit(limit).sort({ createdAt: -1 }),
    Expense.countDocuments(filter)
  ]);

  res.json({
    expenses,
    total,
    page,
    totalPages: Math.ceil(total / limit)
  });
};


exports.addExpense = async (req, res) => {
  const { title, amount, category } = req.body;

  if (!title || !amount || !category) {
    return res.status(400).json({ message: "All fields required" });
  }

  const expense = await Expense.create({
    title,
    amount,
    category,
    userId: req.user.id
  });

  res.status(201).json(expense);
};

exports.updateExpense = async (req, res) => {
  const { title, amount, category } = req.body;

  const expense = await Expense.findOne({
    _id: req.params.id,
    userId: req.user.id
  });

  if (!expense) {
    return res.status(404).json({ message: "Expense not found" });
  }

  if (title !== undefined) expense.title = title;
  if (amount !== undefined) expense.amount = amount;
  if (category !== undefined) expense.category = category;

  await expense.save();

  res.json(expense);
};

exports.deleteExpense = async (req, res) => {
  const expense = await Expense.findOneAndDelete({
    _id: req.params.id,
    userId: req.user.id
  });

  if (!expense) {
    return res.status(404).json({ message: "Expense not found" });
  }

  res.json({ message: "Expense deleted" });
};


exports.getExpenseStats = async (req, res) => {
  const matchStage = {};

  // 👤 If user → only their data
  if (req.user.role === "user") {
    matchStage.userId = req.user.id;
  }

  // 👑 If admin → no filter (all data)

  const stats = await Expense.aggregate([
    { $match: matchStage },
    {
      $group: {
        _id: "$category",
        totalAmount: { $sum: "$amount" },
        count: { $sum: 1 }
      }
    },
    {
      $project: {
        _id: 0,
        category: "$_id",
        totalAmount: 1,
        count: 1
      }
    }
  ]);

  res.json(stats);
};
