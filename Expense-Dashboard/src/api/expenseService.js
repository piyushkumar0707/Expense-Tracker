export const getExpenses = async (token, query = {}) => {
  const params = new URLSearchParams(query).toString();

  const res = await fetch(
    `http://localhost:8080/api/expenses?${params}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  if (!res.ok) throw new Error("Failed to fetch expenses");
  return res.json();
};


export const addExpense = async (token, expense) => {
  const res = await fetch("http://localhost:8080/api/expenses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(expense)
  });

  if (!res.ok) throw new Error("Failed to add expense");
  return res.json();
};

export const updateExpense = async (token, id, updates) => {
  const res = await fetch(
    `http://localhost:8080/api/expenses/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(updates)
    }
  );

  if (!res.ok) throw new Error("Failed to update expense");
  return res.json();
};

export const deleteExpense = async (token, id) => {
  const res = await fetch(
    `http://localhost:8080/api/expenses/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  if (!res.ok) throw new Error("Failed to delete expense");
};

export const getExpenseStats = async (token) => {
  const res = await fetch(
    "http://localhost:8080/api/expense-stats",
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  if (!res.ok) throw new Error("Failed to fetch stats");
  return res.json();
};
