import { createContext, useReducer, useContext, useEffect } from "react";

const initialState = JSON.parse(localStorage.getItem("expenses")) || [];


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


const ExpenseContext = createContext();


export function ExpenseProvider({ children }) {
  const [expenses, dispatch] = useReducer(expenseReducer, initialState);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <ExpenseContext.Provider value={{ expenses, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
}

export function useExpenseContext() {
  return useContext(ExpenseContext);
}
