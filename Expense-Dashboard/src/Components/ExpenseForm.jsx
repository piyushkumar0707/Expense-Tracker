import { useContext, useState } from "react";
import ExpenseContext from "../context/ExpenseContext";

function ExpenseForm() {
  const { addExpense } = useContext(ExpenseContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const submit = async () => {
    if (!title || !amount || !category) return;

    await addExpense({
      title,
      amount: Number(amount),
      category
    });

    setTitle("");
    setAmount("");
    setCategory("");
  };

  return (
    <div className="card">
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button onClick={submit}>Add Expense</button>
    </div>
  );
}

export default ExpenseForm;
