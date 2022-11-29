import React from "react";
import Pagination from "react-bootstrap/Pagination";

export default function ItemPagination({
  currentPageNum,
  setCurrentPageNum,
  displayPageNumbers,
  totalNumPages,
}) {
  return (
    <Pagination className="paginationfloat">
      <Pagination.Prev
        onClick={() => {
          if (currentPageNum > 1) {
            setCurrentPageNum(currentPageNum - 1);
          }
        }}
      />
      {displayPageNumbers.map((x) => {
        return (
          <Pagination.Item
            key={x}
            active={currentPageNum === x}
            onClick={() => setCurrentPageNum(x)}
          >
            {x}
          </Pagination.Item>
        );
      })}
      <Pagination.Next
        onClick={() => {
          if (currentPageNum < totalNumPages) {
            setCurrentPageNum(currentPageNum + 1);
          }
        }}
      />
    </Pagination>
  );
}
