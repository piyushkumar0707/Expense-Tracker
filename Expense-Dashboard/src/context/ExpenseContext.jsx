import { createContext, useState, useEffect } from "react";

const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  return (
    <ExpenseContext.Provider
      value={{ expenses, addExpense, deleteExpense }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseContext;
