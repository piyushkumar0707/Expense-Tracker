import { createContext, useContext, useEffect, useMemo, useState } from "react";
import AuthContext from "../auth/AuthContext";
import * as api from "../api/expenseService";

const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const { token } = useContext(AuthContext);

  const [expenses, setExpenses] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchExpenses = async () => {
    if (!token) return;

    setLoading(true);
    const data = await api.getExpenses(token, {
      page,
      limit: 5,
      ...filters
    });

    setExpenses(data.expenses);
    setTotalPages(data.totalPages);
    setLoading(false);
  };

  useEffect(() => {
    fetchExpenses();
  }, [token, page, filters]);

  const addExpense = async (expense) => {
    await api.addExpense(token, expense);
    fetchExpenses();
  };

  const updateExpense = async (id, updates) => {
    await api.updateExpense(token, id, updates);
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await api.deleteExpense(token, id);
    fetchExpenses();
  };

  const value = useMemo(
    () => ({
      expenses,
      page,
      totalPages,
      setPage,
      setFilters,
      addExpense,
      updateExpense,
      deleteExpense,
      loading
    }),
    [expenses, page, totalPages, loading]
  );

  return (
    <ExpenseContext.Provider value={value}>
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseContext;
