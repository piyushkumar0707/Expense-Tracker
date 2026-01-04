import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ background: "#1e293b", padding: 12 }}>
      <NavLink to="/dashboard" style={{ color: "#fff", marginRight: 12 }}>
        Dashboard
      </NavLink>
      <NavLink to="/expenses" style={{ color: "#fff", marginRight: 12 }}>
        Expenses
      </NavLink>
      <NavLink to="/reports" style={{ color: "#fff" }}>
        Reports
      </NavLink>
    </nav>
  );
}

export default Navbar;
