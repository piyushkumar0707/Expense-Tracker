import { useContext, useEffect, useState } from "react";
import AuthContext from "../auth/AuthContext";
import { getExpenseTrends } from "../api/expenseService";
import MonthlyTrendChart from "../components/MonthlyTrendChart";

function Dashboard() {
  const { user, token } = useContext(AuthContext);
  const [trendData, setTrendData] = useState([]);

  useEffect(() => {
    getExpenseTrends(token, new Date().getFullYear())
      .then(res => setTrendData(res.monthlyData));
  }, [token]);

  return (
    <div className="page">
      <h1>
        {user.role === "admin"
          ? "Admin Dashboard"
          : "User Dashboard"}
      </h1>

      <MonthlyTrendChart data={trendData} />
    </div>
  );
}

export default Dashboard;
