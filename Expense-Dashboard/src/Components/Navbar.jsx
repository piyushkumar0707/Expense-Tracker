import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../auth/AuthContext";
import ThemeContext from "../theme/ThemeContext";

function Navbar() {
  const { isAuth, user, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h2>Expense Tracker</h2>

      {isAuth && (
        <div className="nav-links">
          <NavLink to="/dashboard">Dashboard</NavLink>

          {user.role === "user" && (
            <NavLink to="/expenses">Expenses</NavLink>
          )}

          {user.role === "admin" && (
            <NavLink to="/reports">Reports</NavLink>
          )}

          <button className="theme-btn" onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>

          <button onClick={logout} className="logout-btn">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
