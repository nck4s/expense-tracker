import { useExpenseContext } from "../ExpenseContext";

const ExpenseItem = ({ expense }) => {
  const { dispatch } = useExpenseContext();

  return (
    <li>
      {expense.text}: RUB {expense.amount.toFixed(2)}
      <button onClick={() => dispatch({ type: "REMOVE_EXPENSE", payload: expense.id })}>
        ❌
      </button>
    </li>
  );
};

export default ExpenseItem;
