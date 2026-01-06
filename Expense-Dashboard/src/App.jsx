import { Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import Reports from "./pages/Reports";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {/* Admin + User */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin", "user"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* User only */}
        <Route
          path="/expenses"
          element={
            <ProtectedRoute allowedRoles={["user"]}>
              <Expenses />
            </ProtectedRoute>
          }
        />

        {/* Admin only */}
        <Route
          path="/reports"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Reports />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
