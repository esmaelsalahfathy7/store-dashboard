import React from "react";
import "./FinancialPage.css";
import AddExpense from "./components/AddExpense";
import RecentExpenses from "./components/RecentExpenses";

export default function FinancialsPage() {
  return (
    <div className="financials-page h-100 m-0 d-flex flex-column ">
      <div className="d-flex justify-content-between flex-column ">
        <h2 className="fw-medim m-0">Financial Overview</h2>
        <p style={{ fontSize: "14px", color: "#464554" }}>
          Monitor monthly performance and manage expenses.
        </p>
      </div>
      <div className="cards row gap-2  m-0 p-0">
        <div class="revenue increase card col-12 col-md p-0 rounded-4">
          <div class="card-body d-flex flex-column gap-2 p-4">
            <div
              className={"d-flex justify-content-between align-items-center"}
            >
              <i class="bi bi-graph-up-arrow custom-flex-center bg-primary bg-opacity-25 p-2 fw-bold rounded-circle custom-text-primary fs-5"></i>
              <span
                className="bg-secondary bg-opacity-25 rounded-5 px-2 py-1"
                style={{ fontSize: "12px" }}
              >
                This Month
              </span>
            </div>
            <span class="card-title m-0">{"Total Revenue"}</span>
            <h2 class="card-text fw-bold m-0">${"124,500"}</h2>
            <p className="m-0 rate">
              <i class="bi bi-arrow-up-short"></i>
              {"12.5%"} vs last month
            </p>
          </div>
        </div>
        <div class="expenses increase card col-12 col-md p-0 rounded-4">
          <div class="card-body d-flex flex-column gap-2 p-4">
            <div className={"d-flex justify-content-between "}>
              <i class="bi bi-receipt custom-flex-center bg-danger bg-opacity-10 p-2 fw-bold rounded-circle text-danger fs-5"></i>
            </div>
            <span class="card-title m-0">{"Total Expenses"}</span>
            <h2 class="card-text fw-bold m-0">${23322}</h2>
            <p className="m-0 rate">
              <i class="bi bi-arrow-up-short"></i>
              {"4.5%"} vs last month
            </p>
          </div>
        </div>
        <div class="profit increase card col-12  col-md p-0 rounded-4 bg-gradient">
          <div class="card-body d-flex flex-column gap-2 p-4">
            <div className={"d-flex justify-content-between"}>
              <i class="bi bi-bank custom-flex-center bg-success bg-opacity-25 p-2 fw-bolder rounded-circle text-success fs-5"></i>
            </div>
            <span class="card-title m-0">{"Net Profit"}</span>
            <h2 class="card-text fw-bold m-0">${"23,456"}</h2>
            <p className="m-0 rate">
              <i class="bi bi-arrow-up-short"></i>
              {"8.5%"} vs last month
            </p>
          </div>
        </div>
      </div>
      <div className="mt-3 row gap-3 m-0 expenses-data">
        <AddExpense />
        <RecentExpenses />
      </div>
    </div>
  );
}
