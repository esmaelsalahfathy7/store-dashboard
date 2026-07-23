import React, { useState } from "react";

export default function AddExpense({ onAdd }) {
  const [expenses, setExpenses] = useState({
    id: Date.now(),
    category: "restock",
    amount: 0,
    date: new Date().toISOString().split("T")[0],
    description: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setExpenses((prevExpenses) => ({
      ...prevExpenses,
      [name]: name === "amount" ? +value : value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (+expenses.amount <= 0 || !expenses.date) {
      alert("Please fill in all required fields.");
      return;
    }
    onAdd(expenses);
  }

  return (
    <div className="add-expenses card col-12 col-md-4 gap-2 p-4 border-1 rounded-4">
      <div className="header">
        <h4 className="card-title fw-bold m-0">Card title</h4>
        <p className="card-text">Record a new transaction.</p>
      </div>
      <div className="body d-flex flex-column gap-2">
        <div>
          <label htmlFor="expenses-category">Expense Category</label>
          <select
            className="form-select border-1 border-secondary"
            id="expenses-category"
            name="category"
            aria-label="Default select example"
            value={expenses.category}
            onChange={handleChange}
          >
            <option value="restock">Inventory Restock</option>
            <option value="logistics">Logistics &amp; Shipping</option>
            <option value="payroll">Payroll</option>
            <option value="marketing">Marketing</option>
            <option value="utilities">Utilities</option>
          </select>
        </div>

        <div>
          <label htmlFor="expenses-amount">Amount ($)</label>
          <input
            type="number"
            id="expenses-amount"
            name="amount"
            className="w-100 p-2 rounded-2 border-1 border-secondary"
            placeholder="0.00"
            value={expenses.amount}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            className="w-100 p-2 rounded-2 border-1 border-secondary"
            placeholder="0.00"
            value={expenses.date}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="expenses-amount">Description (Optional)</label>
          <textarea
            className="w-100 p-2 rounded-2 border-1 border-secondary"
            placeholder="Brief Details"
            name="description"
            value={expenses.description}
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          className="btn custom-btn-primary w-100"
          onClick={handleSubmit}
        >
          Record Expense
        </button>
      </div>
    </div>
  );
}
