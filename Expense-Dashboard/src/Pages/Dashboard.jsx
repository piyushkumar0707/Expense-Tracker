import { useContext, useEffect, useState } from "react";
import AuthContext from "../auth/AuthContext";
import {
  getExpenseTrends,
  getYearlyExpenses
} from "../api/expenseService";
import MonthlyTrendChart from "../Components/MonthlyTrendChart";
import YearlyExpenseChart from "../Components/YearlyExpenseChart";
import BudgetCard from "../Components/BudgetCard";


function Dashboard() {
  const { user, token } = useContext(AuthContext);
  const [monthly, setMonthly] = useState([]);
  const [yearly, setYearly] = useState([]);

  useEffect(() => {
    getExpenseTrends(token, new Date().getFullYear())
      .then(res => setMonthly(res.monthlyData));

    getYearlyExpenses(token)
      .then(setYearly);
  }, [token]);

  return (
    <div className="page">
      <h1>
        {user.role === "admin"
          ? "Admin Dashboard"
          : "User Dashboard"}
      </h1>
      <BudgetCard />

      <MonthlyTrendChart data={monthly} />
      <YearlyExpenseChart data={yearly} />
    </div>
  );
}

export default Dashboard;
