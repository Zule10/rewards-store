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

        const res = await fetch("https://coding-challenge-api.aerolab.co/products", {method: "GET",'mode': 'cors',headers});
        const result = await res.json();

        try {         
            dispatch(loadProductSuccess(result));
        } catch (error) {
            dispatch(loadProductFailed(error));
        }
    };
};

export const getOrderedProducts = (product,orderby) => {
    return async (dispatch) => {

        let orderedProducts = product;  

        if (orderby !== "") {

            orderedProducts.sort((a, b) => 
                orderby === "category" ? (a.category > b.category ? 1 : -1)
                : orderby === "lowestprice" ? (a.cost > b.cost ? 1 : -1)
                : orderby === "highestprice" ? (a.cost < b.cost ? 1 : -1) 
                : orderedProducts);  

            dispatch(loadOrderedProducts(orderedProducts,orderby));   
        }
        
        try {         
            dispatch(loadProductSuccess(orderedProducts));
        } catch (error) {
            dispatch(loadProductFailed(error));
        }
    };
};
