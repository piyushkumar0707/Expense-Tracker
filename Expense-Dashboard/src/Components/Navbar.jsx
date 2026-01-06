import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../auth/AuthContext";
import ThemeContext from "../theme/ThemeContext";

function Navbar() {
  const { isAuth, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h2>Expense Tracker</h2>

      <div className="nav-links">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/expenses">Expenses</NavLink>
        <NavLink to="/reports">Reports</NavLink>

        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>

        {isAuth && (
          <button onClick={logout} className="logout-btn">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
