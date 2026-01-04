import { Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./Pages/Dashboard";
import Expenses from "./Pages/Expenses";
import Reports from "./Pages/Reports";
import Login from "./Pages/Login";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  const isAuth = true; // mock auth
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/reports" element={<Reports />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;
