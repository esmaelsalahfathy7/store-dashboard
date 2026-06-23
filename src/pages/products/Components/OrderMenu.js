import React from "react";
import { useSalesOrders } from "../../sales/Contexts/SalesOrdersContext";

export default function OrderMenu({ order, onRemoveProduct, clearOrder }) {
  const { addSalesOrder } = useSalesOrders();

  let totalPrice = 0;
  const orderList = order.map((prod) => {
    totalPrice += +prod.price * prod.quantity;
    return (
      <div
        className="product border rounded-2 p-2"
        style={{ fontSize: "13px" }}
        key={prod.id}
      >
        <div className="d-flex justify-content-between align-items-center fw-medium">
          <span>{prod.name}</span>
          <span>${(+prod.quantity * +prod.price).toFixed(2)}</span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <span className="text-black-50">
            {`${prod.quantity} * $${prod.price.toFixed(2)}`}
          </span>
          <button
            type="button"
            className="btn  border-0"
            style={{ fontSize: "13px" }}
            onClick={() => {
              onRemoveProduct(prod);
            }}
          >
            <i className="bi bi-trash-fill text-danger"></i>
          </button>
        </div>
      </div>
    );
  });

  const tax = 0.08 * totalPrice;
  const totalPriceAfterTax = totalPrice - tax;

  const handleConfirmOrder = () => {
    clearOrder();
    addSalesOrder({
      id: 5543543,
      date: Date.now(),
      user: "esmeal",
      items: order.length,
      totalPrice: totalPrice,
      status: "complete",
      products: order,
    });
    console.log(
      "Confirm Order Will Be Here, And Total Price Is: " + totalPriceAfterTax,
    );
  };

  return (
    <>
      {/* Order Component */}
      <div className="card col-sm-12 col-md-3 m-0 mh-100">
        {/* Order Header */}
        <div className="card-header d-flex justify-content-between align-items-center bg-white">
          <h5>
            <i className="bi bi-bag-dash-fill me-2 custom-text-primary"></i>
            Current Order
          </h5>
          <span
            className="d-inline-flex justify-content-center align-items-center text-white rounded-circle custom-bg-primary"
            style={{ width: "25px", height: "25px" }}
          >
            {order.length}
          </span>
        </div>
        {/* Order Body */}
        <div className="card-body h-100 overflow-y-auto">
          {/*Products Of The Order */}
          <div className="d-flex flex-column gap-2">
            {orderList || "No Products Added"}
          </div>
        </div>
        {/* Footer */}
        <div
          className="card-footer bg-white d-flex flex-column gap-2"
          style={{ fontSize: "14px" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-black-50">Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-black-50">Tax (8%)</span>
            <span>${(totalPrice * 0.08).toFixed(2)}</span>
          </div>
          <hr className="m-0" />
          <div className="d-flex justify-content-between align-items-center fs-6">
            <span>Total</span>
            <span className="custom-text-primary fs-5 fw-bold">
              ${(totalPrice - totalPrice * 0.08).toFixed(2)}
            </span>
          </div>
          <button
            type="button"
            className="btn custom-btn-primary flex-grow-1 p-2 border-0"
            onClick={handleConfirmOrder}
            disabled={orderList.length === 0}
          >
            <i className="bi bi-cart3"></i> Confirm Order
          </button>
        </div>
      </div>
    </>
  );
}
