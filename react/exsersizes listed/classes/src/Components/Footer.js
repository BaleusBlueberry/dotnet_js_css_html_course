import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={`footer bg-${theme} text-${
        theme === "dark" ? "light" : "dark"
      }`}
    >
      <div className="container text-center">
        <div className="">
          <p>
            <strong>Copyright</strong> &copy; 2020
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
