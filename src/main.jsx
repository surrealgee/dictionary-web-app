import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeContextProvider } from "./ThemeContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
