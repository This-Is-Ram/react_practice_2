import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="" alt="Website Logo" /> {/* Update the src */}
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/movie">Movie</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
