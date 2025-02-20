import { createContext, useReducer, useContext, useEffect } from "react";

// 🎯 Начальное состояние (Загружаем из localStorage)
const initialState = JSON.parse(localStorage.getItem("expenses")) || [];

// 🎯 Функция-редьюсер
function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.payload];
    case "REMOVE_EXPENSE":
      return state.filter(expense => expense.id !== action.payload);
    default:
      return state;
  }
}

// 🎯 Создаём Context
const ExpenseContext = createContext();

// 🎯 Провайдер (Оборачивает приложение)
export function ExpenseProvider({ children }) {
  const [expenses, dispatch] = useReducer(expenseReducer, initialState);

  // ✅ Сохраняем в localStorage при изменении списка
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <ExpenseContext.Provider value={{ expenses, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
}

// 🎯 Кастомный хук для доступа к данным
export function useExpenseContext() {
  return useContext(ExpenseContext);
}
