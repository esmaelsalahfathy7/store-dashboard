import React from "react";
import { useState } from "react";
import { useData } from "../Contexts/ProductsData";

export default function ProductsContent({ currPage = 1 }) {
  const { products } = useData();
  const [productQuantity, setproductQuantity] = useState(0);
  console.log(currPage);
  const data = products.map((ele) => {
    return (
      <tr className="align-items-center" key={ele.id}>
        <th scope="row">{ele.id}</th>
        <td>{ele.name}</td>
        <td>{ele.category}</td>
        <td>${ele.price}</td>
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
              >
                -
              </button>
              <input
                type="text"
                className=" text-center border-0  form-control"
                value={productQuantity}
                onChange={(e) => {
                  const value = e.currentTarget.value;
                  setproductQuantity(value > 24 ? 24 : value < 0 ? 0 : value);
                }}
              />
              <button
                className="btn btn-outline-secondary border-0 rounded-0"
                onClick={() => {
                  setproductQuantity((prev) => (prev < "24" ? ++prev : prev));
                }}
              >
                +
              </button>
            </div>
            <span>/{ele.stock}</span>
          </div>
        </td>
        <td>
          <div className="d-flex gap-1">
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
            <button type="button" className="btn btn-primary btn-sm">
              <i className="bi bi-cart3 me-2"></i>Add
            </button>
          </div>
        </td>
      </tr>
    );
  });
  return (
    <>
      <tbody className="table-group-divider">
        {data}
        {/* <tr className="align-items-center">
          <th scope="row">1</th>
          <td>Samsung TV</td>
          <td>Displays</td>
          <td>$499.00</td>
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
                >
                  -
                </button>
                <input
                  type="text"
                  className=" text-center border-0  form-control"
                  value={productQuantity}
                  onChange={(e) => {
                    const value = e.currentTarget.value;
                    setproductQuantity(value > 24 ? 24 : value < 0 ? 0 : value);
                  }}
                />
                <button
                  className="btn btn-outline-secondary border-0 rounded-0"
                  onClick={() => {
                    setproductQuantity((prev) => (prev < "24" ? ++prev : prev));
                  }}
                >
                  +
                </button>
              </div>
              <span>/24</span>
            </div>
          </td>
          <td>
            <div className="d-flex gap-1">
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
              <button type="button" className="btn btn-primary btn-sm">
                <i className="bi bi-cart3 me-2"></i>Add
              </button>
            </div>
          </td>
        </tr> */}
      </tbody>
    </>
  );
}
