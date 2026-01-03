import { useContext, useState } from "react";
import ExpenseContext from "../context/ExpenseContext";

function ExpenseForm() {
  const { addExpense } = useContext(ExpenseContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    if (!title || !amount || !category) return;

    addExpense({
      id: Date.now(),
      title,
      amount: Number(amount),
      category
    });

    setTitle("");
    setAmount("");
    setCategory("");
  };

  return (
    <div>
      <h3>Add Expense</h3>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <input value={amount} onChange={(e) => setAmount(e.target.value)} />
      <input value={category} onChange={(e) => setCategory(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default ExpenseForm;
