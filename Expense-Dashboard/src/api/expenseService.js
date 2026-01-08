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


export const getExpenseTrends = async (token, year) => {
  const res = await fetch(
    `http://localhost:8080/api/expense-trends?year=${year}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  if (!res.ok) throw new Error("Failed to fetch trends");
  return res.json();
};

export const getYearlyExpenses = async (token) => {
  const res = await fetch(
    "http://localhost:8080/api/expense-yearly",
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  if (!res.ok) throw new Error("Failed to fetch yearly data");
  return res.json();
};


export const exportExpensesCSV = async (token) => {
  const res = await fetch(
    "http://localhost:8080/api/expenses/export",
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  if (!res.ok) throw new Error("Failed to export CSV");

  const blob = await res.blob();
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "expenses.csv";
  document.body.appendChild(a);
  a.click();
  a.remove();
};


export const setBudget = async (token, monthlyLimit) => {
  const res = await fetch("http://localhost:8080/api/budget", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ monthlyLimit })
  });

  if (!res.ok) throw new Error("Failed to set budget");
  return res.json();
};

export const getBudgetStatus = async (token) => {
  const res = await fetch("http://localhost:8080/api/budget", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!res.ok) throw new Error("Failed to fetch budget");
  return res.json();
};
