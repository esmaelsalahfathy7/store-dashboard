import { useState } from "react";

export default function useSalesOrdersData() {
  const sales = [
    {
      id: 1,
      date: Date.now(),
      user: "Esmael Salah",
      items: 3,
      totalPrice: 9250,
      status: "complete",
      products: [],
    },
    {
      id: 2,
      date: Date.now(),
      user: "Esmael Salah",
      items: 6,
      totalPrice: 2250,
      status: "complete",
      products: [],
    },
    {
      id: 3,
      date: Date.now(),
      user: "Esmael Salah",
      items: 1,
      totalPrice: 6250,
      status: "complete",
      products: [],
    },
    {
      id: 4,
      date: Date.now(),
      user: "Esmael Salah",
      items: 9,
      totalPrice: 1250,
      status: "complete",
      products: [],
    },
  ];
  const [salesOrders, setSalesOrder] = useState(sales);

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
