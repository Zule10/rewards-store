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

export const getProducts = () => {
    return async (dispatch) => {
        dispatch(loadProductInProgress());

        const res = await fetch("https://coding-challenge-api.aerolab.co/products", {headers});
        const result = await res.json();

        try {
            dispatch(loadProductSuccess(result));
        } catch (error) {
            dispatch(loadProductFailed(error));
        }
    };
};
  