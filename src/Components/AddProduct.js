import React from "react";
import { useShowAlert } from "../hooks/CustomAlertContext";
import { useData } from "../Contexts/ProductsData";

export default function AddProduct({ show, handleShowAddProduct }) {
  const data = useData();

  const { setAlert } = useShowAlert();
  const handleAddProdcut = () => {
    console.log("Product Added");
    handleShowAddProduct();
    setAlert("Product Added Successfully");
    data.dispatch({ type: "add" });
  };
  if (!show) return null;
  return (
    <>
      <div
        className="modal fade show d-flex bg-dark bg-opacity-50 justify-content-center m-0"
        onClick={(e) => {
          handleShowAddProduct();
        }}
      >
        <div className=" modal-dialog-centered" style={{ width: "500px" }}>
          <div
            className="modal-content"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="modal-header">
              <h1 className="modal-title fs-6" id="exampleModalLabel">
                Add New Product
              </h1>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col">
                  <label htmlFor="productName" className="form-label">
                    Product Name
                  </label>
                  <input
                    type="password"
                    id="productName"
                    className="form-control"
                    aria-describedby="productName"
                    placeholder={`e.g Smart LED TV 55"`}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="productCode" className="form-label">
                    Product Code
                  </label>
                  <input
                    type="text"
                    id="productCode"
                    className="form-control"
                    aria-describedby="productCode"
                    placeholder={`e.g A4351`}
                  />
                </div>
                <div className="col">
                  <label htmlFor="category" className="form-label">
                    Product Code
                  </label>
                  <select id="category" className="form-select">
                    <option value="0">Displays</option>
                    <option value="1">Climate</option>
                    <option value="2">Appliances</option>
                    <option value="3">Audio</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="unitPrice" className="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    id="unitPrice"
                    className="form-control"
                    aria-describedby="unitPrice"
                    placeholder={`0.00`}
                  />
                </div>
                <div className="col">
                  <label htmlFor="productStock" className="form-label">
                    Initial Stock
                  </label>
                  <input
                    type="number"
                    id="productStock"
                    className="form-control"
                    aria-describedby="productStock"
                    placeholder={`0`}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  handleShowAddProduct();
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddProdcut}
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
