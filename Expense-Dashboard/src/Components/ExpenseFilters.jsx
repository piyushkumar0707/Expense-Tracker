import { useContext, useState } from "react";
import ExpenseContext from "../context/ExpenseContext";

function ExpenseFilters() {
  const { setFilters, setPage } = useContext(ExpenseContext);

  const [category, setCategory] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const apply = () => {
    setPage(1);
    setFilters({
      category,
      minAmount: min,
      maxAmount: max
    });
  };

  return (
    <div className="card">
      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        placeholder="Min Amount"
        value={min}
        onChange={(e) => setMin(e.target.value)}
      />
      <input
        placeholder="Max Amount"
        value={max}
        onChange={(e) => setMax(e.target.value)}
      />
      <button onClick={apply}>Apply Filters</button>
    </div>
  );
}

export default ExpenseFilters;
