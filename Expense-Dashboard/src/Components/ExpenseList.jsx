import { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";
import ExpenseItem from "./ExpenseItem";

function ExpenseList() {
  const { expenses } = useContext(ExpenseContext);

  return (
    <div className="expense-grid">
      {expenses.map((e) => (
        <ExpenseItem key={e.id} expense={e} />
      ))}
    </div>
  );
}

export default ExpenseList;
