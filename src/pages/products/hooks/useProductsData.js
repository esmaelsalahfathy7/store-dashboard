import { useState } from "react";

export default function useProductsData() {
  const data = [
    {
      id: 1,
      name: "Samsung TV",
      category: "Displays",
      price: 499.0,
      stock: 24,
    },
    {
      id: 2,
      name: "Samsung Mobile",
      category: "Mobile",
      price: 49.0,
      stock: 1,
    },
    {
      id: 3,
      name: "Fridge",
      category: "Electricity",
      price: 69.0,
      stock: 20,
    },
    {
      id: 4,
      name: "Dishses",
      category: "Others",
      price: 90.0,
      stock: 22,
    },
    { id: 5, name: "Oppo", category: "Mobile", price: 200.0, stock: 10 },
    { id: 6, name: "Redmi", category: "Mobile", price: 43.0, stock: 2 },
    { id: 7, name: "Realme", category: "Mobile", price: 5687.0, stock: 31 },
    { id: 8, name: "Apple", category: "Mobile", price: 3112.0, stock: 12 },
    { id: 82, name: "Apple", category: "Mobile", price: 3112.0, stock: 12 },
    { id: 83, name: "Apple", category: "Mobile", price: 3112.0, stock: 12 },
    { id: 84, name: "Apple", category: "Mobile", price: 3112.0, stock: 12 },
    { id: 81, name: "Apple", category: "Mobile", price: 3112.0, stock: 12 },
    { id: 898, name: "Apple", category: "Mobile", price: 3112.0, stock: 12 },
    { id: 833, name: "Apple", category: "Mobile", price: 3112.0, stock: 12 },
  ];
  const [products, setProducts] = useState(data);

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
