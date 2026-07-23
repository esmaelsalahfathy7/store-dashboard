import { useEffect, useState } from "react";

export default function useSalesOrdersData() {
  let sales = [];
  if (localStorage.getItem("sales")) {
    sales = JSON.parse(localStorage.getItem("sales"));
  }
  const [salesOrders, setSalesOrder] = useState(sales);

  useEffect(() => {
    localStorage.setItem("sales", JSON.stringify(salesOrders));
  }, [salesOrders]);
  function addSalesOrder(newSalesOrder) {
    setSalesOrder([...salesOrders, newSalesOrder]);
  }
  function deleteSalesOrder(salesOrderId) {
    const newSalesOrder = salesOrders.filter((currOrder) => {
      return currOrder.id !== salesOrderId;
    });
    setSalesOrder(newSalesOrder);
  }
  function updateSalesOrder(updatedsalesOrder) {
    const newSalesOrder = salesOrders.map((currSalesOrder) => {
      if (currSalesOrder.id === updatedsalesOrder.id) {
        return updatedsalesOrder;
      } else {
        return currSalesOrder;
      }
    });
    setSalesOrder(newSalesOrder);
  }
  return {
    salesOrders: salesOrders,
    addSalesOrder: addSalesOrder,
    deleteSalesOrder: deleteSalesOrder,
    updateSalesOrder: updateSalesOrder,
  };
}
