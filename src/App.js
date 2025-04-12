import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar"; // Ensure the SearchBar component is imported
import "./App.css";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Fix missing useState import

  // Filter expenses based on search term
  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <p className="subheading">Start taking control of your finances and life. Record, categorize and analyze your spending.</p>
      <SearchBar onSearch={setSearchTerm} /> {/* Ensure the SearchBar exists */}
      <div className="content">
        <ExpenseForm addExpense={addExpense} />
        <ExpenseTable expenses={filteredExpenses} />
      </div>
    </div>
  );
};

export default App;