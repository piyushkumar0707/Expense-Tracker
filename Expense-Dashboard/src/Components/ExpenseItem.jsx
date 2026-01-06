import { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";

function ExpenseItem({ expense }) {
  const { deleteExpense } = useContext(ExpenseContext);

  return (
    <div className="card expense-item">
      <h3>{expense.title}</h3>
      <p className="amount">₹{expense.amount}</p>
      <span className="tag">{expense.category}</span>
      <button onClick={() => deleteExpense(expense.id)}>Delete</button>
    </div>
  );
}

export default ExpenseItem;
