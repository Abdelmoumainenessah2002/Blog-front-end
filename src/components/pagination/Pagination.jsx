import React from "react";
import "./pagination.css";

function Pagination({ pages, currentPage, setCurrentPage }) {
  // Destructure props correctly

  const generatePages = [];

  // Populate the generatePages array
  for (let i = 1; i <= pages; i++) {
    generatePages.push(i);
  }

  return (
    <div className="pagination">
      <div
        className={`page previous ${currentPage === 1 ? "disabled" : ""}`}
        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
      >
        Prev
      </div>
      {generatePages.map((page) => (
        <div
          onClick={() => setCurrentPage(page)}
          key={page}
          className={`page ${currentPage === page ? "active" : ""}`}
        >
          {page}
        </div>
      ))}
      <div
        className={`page next ${currentPage === pages ? "disabled" : ""}`}
        onClick={() => currentPage < pages && setCurrentPage(currentPage + 1)}
      >
        Next
      </div>
    </div>
  );
}

export default Pagination;
