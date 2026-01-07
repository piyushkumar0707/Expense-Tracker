import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import ExpenseFilters from "../components/ExpenseFilters";
import Pagination from "../components/Pagination";

function Expenses() {
  return (
    <>
      <h1>Expenses</h1>
      <ExpenseForm />
      <ExpenseFilters />
      <ExpenseList />
      <Pagination />
    </>
  );
}

export default Expenses;
