import { useContext, useEffect, useState } from "react";
import AuthContext from "../auth/AuthContext";
import { getBudgetStatus, setBudget } from "../api/expenseService";

function BudgetCard() {
  const { token, user } = useContext(AuthContext);
  const [limit, setLimit] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    getBudgetStatus(token).then(setData);
  }, [token]);

  const save = async () => {
    await setBudget(token, Number(limit));
    const updated = await getBudgetStatus(token);
    setData(updated);
    setLimit("");
  };

  if (!data) return null;

  return (
    <div className="card">
      <h3>Monthly Budget</h3>

      <div
        style={{
          background: "#e5e7eb",
          borderRadius: 8,
          overflow: "hidden",
          height: 14
        }}
      >
        <div
          style={{
            width: `${data.percentage}%`,
            height: "100%",
            background:
              data.percentage > 100
                ? "#ef4444"
                : data.percentage > 80
                ? "#f97316"
                : "#22c55e"
          }}
        />
      </div>

      <p>
        ₹{data.spent} / ₹{data.monthlyLimit}
      </p>

      {user.role === "user" && (
        <>
          <input
            placeholder="Set monthly budget"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          />
          <button onClick={save}>Save Budget</button>
        </>
      )}

      {data.percentage > 100 && (
        <p style={{ color: "#ef4444" }}>
          ⚠ Budget exceeded!
        </p>
      )}
    </div>
  );
}

export default BudgetCard;
