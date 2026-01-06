import { useContext, useMemo } from "react";
import ExpenseContext from "../context/ExpenseContext";

function Dashboard() {
  const { expenses } = useContext(ExpenseContext);

  const total = useMemo(
    () => expenses.reduce((sum, e) => sum + e.amount, 0),
    [expenses]
  );

  return (
    <div className="card page">
      <h1>Dashboard</h1>
      <p>Total Expenses: ₹{total}</p>
    </div>
  );
}

export default Dashboard;
