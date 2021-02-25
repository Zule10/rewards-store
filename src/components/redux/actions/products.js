import { headers } from "../api-headers";

export const loadProductFailed = error => ({   
    type: "LOAD_PRODUCT_FAILED",
    error 
});

export const loadProductInProgress = () => ({
    type: "LOAD_PRODUCT_IN_PROGRESS",
});

export const loadProductSuccess = product => ({    
    type: "LOAD_PRODUCT_SUCCESS",
    loadProduct: product
});

export const loadOrderedProducts = (product,order) => ({    
    type: "LOAD_ORDERED_PRODUCTS",
    orderedProduct: product,
    orderby: order
});

export const getProducts = () => {
    return async (dispatch) => {
        dispatch(loadProductInProgress());

        const res = await fetch("https://coding-challenge-api.aerolab.co/products", {method: "GET",headers});
        const result = await res.json();
        try {
            dispatch(loadProductSuccess(result));
        } catch (error) {
            dispatch(loadProductFailed(error));
        }
    };
};

export const getOrderedProducts = (product,orderby) => {
    return (dispatch) => {
        const orderedProducts = product;             

        if (orderby !== "") {
            console.log("holi");
            orderedProducts.sort((a, b) => orderby === "lowestprice" ? (a.cost > b.cost ? 1 : -1)
             : orderedProducts);
             
            console.log(orderedProducts);
        }
        dispatch(loadOrderedProducts(orderedProducts,orderby));  
    };
};
