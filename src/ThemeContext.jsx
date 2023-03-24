import { useState, useEffect, createContext } from "react";

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const storedTheme = JSON.parse(localStorage.getItem("theme"));
  const [darkTheme, setDarkTheme] = useState(storedTheme);

  function toggleTheme() {
    setDarkTheme((prev) => !prev);
  }

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(darkTheme));
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider, ThemeContext };
