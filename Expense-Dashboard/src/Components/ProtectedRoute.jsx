import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../auth/AuthContext";

function ProtectedRoute({ children, allowedRoles }) {
  const { isAuth, user } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  // Role-based check
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default ProtectedRoute;
