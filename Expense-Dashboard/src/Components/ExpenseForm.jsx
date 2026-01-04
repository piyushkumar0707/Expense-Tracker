import { useState, useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";

function ExpenseForm() {
  const { addExpense } = useContext(ExpenseContext);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const submit = () => {
    if (!title || !amount || !category) return;
    addExpense({
      id: Date.now(),
      title,
      amount: Number(amount),
      category
    });
    setTitle(""); setAmount(""); setCategory("");
  };

  return (
    <>
      <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" />
      <input value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Amount" />
      <input value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Category" />
      <button onClick={submit}>Add</button>
    </>
  );
}
export default ExpenseForm;
