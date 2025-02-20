import { useExpenseContext } from "../ExpenseContext";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const { expenses } = useExpenseContext();

  return (
    <ul>
      {expenses.length === 0 ? (
        <p>No expenses yet</p>
      ) : (
        expenses.map(expense => <ExpenseItem key={expense.id} expense={expense} />)
      )}
    </ul>
  );
};

export default ExpenseList;
