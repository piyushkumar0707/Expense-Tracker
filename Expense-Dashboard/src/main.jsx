import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ExpenseProvider } from "./context/ExpenseContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ExpenseProvider>
      <App />
    </ExpenseProvider>
  </BrowserRouter>
);
