import React, { useEffect } from "react";
import Product from "./Product";

const Products = ({ loadProduct, products, points }) => {

    useEffect(() => {
        loadProduct();
    },[loadProduct]);
    
  return (
      console.log(products),
    <div>        
        {products.map((product, index) => {
        const { productId, category, cost, img, name } = product;

        return (
            <Product
                key={name + index}
                _id={productId}
                category={category}
                cost={cost}
                img={img.url}
                name={name} 
                points ={points}/>
            );
        })};          
    </div>    
  );
};

export default Products;
