import React, { useState, useEffect } from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [visiblePages, setVisiblePages] = useState(1); // default (2 before/after)


  // Determine range of pages
  const startPage = Math.max(1, currentPage - visiblePages);
  const endPage = Math.min(totalPages, currentPage + visiblePages);

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div  className="pagination-box">
      {/* Prev Button */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`pagination-btn ${currentPage == 1 && "pagination-btn-active"}`}
      >
        Prev
      </button>

      {/* Number Buttons */}
      {pages.map((page, index) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`pagination-number ${currentPage === page && "pagination-number-active"}`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(Number(currentPage) + 1)}
        className={`pagination-btn ${currentPage === totalPages && "pagination-btn-active"}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
