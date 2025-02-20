import { useState, useRef } from "react";
import { useExpenseContext } from "../ExpenseContext";

const ExpenseForm = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { dispatch } = useExpenseContext();
  const inputRef = useRef(null); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    const newExpense = {
      id: Date.now(),
      text,
      amount: parseFloat(amount),
    };

    dispatch({ type: "ADD_EXPENSE", payload: newExpense });

    setText("");
    setAmount("");
    inputRef.current.focus(); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Expense name" />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
