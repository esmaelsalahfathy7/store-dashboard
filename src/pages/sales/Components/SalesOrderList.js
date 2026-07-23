import React from "react";
import { useEditShowSalesOrder } from "../Contexts/EditShowSalesOrderData";
import { useConfirmDelete } from "../../../Contexts/ConfirmDelete";
export default function SalesOrderList({
  pageNumber = 1,
  onPageChange,
  salesOrders,
  deleteSalesOrder,
}) {
  const { handleShowDeleteConfirm } = useConfirmDelete();
  const { handleShowForm } = useEditShowSalesOrder();
  const salesOrdersPerPage = 4;
  const data = salesOrders.map((salesOrder) => {
    const handleShowSalesOrderData = () => {
      console.log("Show Sales Order Data");
      handleShowForm(salesOrder);
    };
    const handleEditSalesOrderData = () => {
      console.log("Edit Sales Order Data");
      handleShowForm(salesOrder, true);
    };
    const handleDeleteSalesOrderData = () => {
      handleShowDeleteConfirm(() => {
        deleteSalesOrder(salesOrder.id);
      });
    };
    return (
      <tr key={salesOrder.id}>
        <td className="p-3 custom-text-primary fw-medium">{salesOrder.id}</td>
        <td>{salesOrder.date} PM</td>
        <td className="fw-medium">
          {salesOrder.user.firstName + " " + salesOrder.user.lastName}
        </td>
        <td>{salesOrder.items} items</td>
        <td className="fw-semibold">${salesOrder.totalPrice}</td>
        <td>
          <span className="bg-success text-success bg-opacity-25 py-1 px-2 rounded-pill">
            {salesOrder.status}
          </span>
        </td>
        <td className="pe-3">
          <div className="d-flex gap-1 justify-content-end">
            <button
              type="button"
              className="btn btn-outline-primary btn-sm border-0"
              onClick={handleShowSalesOrderData}
            >
              <i className="bi bi-eye"></i>
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary border-0 btn-sm"
              onClick={handleEditSalesOrderData}
            >
              <i className="bi bi-pencil"></i>
            </button>
            <button
              type="button"
              className="btn btn-outline-danger border-0 btn-sm"
              onClick={handleDeleteSalesOrderData}
            >
              <i className="bi bi-trash-fill "></i>
            </button>
          </div>
        </td>
      </tr>
    );
  });

  const filteredData = data.slice(
    (pageNumber - 1) * salesOrdersPerPage,
    salesOrdersPerPage * pageNumber,
  );
  if (filteredData.length === 0 && pageNumber > 1) {
    onPageChange(pageNumber - 1);
  }
  return (
    <>
      {data.length === 0 ? (
        <tr>
          <td className="opacity-100 text-center" colSpan={7}>
            "No Data To Show"
          </td>
        </tr>
      ) : (
        filteredData
      )}
    </>
  );
}
