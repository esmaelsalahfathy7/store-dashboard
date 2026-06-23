import React from "react";

export default function CustomPagination({
  handlepageChange,
  currPage,
  rowsPerPage,
  contentNumber,
}) {
  const pages = Math.ceil(contentNumber / rowsPerPage);

  const remainingProducts = contentNumber - (currPage - 1) * rowsPerPage;

  let lastProductInCurrentPage = currPage * rowsPerPage;
  if (remainingProducts < rowsPerPage) {
    lastProductInCurrentPage = contentNumber;
    rowsPerPage = remainingProducts;
  }

  const start = +lastProductInCurrentPage - rowsPerPage + 1;
  const end = +lastProductInCurrentPage;
  const handleNextBtn = () => {
    if (currPage === pages) return;
    handlepageChange((prev) => ++prev);
  };

  const handlePrevBtn = () => {
    if (currPage === 1) return;
    handlepageChange((prev) => --prev);
  };

  const handlePageChange = (e) => {
    const value = e.currentTarget.dataset.page;
    handlepageChange(+value);
  };

  let list = [];
  for (let i = 1; i <= pages; ++i) {
    list.push(
      <li
        key={i}
        className="page-item custome"
        style={{ cursor: "pointer" }}
        data-page={i}
        onClick={handlePageChange}
      >
        <span
          className={`page-link border-0 rounded-1  ${currPage === i ? "active" : ""}`}
        >
          {i}
        </span>
      </li>,
    );
  }
  return (
    <>
      <div className="filter d-flex justify-content-between align-items-center border-top p-3">
        <div className="" style={{ fontSize: "13px" }}>
          Showing <span>{`${start}-${end}`}</span> Of{" "}
          <span>{contentNumber}</span> Products{" "}
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination m-0 gap-1">
            <li
              className={`page-item ${currPage === 1 ? "disabled" : ""}`}
              onClick={handlePrevBtn}
              style={{ cursor: `${currPage > 1 ? "pointer" : ""}` }}
            >
              <span className="page-link">&laquo;</span>
            </li>

            {list}
            <li
              className={`page-item ${currPage === pages ? "disabled" : ""}`}
              onClick={handleNextBtn}
              style={{ cursor: `${currPage < pages ? "pointer" : ""}` }}
            >
              <span className="page-link">&raquo;</span>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
