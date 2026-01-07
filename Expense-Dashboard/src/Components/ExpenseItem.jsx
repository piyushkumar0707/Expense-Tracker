import { useContext, useState } from "react";
import ExpenseContext from "../context/ExpenseContext";

function ExpenseItem({ expense }) {
  const { deleteExpense, updateExpense } = useContext(ExpenseContext);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(expense.title);
  const [amount, setAmount] = useState(expense.amount);

  const save = async () => {
    await updateExpense(expense._id, {
      title,
      amount
    });
    setEditing(false);
  };

  return (
    <div className="card expense-item">
      {editing ? (
        <>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={save}>Save</button>
        </>
      ) : (
        <>
          <h3>{expense.title}</h3>
          <p className="amount">₹{expense.amount}</p>
          <span className="tag">{expense.category}</span>

          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => deleteExpense(expense._id)}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default ExpenseItem;
