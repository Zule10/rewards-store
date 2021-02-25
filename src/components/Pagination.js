import React from "react";

const Pagination = ({ products}) => {
 
  return (
    <div className="grid-pagination">
      <button
        className="grid-pagination-button"
        onClick={() => products.prev()}
      >
        <img
          src={process.env.PUBLIC_URL + "/icons/arrow-left.svg"}
          alt="Previous Page"
        ></img>
      </button>
      <button
        className="grid-pagination-button"
        onClick={() => products.next()}
      >
        <img
          src={process.env.PUBLIC_URL + "/icons/arrow-right.svg"}
          alt="Next Page"
        ></img>
      </button>
    </div>
  );
};

export default Pagination;
