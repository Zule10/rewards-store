import { headers } from "../api-headers";

export const loadHistoryFailed = error => ({   
    type: "LOAD_HISTORY_FAILED",
    error 
});

export const loadHistoryInProgress = () => ({
    type: "LOAD_HISTORY_IN_PROGRESS",
});

export const loadHistorySuccess = product => ({    
    type: "LOAD_HISTORY_SUCCESS",
    loadHistory: product
});

export const loadHistoryProducts = (product,order) => ({    
    type: "LOAD_HISTORY_PRODUCTS",
    orderedProduct: product,
    orderby: order
});

export const getHistory = () => {
    return async (dispatch) => {
        dispatch(loadHistoryInProgress());

        const res = await fetch("https://coding-challenge-api.aerolab.co/user/history", 
        {method: "GET",'mode': 'cors',headers});
        const result = await res.json();
        try {
            dispatch(loadHistorySuccess(result));
        } catch (error) {
            dispatch(loadHistoryFailed(error));
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

            dispatch(loadHistoryProducts(orderedProducts,orderby));   
        }
        
        try {         
            dispatch(loadHistorySuccess(orderedProducts));
        } catch (error) {
            dispatch(loadHistoryFailed(error));
        }
    };
};