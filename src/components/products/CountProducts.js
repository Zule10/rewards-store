import React from "react";

const CountProducts = ({ totalProducts, currentPage, totalByPage}) => {
  return (
    <span className="p-count">{totalByPage * currentPage} of {totalProducts} products</span> 
  );
};

export default CountProducts;
