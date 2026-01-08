import { useContext } from "react";
import AuthContext from "../auth/AuthContext";
import { exportExpensesCSV } from "../api/expenseService";

function ExportButton() {
  const { token } = useContext(AuthContext);

  return (
    <button onClick={() => exportExpensesCSV(token)}>
      Export CSV
    </button>
  );
}

export default ExportButton;
