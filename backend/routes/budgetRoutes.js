const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
  setBudget,
  getBudgetStatus
} = require("../controllers/budgetController");

const router = express.Router();

router.post("/budget", protect(["user"]), setBudget);
router.get("/budget", protect(["user", "admin"]), getBudgetStatus);

module.exports = router;
