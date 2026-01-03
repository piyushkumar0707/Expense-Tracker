import { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";
import ExpenseItem from "./ExpenseItem";

function ExpenseList() {
  const { expenses, deleteExpense } = useContext(ExpenseContext);

  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          deleteExpense={deleteExpense}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
