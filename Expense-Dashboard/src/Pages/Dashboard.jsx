import { useContext, useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip
} from "recharts";
import AuthContext from "../auth/AuthContext";
import { getExpenseStats } from "../api/expenseService";

const COLORS = ["#3b82f6", "#22c55e", "#f97316", "#ef4444"];

function Dashboard() {
  const { user, token } = useContext(AuthContext);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    getExpenseStats(token).then(setStats);
  }, [token]);

  return (
    <div className="page">
      <h1>
        {user.role === "admin"
          ? "Admin Dashboard"
          : "User Dashboard"}
      </h1>

      {stats.length === 0 ? (
        <p>No analytics available</p>
      ) : (
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
                {stats.map((_, i) => (
                  <Cell
                    key={i}
                    fill={COLORS[i % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
