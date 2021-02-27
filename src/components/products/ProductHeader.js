import React from "react";

const ProductHeader = ({product,orderProducts}) => {

  return (
    <>  
        <span className="p-sortby">Sort By:</span>     
        <div className="grid-item">
            <button className="p-button" onClick={() => orderProducts(product,"category")}>
                Category
            </button>            
        </div>
        <div className="grid-item">
        <button className="p-button" onClick={() => orderProducts(product,"lowestprice")}>
            Lowest Price
        </button>
        </div>
        <div className="grid-item">
        <button className="p-button" onClick={() => orderProducts(product,"highestprice")}>
            Highest Price
        </button>
        </div>
    </>
  );
};

export default ProductHeader;
