import { createContext, useEffect, useMemo, useState } from "react";

const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) =>
    setExpenses((prev) => [...prev, expense]);

  const deleteExpense = (id) =>
    setExpenses((prev) => prev.filter((e) => e.id !== id));

  const value = useMemo(
    () => ({ expenses, addExpense, deleteExpense }),
    [expenses]
  );

  return (
    <ExpenseContext.Provider value={value}>
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseContext;
