import React from "react";
import { useState } from "react";

export default function ProductInfo({
  productsInfo,
  product,
  handleEditProduct,
  handleAddProductToOrder,
}) {
  const [productQuantity, setproductQuantity] = useState(0);
  const handleDeleteProduct = () => {
    productsInfo.deleteProduct(product.id);
  };

  // const handleAddProductToOrder = () => {
  //   if (productQuantity === 0) return;
  //   const existProduct = order.reduce((prev, curr) => {
  //     if (curr.id === product.id) {
  //       console.log("hello");
  //       return curr;
  //     } else {
  //       return prev;
  //     }
  //   }, {});

  //   const newProduct = { ...product, quantity: productQuantity };
  //   if (existProduct.id) {
  //     dispatch({
  //       type: "update",
  //       payload: newProduct,
  //     });
  //   } else {
  //     dispatch({
  //       type: "add",
  //       payload: newProduct,
  //     });
  //   }
  // };

  return (
    <>
      <tr className="align-items-center h-25">
        <th scope="row">{product.id}</th>
        <td className="fw-bolder">{product.name}</td>
        <td>
          <span
            className="bg-primary bg-opacity-10 rounded-4 p-2 "
            style={{ fontSize: "12px" }}
          >
            {product.category}
          </span>
        </td>
        <td className="fw-medium fs-6" style={{ fontSize: "14px" }}>
          ${Number(product.price).toFixed(2)}
        </td>
        <td>
          <div className="d-flex align-items-center gap-1">
            <div
              className="bg-white border rounded-2 d-flex flex-row overflow-hidden input-group-sm"
              style={{ width: "80px" }}
            >
              <button
                className="btn btn-outline-secondary border-0 rounded-0"
                onClick={() => {
                  setproductQuantity((prev) => (prev > 0 ? --prev : prev));
                }}
                disabled={productQuantity <= 0}
              >
                -
              </button>
              <input
                type="text"
                className=" text-center border-0  form-control"
                value={productQuantity}
                onChange={(e) => {
                  const value = e.currentTarget.value;
                  setproductQuantity(
                    value > product.stock
                      ? product.stock
                      : value < 0
                        ? 0
                        : value,
                  );
                }}
              />
              <button
                className="btn btn-outline-secondary border-0 rounded-0"
                onClick={() => {
                  setproductQuantity((prev) =>
                    prev < product.stock ? ++prev : prev,
                  );
                }}
                disabled={productQuantity >= product.stock}
              >
                +
              </button>
            </div>
            <span style={{ fontSize: "13px", color: "#6c6b6d" }}>
              /{product.stock}
            </span>
          </div>
        </td>
        <td>
          <div className="d-flex gap-1 ">
            <button
              type="button"
              className="btn btn-outline-secondary border-0 btn-sm"
              onClick={() => {
                handleEditProduct(product);
              }}
            >
              <i className="bi bi-pencil"></i>
            </button>
            <button
              type="button"
              className="btn btn-outline-danger border-0 btn-sm"
              onClick={handleDeleteProduct}
            >
              <i className="bi bi-trash-fill "></i>
            </button>
            <button
              type="button"
              className="btn custom-btn-primary btn-sm border-0"
              onClick={() => {
                handleAddProductToOrder({
                  ...product,
                  quantity: productQuantity,
                });
              }}
              disabled={productQuantity === 0}
            >
              <i className="bi bi-cart3 me-2"></i>Add
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
