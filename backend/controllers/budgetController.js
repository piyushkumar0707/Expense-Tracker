const Budget = require("../models/Budget");
const Expense = require("../models/Expense");

exports.setBudget = async (req, res) => {
  const { monthlyLimit } = req.body;

  if (!monthlyLimit || monthlyLimit <= 0) {
    return res.status(400).json({ message: "Invalid budget amount" });
  }

  const budget = await Budget.findOneAndUpdate(
    { userId: req.user.id },
    { monthlyLimit },
    { upsert: true, new: true }
  );

  res.json(budget);
};

exports.getBudgetStatus = async (req, res) => {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);

  const budget = await Budget.findOne({ userId: req.user.id });

  const totalSpent = await Expense.aggregate([
    {
      $match: {
        userId: req.user.id,
        createdAt: { $gte: start }
      }
    },
    {
      $group: {
        _id: null,
        total: { $sum: "$amount" }
      }
    }
  ]);

  const spent = totalSpent[0]?.total || 0;

  res.json({
    monthlyLimit: budget?.monthlyLimit || 0,
    spent,
    percentage: budget
      ? Math.min((spent / budget.monthlyLimit) * 100, 100)
      : 0
  });
};
