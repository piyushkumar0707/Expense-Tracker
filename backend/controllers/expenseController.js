const expenses = require("../data/expenses");

exports.getExpenses = (req, res) => {
  const userId = req.user.id;

  const userExpenses = expenses.filter(
    (expense) => expense.userId === userId
  );

  res.json(userExpenses);
};

exports.addExpense = (req, res) => {
  const { title, amount, category } = req.body;

  if (!title || !amount || !category) {
    return res.status(400).json({ message: "All fields required" });
  }

  const newExpense = {
    id: Date.now(),
    title,
    amount,
    category,
    userId: req.user.id,
    createdAt: new Date()
  };

  expenses.push(newExpense);

  res.status(201).json(newExpense);
};

exports.deleteExpense = (req, res) => {
  const expenseId = Number(req.params.id);
  const userId = req.user.id;

  const index = expenses.findIndex(
    (e) => e.id === expenseId && e.userId === userId
  );

  if (index === -1) {
    return res.status(404).json({ message: "Expense not found" });
  }

  expenses.splice(index, 1);

  res.json({ message: "Expense deleted" });
};
