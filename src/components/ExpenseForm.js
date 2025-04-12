import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ addExpense }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(formData);
    setFormData({ name: "", description: "", category: "", amount: "", date: "" });
  };

  return (
    <div className="form-container">
      <h2>Add Expense</h2>
      <p className="expense-details-text">Enter your expense details below</p> {/* Add new text */}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Expense Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Expense Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category (e.g., Food)"
          value={formData.category}
          onChange={handleChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Enter Amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ExpenseForm;