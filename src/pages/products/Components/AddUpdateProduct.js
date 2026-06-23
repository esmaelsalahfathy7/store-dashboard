import React, { useState } from "react";
import { useShowAlert } from "../../../Contexts/CustomAlertContext";

export default function AddUpdateProduct({
  handleCloseModal,
  selectedProduct,
  productsInfo,
}) {
  const [newProductData, setNewProductData] = useState(selectedProduct);
  const { setAlert } = useShowAlert();
  const { addProduct, updateProduct } = productsInfo;

  const handleAddProdcut = () => {
    console.log(newProductData);
    addProduct(newProductData);
    handleCloseModal();
    setAlert("Product Added Successfully");
  };

  const handleUpdateProduct = () => {
    handleCloseModal();
    setAlert("Product Updated Successfully");
    updateProduct(newProductData);
  };

  const handleInputChange = (e) => {
    const { value, name } = e.currentTarget;
    setNewProductData({ ...newProductData, [name]: value });
  };

  const isAdd = !selectedProduct.id;
  console.log(isAdd);

  const dsiabled =
    newProductData.category === "" ||
    newProductData.id === "" ||
    newProductData.name === "" ||
    +newProductData.price <= 0 ||
    +newProductData.stock <= 0;
  return (
    <>
      <div
        className="modal fade show d-flex bg-dark bg-opacity-50 justify-content-center m-0"
        onClick={handleCloseModal}
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
                    type="text"
                    id="productName"
                    name="name"
                    className="form-control"
                    aria-describedby="productName"
                    placeholder={`e.g Smart LED TV 55"`}
                    value={newProductData.name}
                    onChange={handleInputChange}
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
                    name="id"
                    className="form-control"
                    aria-describedby="productCode"
                    placeholder={`e.g A4351`}
                    value={newProductData.id}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col">
                  <label htmlFor="category" className="form-label">
                    Product Category
                  </label>
                  <select
                    id="category"
                    className="form-select"
                    name="category"
                    onChange={handleInputChange}
                  >
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
                    name="price"
                    className="form-control"
                    aria-describedby="unitPrice"
                    placeholder={`0.00`}
                    value={newProductData.price}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col">
                  <label htmlFor="productStock" className="form-label">
                    Initial Stock
                  </label>
                  <input
                    type="number"
                    id="productStock"
                    name="stock"
                    className="form-control"
                    aria-describedby="productStock"
                    placeholder={`0`}
                    value={newProductData.stock}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={!!isAdd ? handleAddProdcut : handleUpdateProduct}
                disabled={dsiabled}
              >
                {!!isAdd ? "Add Product" : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
