import React from "react";

export default function RecentExpenses() {
  return (
    <>
      <div className="all-expenses col d-flex w-100 flex-column border rounded-4 overflow-hidden p-0">
        <div className="header bg-white p-3 d-flex align-items-md-center justify-content-between flex-column flex-md-row border-bottom border-1 ">
          <div className="d-flex justify-content-between flex-column  ">
            <h2 className="fw-bold m-0">Recent Expenses</h2>
            <p className="m-0" style={{ fontSize: "14px", color: "#464554" }}>
              Latest recorded outgoing transactions.
            </p>
          </div>
          <div className="">
            <button
              type="button"
              className="btn btn-outline-dark text-dark w-100 fw-medium bg-white custom-flex-center gap-2 rounded-4 px-3 py-1 btn-sm"
            >
              <i className="bi bi-calendar4"></i>
              Filter
            </button>
          </div>
        </div>
        <div className="table-responsive bg-white w-100 flex-grow-1 ">
          <table className="table table-hover m-0 align-middle h-100">
            <thead className="align-middle ">
              <tr>
                <th scope="col" className="ps-3">
                  ID
                </th>
                <th scope="col">Description</th>
                <th scope="col">Category</th>
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <th scope="col" className="ps-3">
                  1
                </th>
                <td>Wire Supply Co. Delivery</td>
                <td>
                  <span className="bg-dark-subtle rounded-2 px-2 py-1">
                    Logistics
                  </span>
                </td>
                <td>-$1,250.00</td>
                <td>Oct 24, 2023</td>
              </tr>
              <tr>
                <th scope="col" className="ps-3">
                  2
                </th>
                <td>Wire Supply Co. Delivery</td>
                <td>
                  <span className="bg-dark-subtle rounded-2 px-2 py-1">
                    Logistics
                  </span>
                </td>
                <td>-$1,250.00</td>
                <td>Oct 24, 2023</td>
              </tr>
              <tr>
                <th scope="col" className="ps-3">
                  3
                </th>
                <td>Wire Supply Co. Delivery</td>
                <td>
                  <span className="bg-dark-subtle rounded-2 px-2 py-1">
                    Logistics
                  </span>
                </td>
                <td>-$1,250.00</td>
                <td>Oct 24, 2023</td>
              </tr>
              <tr>
                <th scope="col" className="ps-3">
                  1
                </th>
                <td>Wire Supply Co. Delivery</td>
                <td>
                  <span className="bg-dark-subtle rounded-2 px-2 py-1">
                    Logistics
                  </span>
                </td>
                <td>-$1,250.00</td>
                <td>Oct 24, 2023</td>
              </tr>
              <tr>
                <th scope="col" className="ps-3">
                  2
                </th>
                <td>Wire Supply Co. Delivery</td>
                <td>
                  <span className="bg-dark-subtle rounded-2 px-2 py-1">
                    Logistics
                  </span>
                </td>
                <td>-$1,250.00</td>
                <td>Oct 24, 2023</td>
              </tr>
              <tr>
                <th scope="col" className="ps-3">
                  3
                </th>
                <td>Wire Supply Co. Delivery</td>
                <td>
                  <span className="bg-dark-subtle rounded-2 px-2 py-1">
                    Logistics
                  </span>
                </td>
                <td>-$1,250.00</td>
                <td>Oct 24, 2023</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="filter px-3 py-2 bg-white text-center">
          <button className="btn btn-outline-primary custom-text-primary border-0 ">
            View All Transactions
          </button>
        </div>
      </div>
    </>
  );
}
