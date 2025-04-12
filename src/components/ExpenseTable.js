import React from "react";
import "./ExpenseTable.css";

const ExpenseTable = ({ expenses }) => (
  <div className="table-container">
    <table>
      <thead>
        <tr>
          <th>Description</th> {/* First column */}
          <th>Category</th>    {/* Second column */}
          <th>Expense</th>     {/* Third column */}
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index}>
            <td>{expense.description}</td> {/* Move Description to first column */}
            <td>{expense.category}</td>    {/* Category is second */}
            <td>{expense.name}</td>        {/* Expense Name is last */}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ExpenseTable;