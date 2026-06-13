import React from "react";
import { createContext, useContext, useReducer } from "react";
const ProductsDataContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      console.log("Add");
      return state;
    case "delete":
      console.log("delete");
      return state;
    case "update":
      console.log("update");
      return state;
    default:
      return state;
  }
};
export default function ProductsDataProvider({ children }) {
  const data = [
    {
      id: 1,
      name: "Samsung TV",
      category: "Displays",
      price: "499.00",
      stock: 24,
    },
    {
      id: 2,
      name: "Samsung Mobile",
      category: "Mobile",
      price: "49.00",
      stock: 1,
    },
    {
      id: 3,
      name: "Fridge",
      category: "Electricity",
      price: "69.00",
      stock: 20,
    },
    {
      id: 4,
      name: "Dishses",
      category: "Others",
      price: "90.00",
      stock: 22,
    },
    { id: 5, name: "Oppo", category: "Mobile", price: "200.00", stock: 10 },
    { id: 6, name: "Redmi", category: "Mobile", price: "343.00", stock: 2 },
    { id: 7, name: "Realme", category: "Mobile", price: "5687.00", stock: 31 },
    { id: 8, name: "Apple", category: "Mobile", price: "3112.00", stock: 12 },
  ];
  const [products, dispatch] = useReducer(reducer, data);

  return (
    <>
      <ProductsDataContext.Provider value={{ products, dispatch }}>
        {children}
      </ProductsDataContext.Provider>
    </>
  );
}

export const useData = () => {
  const data = useContext(ProductsDataContext);

  return data;
};
