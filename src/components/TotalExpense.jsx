import { useExpenseContext } from "../ExpenseContext";
import { useMemo } from "react";

const TotalExpense = () => {
  const { expenses } = useExpenseContext();

  // 🎯 Оптимизация подсчёта
  const total = useMemo(() => {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }, [expenses]);

  return <h2>Total Spent: RUB {total.toFixed(2)}</h2>;
};

export default TotalExpense;
