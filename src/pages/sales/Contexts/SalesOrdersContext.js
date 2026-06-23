import React, { createContext, useContext } from "react";
import useSalesOrdersData from "../hooks/useSalesOrdersData";

const SalesOrdersContext = createContext();

export default function SalesOrdersProvider({ children }) {
  const { salesOrders, addSalesOrder, deleteSalesOrder, updateSalesOrder } =
    useSalesOrdersData();
  return (
    <SalesOrdersContext.Provider
      value={{ salesOrders, addSalesOrder, deleteSalesOrder, updateSalesOrder }}
    >
      {children}
    </SalesOrdersContext.Provider>
  );
}

export const useSalesOrders = () => useContext(SalesOrdersContext);
