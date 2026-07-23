import { useEffect, useState } from "react";

export default function useProductsData() {
  let data = [];
  if (localStorage.getItem("products")) {
    data = JSON.parse(localStorage.getItem("products"));
  }
  const [products, setProducts] = useState(data);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  function addProduct(newProduct) {
    setProducts([...products, newProduct]);
  }
  function updateProduct(updatedProducts) {
    setProducts(
      products.map((currProduct) => {
        if (currProduct.id === updatedProducts.id) {
          return updatedProducts;
        } else {
          return currProduct;
        }
      }),
    );
  }
  function deleteProduct(productId) {
    setProducts(products.filter((currProduct) => currProduct.id !== productId));
  }
  return {
    products: products,
    addProduct: addProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,
  };
}
