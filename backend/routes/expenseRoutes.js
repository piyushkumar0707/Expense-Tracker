const express = require("express");
const {
  getExpenses,
  addExpense,
  deleteExpense
} = require("../controllers/expenseController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// User routes
router.get("/expenses", protect(["user", "admin"]), getExpenses);
router.post("/expenses", protect(["user"]), addExpense);
router.delete("/expenses/:id", protect(["user"]), deleteExpense);

module.exports = router;
