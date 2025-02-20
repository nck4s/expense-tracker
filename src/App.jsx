import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import TotalExpense from "./components/TotalExpense";

function App() {
  return (
    <div className="container">
      <h1>Expense Tracker💰</h1>
      <ExpenseForm />
      <TotalExpense />
      <ExpenseList />
    </div>
  );
}

export default App;
