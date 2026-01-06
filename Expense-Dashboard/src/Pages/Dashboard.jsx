import { useContext, useMemo } from "react";
import ExpenseContext from "../context/ExpenseContext";
import AuthContext from "../auth/AuthContext";

function Dashboard() {
  const { expenses } = useContext(ExpenseContext);
  const { user } = useContext(AuthContext);

  const total = useMemo(
    () => expenses.reduce((sum, e) => sum + e.amount, 0),
    [expenses]
  );

  return (
    <div className="card page">
      <h1>Dashboard</h1>

      <p>
        Welcome, <strong>{user.email}</strong> ({user.role})
      </p>

      {user.role === "user" && (
        <p>Total Expenses: ₹{total}</p>
      )}

      {user.role === "admin" && (
        <p>You have access to system reports and analytics.</p>
      )}
    </div>
  );
}

export default Dashboard;
