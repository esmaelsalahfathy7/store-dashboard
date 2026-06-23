import React from "react";

export default function AddExpense() {
  return (
    <div class="add-expenses card col-12 col-md-4 gap-2 p-4 border-1 rounded-4">
      <div className="header">
        <h4 class="card-title fw-bold m-0">Card title</h4>
        <p class="card-text">Record a new transaction.</p>
      </div>
      <div className="body d-flex flex-column gap-2">
        <div>
          <label htmlFor="expenses-category">Expense Category</label>
          <select
            class="form-select border-1 border-secondary"
            id="expenses-category"
            aria-label="Default select example"
          >
            <option value="">Inventory Restock</option>
            <option value="">Logistics &amp; Shipping</option>
            <option value="">Payroll</option>
            <option value="">Marketing</option>
            <option value="">Utilities</option>
          </select>
        </div>

        <div>
          <label htmlFor="expenses-amount">Amount ($)</label>
          <input
            type="number"
            class="w-100 p-2 rounded-2 border-1 border-secondary"
            placeholder="0.00"
          />
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            class="w-100 p-2 rounded-2 border-1 border-secondary"
            placeholder="0.00"
          />
        </div>

        <div>
          <label htmlFor="expenses-amount">Description (Optional)</label>
          <textarea
            class="w-100 p-2 rounded-2 border-1 border-secondary"
            placeholder="Brief Details"
          />
        </div>
        <button type="button" class="btn custom-btn-primary w-100">
          Record Expense
        </button>
      </div>
    </div>
  );
}
