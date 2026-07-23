import React from "react";
import "./FinancialPage.css";
import AddExpense from "./components/AddExpense";
import RecentExpenses from "./components/RecentExpenses";

export default function FinancialsPage() {
  const expenses = [
    {
      id: 1,
      description: "Office Supplies",
      category: "restock",
      amount: 150.0,
      date: "2024-06-01",
    },
    {
      id: 2,
      description: "Shipping Costs",
      category: "logistics",
      amount: 75.5,
      date: "2024-06-02",
    },
    {
      id: 3,
      description: "Employee Salaries",
      category: "payroll",
      amount: 5000.0,
      date: "2024-06-03",
    },
    {
      id: 4,
      description: "Marketing Campaign",
      category: "marketing",
      amount: 1200.0,
      date: "2024-06-04",
    },
  ];
  const [expensesList, setExpensesList] = React.useState(expenses);
  function handleAddExpenses(newExpense) {
    setExpensesList([...expensesList, newExpense]);
  }
  return (
    <div className="financials-page h-100 m-0 d-flex flex-column ">
      <div className="d-flex justify-content-between flex-column ">
        <h2 className="fw-medim m-0">Financial Overview</h2>
        <p style={{ fontSize: "14px", color: "#464554" }}>
          Monitor monthly performance and manage expenses.
        </p>
      </div>
      <div className="cards row gap-2  m-0 p-0">
        <div className="revenue increase card col-12 col-md p-0 rounded-4">
          <div className="card-body d-flex flex-column gap-2 p-4">
            <div
              className={"d-flex justify-content-between align-items-center"}
            >
              <i className="bi bi-graph-up-arrow custom-flex-center bg-primary bg-opacity-25 p-2 fw-bold rounded-circle custom-text-primary fs-5"></i>
              <span
                className="bg-secondary bg-opacity-25 rounded-5 px-2 py-1"
                style={{ fontSize: "12px" }}
              >
                This Month
              </span>
            </div>
            <span className="card-title m-0">{"Total Revenue"}</span>
            <h2 className="card-text fw-bold m-0">${"124,500"}</h2>
            <p className="m-0 rate">
              <i className="bi bi-arrow-up-short"></i>
              {"12.5%"} vs last month
            </p>
          </div>
        </div>
        <div className="expenses increase card col-12 col-md p-0 rounded-4">
          <div className="card-body d-flex flex-column gap-2 p-4">
            <div className={"d-flex justify-content-between "}>
              <i className="bi bi-receipt custom-flex-center bg-danger bg-opacity-10 p-2 fw-bold rounded-circle text-danger fs-5"></i>
            </div>
            <span className="card-title m-0">{"Total Expenses"}</span>
            <h2 className="card-text fw-bold m-0">${23322}</h2>
            <p className="m-0 rate">
              <i className="bi bi-arrow-up-short"></i>
              {"4.5%"} vs last month
            </p>
          </div>
        </div>
        <div className="profit increase card col-12  col-md p-0 rounded-4 bg-gradient">
          <div className="card-body d-flex flex-column gap-2 p-4">
            <div className={"d-flex justify-content-between"}>
              <i className="bi bi-bank custom-flex-center bg-success bg-opacity-25 p-2 fw-bolder rounded-circle text-success fs-5"></i>
            </div>
            <span className="card-title m-0">{"Net Profit"}</span>
            <h2 className="card-text fw-bold m-0">${"23,456"}</h2>
            <p className="m-0 rate">
              <i className="bi bi-arrow-up-short"></i>
              {"8.5%"} vs last month
            </p>
          </div>
        </div>
      </div>
      <div className="mt-3 row gap-3 m-0 expenses-data">
        <AddExpense onAdd={handleAddExpenses} />
        <RecentExpenses expenses={expensesList} />
      </div>
    </div>
  );
}
