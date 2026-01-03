import { useState, useEffect } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

function Expenses() {
  const [expenses, setExpenses] = useState(() => {
  const saved = localStorage.getItem("expenses");
  return saved ? JSON.parse(saved) : [];
});

useEffect(() => {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}, [expenses]);



  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpense = (id) => {
  setExpenses(expenses.filter((expense) => expense.id !== id));
};

const [filter, setFilter] = useState("All");
const filteredExpenses =
  filter === "All"
    ? expenses
    : expenses.filter((e) => e.category === filter);

<select value={filter} onChange={(e) => setFilter(e.target.value)}>
  <option value="All">All</option>
  <option value="Food">Food</option>
  <option value="Travel">Travel</option>
  <option value="Entertainment">Entertainment</option>
</select>


  return (
    <div style={{ padding: "20px" }}>
      <h1>Expenses</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList
  expenses={filteredExpenses}
  deleteExpense={deleteExpense}
/>



    </div>
  );
}

export default Expenses;
