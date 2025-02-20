import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import TotalExpense from "./components/TotalExpense";
import { useThemeContext } from "./ThemeContext"; 

function App() {
  const { theme, toggleTheme } = useThemeContext(); 

  return (
    <div className="container">
      <h1>Expense Tracker💰</h1>
      <button className="theme-toggle" onClick={toggleTheme}>
        Switch to {theme === "light" ? "🌑" : "☀️"} Mode
      </button>
      <ExpenseForm />
      <TotalExpense />
      <ExpenseList />
    </div>
  );
}

export default App;
