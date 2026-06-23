import React from "react";
import ProductInfo from "./ProductInfo";

export default function ProductsList({
  pageNumber = 1,
  productsPerPage,
  productsInfo,
  handleEditProduct,
  handleAddProductToOrder,
}) {
  const data = productsInfo.products.map((currProduct) => {
    return (
      <ProductInfo
        handleAddProductToOrder={handleAddProductToOrder}
        handleEditProduct={handleEditProduct}
        productsInfo={productsInfo}
        product={currProduct}
        key={currProduct.id}
      />
    );
  });

  const page = data.slice(
    (pageNumber - 1) * productsPerPage,
    productsPerPage * pageNumber,
  );
  return (
    <>
      <tbody>
        {page.length > 0 ? (
          page
        ) : (
          <tr>
            <td className="opacity-100 text-center" colSpan={6}>
              No Data To Show
            </td>
          </tr>
        )}
      </tbody>
    </>
  );
}
