import { useContext, useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import AuthContext from "../auth/AuthContext";
import { getExpenseStats } from "../api/expenseService";

const COLORS = ["#3b82f6", "#22c55e", "#f97316", "#ef4444"];

function Reports() {
  const { token } = useContext(AuthContext);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    getExpenseStats(token).then(setStats);
  }, [token]);

  if (!stats.length) {
    return (
      <div className="card page">
        <h1>Admin Reports</h1>
        <p>No data available</p>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Admin Reports</h1>

      {/* PIE CHART */}
      <div className="card">
        <h3>Expense Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={stats}
              dataKey="totalAmount"
              nameKey="category"
              outerRadius={100}
              label
            >
              {stats.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* BAR CHART */}
      <div className="card">
        <h3>Category-wise Spending</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={stats}>
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="totalAmount" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Reports;
