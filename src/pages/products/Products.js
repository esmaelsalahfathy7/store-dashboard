import React from "react";
import { useState } from "react";
import AddProduct from "../../Components/AddProduct";
import ProductsContent from "../../Components/ProductsContent";
import ProductsDataProvider from "../../Contexts/ProductsData";

export default function Products() {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const handleShowAddProduct = () => {
    setShowAddProduct((prev) => !prev);
  };
  const handleFilterProdcuts = () => {
    console.log("Filteration will be here");
  };

  return (
    <ProductsDataProvider>
      <div className="row g-3 h-100 m-0">
        <div className="m-0 d-flex flex-column col-sm-12 col-md-8 gap-2">
          <div className="head d-flex justify-content-between flex-column flex-md-row ">
            <div>
              <h2>Products</h2>
              <p className="" style={{ fontSize: "14px" }}>
                Manage inventory and process quick sales.
              </p>
            </div>
            <div className="btns d-flex gap-2 align-items-center">
              <button
                onClick={handleFilterProdcuts}
                className=" border border-1 border-secondary-subtle btn btn-light btn-sm"
              >
                <i className="bi bi-filter"></i>
                Filter
              </button>
              <button
                onClick={handleShowAddProduct}
                className="btn btn-primary btn-sm"
              >
                <i className="bi bi-plus"></i>
                Add Product
              </button>
            </div>
          </div>
          <div className="products-list h-100 d-flex flex-column">
            <div className="table-responsive flex-grow-1 border rounded-4 bg-white ">
              <table className="table table-hover m-0 align-middle ">
                <thead>
                  <tr>
                    <th scope="col">Code</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Price</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                {<ProductsContent />}
              </table>
            </div>
            <>
              <ProductsPages />
            </>
          </div>
        </div>
        <>
          <OrderMenu />
        </>
        {showAddProduct ?  <AddProduct
          show={showAddProduct}
          handleShowAddProduct={handleShowAddProduct}
        /> : null}
        
      </div>
    </ProductsDataProvider>
  );
}

function OrderMenu() {
  return (
    <>
      <div className="card col-sm-12 col-md-4 m-0">
        <div className="card-header d-flex justify-content-between align-items-center bg-white">
          <h5>
            <i className="bi bi-bag-dash-fill me-2 text-primary"></i>Current
            Order
          </h5>
          <span
            className="d-inline-flex justify-content-center align-items-center text-white rounded-circle bg-primary"
            style={{ width: "20px", height: "20px" }}
          >
            1
          </span>
        </div>
        <div className="card-body">
          <div className="">
            <div
              className="product border rounded-2 p-2"
              style={{ fontSize: "13px" }}
            >
              <div className="d-flex justify-content-between align-items-center fw-medium">
                <span className="">Product Name</span>
                <span>$499.00</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span className="text-black-50">1 * $499.00</span>
                <button
                  type="button"
                  className="btn  border-0"
                  style={{ fontSize: "13px" }}
                >
                  <i className="bi bi-trash-fill text-danger"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card-footer bg-white d-flex flex-column gap-2"
          style={{ fontSize: "13px" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-black-50">Subtotal</span>
            <span>$499.00</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-black-50">Tax (8%)</span>
            <span>$39.92</span>
          </div>
          <hr className="m-0" />
          <div className="d-flex justify-content-between align-items-center fs-6">
            <span>Total</span>
            <span className="text-primary">$538.92</span>
          </div>
          <button type="button" className="btn btn-primary flex-grow-1">
            <i className="bi bi-cart3"></i> Confirm Order
          </button>
        </div>
      </div>
    </>
  );
}

function ProductsPages() {
  const [productsPage, setProductsPage] = useState(1);
  const handleNextBtn = () => {
    if (productsPage === 3) return;
    setProductsPage((prev) => ++prev);
  };

  const handlePrevBtn = () => {
    if (productsPage === 1) return;
    setProductsPage((prev) => --prev);
  };

  const handlePageChange = (e) => {
    const value = e.currentTarget.dataset.page;
    setProductsPage(+value);
  };
  return (
    <>
      <div className="filter d-flex justify-content-between align-items-center border-top px-2 pt-4">
        <div>
          Showing <span>2</span> Of <span>24</span> Products{" "}
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination m-0">
            <li
              className={`page-item ${productsPage === 1 ? "disabled" : ""}`}
              onClick={handlePrevBtn}
            >
              <span className="page-link">&laquo;</span>
            </li>
            <li
              className="page-item"
              style={{ cursor: "pointer" }}
              data-page={1}
              onClick={handlePageChange}
            >
              <span
                className={`page-link ${productsPage === 1 ? "active" : ""}`}
              >
                1
              </span>
            </li>
            <li
              className="page-item"
              style={{ cursor: "pointer" }}
              data-page={2}
              onClick={handlePageChange}
            >
              <span
                className={`page-link ${productsPage === 2 ? "active" : ""}`}
              >
                2
              </span>
            </li>
            <li
              className="page-item"
              style={{ cursor: "pointer" }}
              data-page={3}
              onClick={handlePageChange}
            >
              <span
                className={`page-link ${productsPage === 3 ? "active" : ""}`}
              >
                3
              </span>
            </li>
            <li
              className={`page-item ${productsPage === 3 ? "disabled" : ""}`}
              onClick={handleNextBtn}
            >
              <span className="page-link">&raquo;</span>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

// function ProductCard() {
//   return (
//     <div className="card col p-0">
//       <img src={"..."} className="card-img-top" alt="..." />
//       <div className="card-body">
//         <div className="card-info ">
//           <h5 className="card-title m-0">Card title </h5>
//           <p style={{ fontSize: "13px" }}>dsadsad sadas</p>
//         </div>
//         <div className="d-flex justify-content-between text-center">
//           <div className="price d-flex flex-column">
//             <span>Price</span>
//             <span>$500</span>
//           </div>
//           <div className="stock d-flex flex-column ">
//             <span>Stock</span>
//             <span>24 Units</span>
//           </div>
//         </div>
//       </div>
//       <div className="card-footer bg-white d-flex justify-content-between align-items-center gap-1">
//         <button type="button" className="btn btn-outline-primary btn-sm">
//           <i className="bi bi-pencil"></i>
//         </button>
//         <button type="button" className="btn btn-outline-danger btn-sm">
//           <i className="bi bi-trash-fill"></i>
//         </button>
//         <button
//           type="button"
//           className="btn btn-outline-success btn-sm border-0"
//         >
//           <i className="bi bi-cart3"></i> Add To Cart
//         </button>
//       </div>
//     </div>
//   );
// }
