const express = require("express");
const {
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense
} = require("../controllers/expenseController");
const { protect } = require("../middlewares/authMiddleware");
const { getExpenseStats } = require("../controllers/expenseController");
const router = express.Router();
const { exportExpensesCSV } = require("../controllers/expenseController");


router.get("/expenses", protect(["user", "admin"]), getExpenses);
router.post("/expenses", protect(["user"]), addExpense);
router.put("/expenses/:id", protect(["user"]), updateExpense);
router.delete("/expenses/:id", protect(["user"]), deleteExpense);
router.get(
  "/expense-stats",
  protect(["user", "admin"]),
  getExpenseStats
);

router.get(
  "/expenses/export",
  protect(["user", "admin"]),
  exportExpensesCSV
);

const { getExpenseTrends } = require("../controllers/expenseController");

router.get(
  "/expense-trends",
  protect(["user", "admin"]),
  getExpenseTrends
);


const { getYearlyExpenses } = require("../controllers/expenseController");

router.get(
  "/expense-yearly",
  protect(["user", "admin"]),
  getYearlyExpenses
);


module.exports = router;
