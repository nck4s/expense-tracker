import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ExpenseProvider } from "./ExpenseContext.jsx";
import { ThemeProvider } from "./ThemeContext.jsx"; 
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ExpenseProvider>
        <App />
      </ExpenseProvider>
    </ThemeProvider>
  </React.StrictMode>
);
