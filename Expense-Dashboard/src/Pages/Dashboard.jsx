import { useContext, useMemo } from "react";
import ExpenseContext from "../context/ExpenseContext";

function Dashboard() {
  const { expenses } = useContext(ExpenseContext);
  const total = useMemo(
    () => expenses.reduce((s, e) => s + e.amount, 0),
    [expenses]
  );

  return (
    <>
      <h1>Dashboard</h1>
      <p>Total Expenses: ₹{total}</p>
    </>
  );
}
export default Dashboard;
