const express = require("express");
const {
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense
} = require("../controllers/expenseController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/expenses", protect(["user", "admin"]), getExpenses);
router.post("/expenses", protect(["user"]), addExpense);
router.put("/expenses/:id", protect(["user"]), updateExpense);
router.delete("/expenses/:id", protect(["user"]), deleteExpense);

module.exports = router;
