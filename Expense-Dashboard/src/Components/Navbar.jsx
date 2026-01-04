import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../auth/AuthContext";

function Navbar() {
  const { isAuth, logout } = useContext(AuthContext);

  return (
    <nav style={{ background: "#1e293b", padding: 12 }}>
      <NavLink to="/dashboard" style={{ color: "#fff", marginRight: 12 }}>
        Dashboard
      </NavLink>
      <NavLink to="/expenses" style={{ color: "#fff", marginRight: 12 }}>
        Expenses
      </NavLink>
      <NavLink to="/reports" style={{ color: "#fff", marginRight: 12 }}>
        Reports
      </NavLink>

      {isAuth && (
        <button onClick={logout} style={{ marginLeft: 12 }}>
          Logout
        </button>
      )}
    </nav>
  );
}
export default Navbar;
