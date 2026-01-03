function ExpenseItem({ expense, deleteExpense }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "8px"
      }}
    >
      <h4>{expense.title}</h4>
      <p>₹{expense.amount}</p>
      <small>{expense.category}</small>
      <br />
      <button onClick={() => deleteExpense(expense.id)}>
        Delete
      </button>
    </div>
  );
}

export default ExpenseItem;
