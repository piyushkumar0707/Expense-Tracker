import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../auth/AuthContext";

function ProtectedRoute({ children }) {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
