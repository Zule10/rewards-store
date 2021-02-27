import React, {useEffect} from "react";
import ProductHistory from "./ProductHistory";
import Pagination from "../Pagination";
import usePagination from "../hooks/pagination";
import ProductHeader from "../products/ProductHeader";
import CountProducts from "../products/CountProducts";
import Loader from "../global/Loader";

const History = ({ loadHistory, products, productsByPage,isLoading,orderProduct}) => {

    useEffect(() => {
        loadHistory();        
    },[loadHistory]);

    const paginatedProducts= usePagination(products, productsByPage);
    const splitedProducts = paginatedProducts.currentData();

    if (isLoading) {
        return (
          <Loader />
        );
    }

    return (
      <div>
        <div className="p-header">
            <CountProducts 
                totalProducts = {products.length} 
                currentPage={paginatedProducts.currentPage}
                totalByPage = {productsByPage} />
            <ProductHeader product = {products} orderProducts ={orderProduct}/>
            <Pagination products={paginatedProducts}/>            
        </div>
        
        <div className="grid-container">        
            {splitedProducts.map((product, index) => {
            const { _id, category, img, name } = product;
            return (
                <ProductHistory
                    key={name + index}
                    _id={_id}
                    category={category}
                    img={img.url}
                    name={name} />
                );
            })};          
        </div> 
    </div>      
  );
};

export default History;
