import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-container">
      <NavLink
        to="/"
        className={({ isActive }) => `nav-link ${isActive ? "active" : undefined}`}
      >
        Home
      </NavLink>


      <NavLink
        to="/about"
        className={({ isActive }) => `nav-link ${isActive ? "active" : undefined}`}
      >
        About
      </NavLink>


      <NavLink
        to="/works"
        className={({ isActive }) => `nav-link ${isActive ? "active" : undefined}`}
      >
        Portfolio
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) => `nav-link ${isActive ? "active" : undefined}`}
      >
        Contact
      </NavLink>
    </div>
  );
}

export default Navbar;
