import { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";

function Pagination() {
  const { page, totalPages, setPage } = useContext(ExpenseContext);

  return (
    <div className="card">
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>

      <span style={{ margin: "0 10px" }}>
        Page {page} of {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
