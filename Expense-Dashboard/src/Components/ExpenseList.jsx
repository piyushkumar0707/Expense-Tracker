import { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";
import ExpenseItem from "./ExpenseItem";

function ExpenseList() {
  const { expenses, loading, error } = useContext(ExpenseContext);

  if (loading) return <p>Loading expenses...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="expense-grid">
      {expenses.map((e) => (
        <ExpenseItem key={e._id} expense={e} />
      ))}
    </div>
  );
}

export default ExpenseList;
