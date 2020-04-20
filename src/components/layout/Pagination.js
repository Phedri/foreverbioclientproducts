import React from "react";

export const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul
        className="pagination d-flex justify-content-center pagination-lg"
        style={{ marginTop: "10px" }}
      >
        {pageNumbers.map((number) => (
          <li key={number} className="page-item justify-content-center">
            <span
              onClick={() => paginate(number)}
              className="page-link"
              style={{ pointer: "cursor !important" }}
            >
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
