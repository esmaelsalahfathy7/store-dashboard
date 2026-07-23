import React, { useState } from "react";
import "./SalesPage.css";
import SalesOrderList from "./Components/SalesOrderList";
import CustomPagination from "../../Components/CustomPagination";
import EditShowSalesOrderDataProvider from "./Contexts/EditShowSalesOrderData";
import { useSalesOrders } from "./Contexts/SalesOrdersContext";
export default function SalesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { salesOrders, deleteSalesOrder } = useSalesOrders();
  const numberOfSalesOrders = salesOrders.length;

  const salesOrderPerPage = 4;

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <>
      <EditShowSalesOrderDataProvider>
        <div className="sales-page h-100 m-0 d-flex flex-column ">
          <div className="d-flex justify-content-between flex-column  ">
            <h2 className="fw-bold m-0">Sales History</h2>
            <p style={{ fontSize: "14px", color: "#464554" }}>
              Track and manage all customer transactions.
            </p>
          </div>
          <div className="sales-list d-flex w-100 flex-column justify-content-between border rounded-4 overflow-hidden">
            <div className="header p-3 row g-2 justify-content-between">
              <div className="col-12 col-lg-4">
                <div className="search-bar d-flex align-items-center mw-100 border border-1 bg-white rounded-2 px-3 py-1">
                  <i className="bi bi-search"></i>
                  <input
                    className="border-0 p-2 flex-grow-1"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    style={{ outline: "none" }}
                  />
                </div>
              </div>
              <div className="btns col-12 col-lg-4 justify-content-lg-end d-flex align-items-center gap-2">
                <button
                  type="button"
                  className="btn btn-outline-dark fw-medium bg-white custom-flex-center gap-2 rounded-4 px-3 py-1 btn-sm"
                >
                  <i className="bi bi-calendar4"></i>
                  Date
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark fw-medium bg-white custom-flex-center gap-2 rounded-4 px-3 py-1 btn-sm"
                >
                  <i className="bi bi-person "></i>
                  User
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark fw-medium bg-white custom-flex-center gap-2 rounded-4 px-3 py-1 btn-sm"
                >
                  <i className="bi bi-filter"></i>
                  Status
                </button>
              </div>
            </div>
            <div className="table-responsive bg-white w-100 ">
              <table className="table table-hover m-0 align-middle ">
                <thead className="align-middle ">
                  <tr>
                    <th scope="col" className="ps-3">
                      Sale ID
                    </th>
                    <th scope="col">Date & Time</th>
                    <th scope="col">User</th>
                    <th scope="col">Items</th>
                    <th scope="col">Total Price</th>
                    <th scope="col">Status</th>
                    <th scope="col" className="text-end pe-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <SalesOrderList
                    pageNumber={currentPage}
                    onPageChange={handlePageChange}
                    salesOrders={salesOrders}
                    deleteSalesOrder={deleteSalesOrder}
                  />
                  {/* <tr>
                  <td className="p-3 custom-text-primary fw-medium">Sale ID</td>
                  <td>Oct 24, 2023, 02:30 PM</td>
                  <td>Alex Johnson</td>
                  <td>3 items</td>
                  <td>$1,250.00</td>
                  <td>
                    <span className="bg-success text-success bg-opacity-25 py-1 px-2 rounded-pill">
                      Completed
                    </span>
                  </td>
                  <td className="pe-3">
                    <div className="d-flex gap-1 justify-content-end">
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-sm border-0"
                      >
                        <i className="bi bi-eye"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary border-0 btn-sm"
                      >
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-danger border-0 btn-sm"
                      >
                        <i className="bi bi-trash-fill "></i>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="p-3 custom-text-primary fw-medium">Sale ID</td>
                  <td>Oct 24, 2023, 02:30 PM</td>
                  <td>Alex Johnson</td>
                  <td>3 items</td>
                  <td>$1,250.00</td>
                  <td>
                    <span className="bg-success text-success bg-opacity-25 py-1 px-2 rounded-pill">
                      Completed
                    </span>
                  </td>
                  <td className="pe-3">
                    <div className="d-flex gap-1 justify-content-end">
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-sm border-0"
                      >
                        <i className="bi bi-eye"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary border-0 btn-sm"
                      >
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-danger border-0 btn-sm"
                      >
                        <i className="bi bi-trash-fill "></i>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="p-3 custom-text-primary fw-medium">Sale ID</td>
                  <td>Oct 24, 2023, 02:30 PM</td>
                  <td>Alex Johnson</td>
                  <td>3 items</td>
                  <td>$1,250.00</td>
                  <td>
                    <span className="bg-success text-success bg-opacity-25 py-1 px-2 rounded-pill">
                      Completed
                    </span>
                  </td>
                  <td className="pe-3">
                    <div className="d-flex gap-1 justify-content-end">
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-sm border-0"
                      >
                        <i className="bi bi-eye"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary border-0 btn-sm"
                      >
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-danger border-0 btn-sm"
                      >
                        <i className="bi bi-trash-fill "></i>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="p-3 custom-text-primary fw-medium">Sale ID</td>
                  <td>Oct 24, 2023, 02:30 PM</td>
                  <td>Alex Johnson</td>
                  <td>3 items</td>
                  <td>$1,250.00</td>
                  <td>
                    <span className="bg-success text-success bg-opacity-25 py-1 px-2 rounded-pill">
                      Completed
                    </span>
                  </td>
                  <td className="pe-3">
                    <div className="d-flex gap-1 justify-content-end">
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-sm border-0"
                      >
                        <i className="bi bi-eye"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary border-0 btn-sm"
                      >
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-danger border-0 btn-sm"
                      >
                        <i className="bi bi-trash-fill "></i>
                      </button>
                    </div>
                  </td>
                </tr> */}
                </tbody>
                {
                  // <ProductsList
                  //   pageNumber={currentPage}
                  //   productsPerPage={productsPerPage}
                  // />
                }
              </table>
            </div>
            <>
              <CustomPagination
                handlepageChange={setCurrentPage}
                currPage={currentPage}
                rowsPerPage={salesOrderPerPage}
                contentNumber={numberOfSalesOrders}
              />
            </>
          </div>
        </div>
      </EditShowSalesOrderDataProvider>
    </>
  );
}
