import React, {useEffect,useState} from "react";
import Product from "./Product";
import Pagination from "../Pagination";
import usePagination from "../hooks/pagination";
import ProductHeader from "./ProductHeader";
import CountProducts from "./CountProducts";
import Modal from "../global/Modal";
import Loader from "../global/Loader";

const Products = ({ loadProduct, products, user, productsByPage,
    orderProduct,redeemProduct, point, isLoading,userLoading }) => {

    const [showModal,setShow]  = useState(false);
    const [modalMessage,setMessage]  = useState("");
    
    const closeModal = () =>{    
        setShow(false);
        point.message = "";
    };
    const showLoader = () =>{    
        return (
            <Loader />
        );
    };
    useEffect(() => {
        loadProduct();
        if(point.message !== ""){
            setShow(true);
            if(point.message.error){
                setMessage(point.message.error);
            }else if(point.message.message){
                setMessage(point.message.message);
            }            
        }else{            
            setShow(false);
        }                
    },[loadProduct,point.message,user.points]);

    const paginatedProducts= usePagination(products, productsByPage);
    const splitedProducts = paginatedProducts.currentData();  

    if (isLoading || (!isLoading && userLoading)) {
        return (
            <Loader />
        );
    }

    return (
      <div>          
        <Modal show={showModal} 
               onClose ={closeModal}
               message ={modalMessage}/>   

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
            const { _id, category, cost, img, name } = product;
                return (
                    <Product
                        key={name + index}
                        _id={_id}
                        category={category}
                        cost={cost}
                        img={img.url}
                        name={name} 
                        points ={user.points}
                        redeemPoints = { () => {                            
                            showLoader();
                            redeemProduct(_id);
                        }}/>
                );
            })};          
        </div>  
    </div>      
  );
};

export default Products;
