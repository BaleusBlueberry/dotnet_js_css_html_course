import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className={`navbar navbar-${theme} bg-${theme} `}>
      <div className="container-fluid">
        <div
          className={`navbar-brand text-${theme === "dark" ? "light" : "dark"}`}
        >
          My App
        </div>
        <div className="form-switch form-check">
          <input
            type="checkbox"
            id="cdToggleTheme"
            className="form-check-input"
            onChange={toggleTheme}
          ></input>
          <label
            className={`form-check-label text-${
              theme === "dark" ? "light" : "dark"
            }`}
            htmlFor="cdToggleTheme"
          >
            {theme}
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Header;
