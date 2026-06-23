import React from "react";
import { useState } from "react";
import AddUpdateProduct from "./Components/AddUpdateProduct";
import ProductsList from "./Components/ProductsList";
import OrderMenu from "./Components/OrderMenu";
import "./ProductsPage.css";
import CustomPagination from "../../Components/CustomPagination";
import useProductsData from "./hooks/useProductsData";

export default function ProductsPage() {
  const productsInfo = useProductsData();

  const [showAddProduct, setShowAddProduct] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [order, setOrder] = useState([]);

  function handleAddProductToOrder(product, productQuantity) {
    const existProduct = order.reduce((prev, curr) => {
      if (curr.id === product.id) {
        return curr;
      } else {
        return prev;
      }
    }, {});

    if (existProduct.id) {
      // if The Product Already exist, then update it
      setOrder(
        order.map((currProduct) => {
          if (currProduct.id === product.id) {
            return product;
          } else {
            return currProduct;
          }
        }),
      );
    } else {
      // if The Product doesn`t exist , then add it
      setOrder([...order, product]);
    }
  }
  function handleRemoveProductFromOrder(product) {
    setOrder(
      order.filter((curr) => {
        return product.id !== curr.id;
      }),
    );
  }

  function handleClearOrder() {
    setOrder([]);
  }

  const numberOfProducts = productsInfo.products.length;

  const productsPerPage = 6;
  const handleCloseAddUpdateProduct = () => {
    setShowAddProduct(false);
  };

  const handleAddProduct = () => {
    setSelectedProduct({
      id: "",
      name: "",
      category: "Displays",
      price: 0,
      stock: 0,
    });
    setShowAddProduct(true);
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setShowAddProduct(true);
  };

  const handleFilterProdcuts = () => {
    console.log("Filteration will be here");
  };

  return (
    <div className="row g-3 h-100 m-0">
      <div className="m-0 d-flex flex-column col-sm-12 col-md-9 gap-2">
        <div className="head d-flex justify-content-between flex-column flex-md-row ">
          <div>
            <h1 className=" fw-bold">Products</h1>
            <p style={{ fontSize: "14px", color: "#464554" }}>
              Manage inventory and process quick sales.
            </p>
          </div>
          <div className="btns d-flex gap-2 align-items-center ">
            <button
              onClick={handleFilterProdcuts}
              className="border border-1 border-secondary-subtle btn btn-light btn-sm fw-medium px-3 py-1 custom-flex-center gap-2 rounded-3"
            >
              <i className="bi bi-filter "></i>
              Filter
            </button>
            <button
              onClick={handleAddProduct}
              className="btn custom-btn-primary btn-sm px-3 py-1 flex-center gap-2 rounded-3 fw-medium"
            >
              <i className="bi bi-plus"></i>
              Add Product
            </button>
          </div>
        </div>
        <div className="products-list d-flex flex-grow-1 flex-column justify-content-between">
          <div className="table-responsive border  rounded-4 bg-white ">
            <table className="table table-hover m-0 align-middle ">
              <thead className="align-middle text-center">
                <tr>
                  <th scope="col">Code</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Price</th>
                  <th scope="col">Stock</th>
                  <th scope="col" className="">
                    Actions
                  </th>
                </tr>
              </thead>
              {
                <ProductsList
                  pageNumber={currentPage}
                  productsPerPage={productsPerPage}
                  productsInfo={productsInfo}
                  handleEditProduct={handleEditProduct}
                  handleAddProductToOrder={handleAddProductToOrder}
                />
              }
            </table>
          </div>
          <>
            <CustomPagination
              handlepageChange={setCurrentPage}
              currPage={currentPage}
              rowsPerPage={productsPerPage}
              contentNumber={numberOfProducts}
            />
          </>
        </div>
      </div>
      <>
        <OrderMenu
          order={order}
          onRemoveProduct={handleRemoveProductFromOrder}
          clearOrder={handleClearOrder}
        />
      </>
      {showAddProduct ? (
        <AddUpdateProduct
          handleCloseModal={handleCloseAddUpdateProduct}
          productsInfo={productsInfo}
          selectedProduct={selectedProduct}
        />
      ) : null}
    </div>
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
