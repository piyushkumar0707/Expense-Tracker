import { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";

function ExpenseItem({ expense }) {
  const { deleteExpense } = useContext(ExpenseContext);
  return (
    <div>
      <strong>{expense.title}</strong> — ₹{expense.amount}
      <button onClick={() => deleteExpense(expense.id)}>Delete</button>
    </div>
  );
}
export default ExpenseItem;
