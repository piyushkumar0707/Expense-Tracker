import { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";
import ExpenseItem from "./ExpenseItem";

function ExpenseList() {
  const { expenses } = useContext(ExpenseContext);
  return expenses.map((e) => <ExpenseItem key={e.id} expense={e} />);
}
export default ExpenseList;
