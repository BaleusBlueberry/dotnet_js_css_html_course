import { createContext } from "react";
import { useState, useEffect } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {
    alert("error no theme inputed");
  },
});

export const ThemeProvider = ({ children }) => {
  const startingTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(startingTheme);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.style.backgroundColor =
      theme === "dark" ? "#212529" : "#f8f9fa";
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
