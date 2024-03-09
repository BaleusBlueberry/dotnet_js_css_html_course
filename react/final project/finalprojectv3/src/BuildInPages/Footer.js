import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";

function Footer() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <footer
      className={`footer fixed-bottom mt-5 text-center text-${
        theme === "dark" ? "light" : "dark"
      }`}
    >
      <div className="container text-center">
        <div className="content">
          <p>
            <strong>Copyright</strong> {new Date().getFullYear()} Business Cards
            App. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
