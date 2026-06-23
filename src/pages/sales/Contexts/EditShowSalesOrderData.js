import React, { createContext, useContext, useEffect, useState } from "react";
import "./EditShowSalesOrderDataStyle.css";
import useSalesOrdersData from "../hooks/useSalesOrdersData";

const EditShowSalesOrderDataContext = createContext();

export default function EditShowSalesOrderDataProvider({ children }) {
  const [animate, setAnimate] = useState(false);
  const [open, setOpen] = useState(false);
  const [salesOrder, setSalesOrder] = useState(null);
  const { updateSalesOrder } = useSalesOrdersData();

  const [update, setUpdate] = useState(null);
  const handleShowForm = (salesOrder, update = false) => {
    setOpen(!open);
    setSalesOrder(salesOrder);
    setUpdate(update);
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setAnimate(true);
      }, 10);
    } else {
      setTimeout(() => {
        setAnimate(false);
      }, 10);
    }
  }, [open]);
  
  let productsOfOrder;
  if (open) {
    productsOfOrder = salesOrder?.products.map((curr) => {
      return (
        <div
          key={curr?.id}
          className="border-bottom border-2  px-2 py-1 row p-0 m-0 g-2"
        >
          <div className="p-0 col-5 col-md-6">{curr?.name}</div>
          {update ? (
            <div className="p-0 col-2">
              <input
                type="number"
                className="mw-100"
                value={curr.quantity}
                onChange={(e) => {
                  let total = 0;
                  setSalesOrder((prev) => {
                    return {
                      ...prev,
                      products: prev.products.map((temp) => {
                        if (temp.id === curr.id) {
                          total += +e.target.value * temp.price;
                          return { ...temp, quantity: e.target.value };
                        } else {
                          total += temp.price * temp.quantity;
                          return temp;
                        }
                      }),
                    };
                  });
                  setSalesOrder((prev) => {
                    return {
                      ...prev,
                      totalPrice: total,
                    };
                  });
                }}
              />
            </div>
          ) : (
            <div className="p-0 col-2">{curr?.quantity}</div>
          )}

          <div className="p-0 col-3 col-md-2">{curr?.price}</div>
          <div className="p-0 col-2">{curr?.quantity * curr?.price}</div>
        </div>
      );
    });
  }
  function handleShiftToUpdate(e) {
    setUpdate(true);
  }
  function handleSaveUpdates(e) {
    updateSalesOrder(salesOrder);
    setOpen(!open);
  }

  return (
    <EditShowSalesOrderDataContext.Provider value={{ open, handleShowForm }}>
      {open ? (
        <div
          className={`modal fade  ${animate ? "show" : ""} bg-secondary`}
          onClick={handleShowForm}
          style={{ display: open ? "flex" : "none" }}
        >
          <div className="modal-dialog">
            <div
              className="modal-content"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  {update ? "Edit Order" : "Order Details"}{" "}
                  <span className="custom-text-primary">{salesOrder?.id}</span>
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleShowForm}
                ></button>
              </div>
              <div className="modal-body container">
                <div className="row">
                  <div className="col">
                    <span>User</span>
                    <h5>{salesOrder.user}</h5>
                    <p>alex.j@example.com</p>
                  </div>
                  <div className="col">
                    <span>Transaction Date</span>
                    <h5>{salesOrder.update}</h5>
                  </div>
                </div>
                <div className="row my-2">
                  <div className="w-100 border border-2 rounded-2 p-0 ">
                    <div className="header border-bottom border-2 bg-body-secondary px-2 py-1 row p-0 m-0">
                      <div className="p-0 col-5 col-md-6">Product Name</div>
                      <div className="p-0 col-2">Qty</div>
                      <div className="p-0 col-3 col-md-2">Unit Price</div>
                      <div className="p-0 col-2">Subtotal</div>
                    </div>
                    <div className="body">{productsOfOrder}</div>
                  </div>
                </div>

                <div className="row justify-content-end">
                  <div style={{ width: "250px" }}>
                    <div
                      className="d-flex justify-content-between text-dark-subtle"
                      style={{ fontSize: "15px" }}
                    >
                      <span>Subtotal</span>
                      <span>{salesOrder.totalPrice}</span>
                    </div>
                    <div
                      className="d-flex justify-content-between text-dark-subtle"
                      style={{ fontSize: "15px" }}
                    >
                      <span>Tax (8%)</span>
                      <span>${salesOrder.totalPrice * 0.08}</span>
                    </div>
                    <hr className="my-2" />
                    <div
                      className="d-flex justify-content-between text-dark-subtle"
                      style={{ fontSize: "15px" }}
                    >
                      <span>Grand Total</span>
                      <span className="custom-text-primary">
                        ${salesOrder.totalPrice - salesOrder.totalPrice * 0.08}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleShowForm}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={update ? handleSaveUpdates : handleShiftToUpdate}
                >
                  {update ? "Save changes" : "Edit Order"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {children}
    </EditShowSalesOrderDataContext.Provider>
  );
}

export const useEditShowSalesOrder = () =>
  useContext(EditShowSalesOrderDataContext);
