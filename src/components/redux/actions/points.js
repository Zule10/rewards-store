import { headers } from "../api-headers";

export const addPointsFailed = error => ({   
    type: "ADD_POINTS_FAILED",
    error 
});

export const addPointsInProgress = () => ({
    type: "ADD_POINTS_IN_PROGRESS",
});

export const addPointsSuccess = points => ({    
    type: "ADD_POINTS_SUCCESS",
    loadPoints: points
});

export const redeemPointsFailed = error => ({   
    type: "REDEEM_POINTS_FAILED",
    error 
});

export const redeemPointsInProgress = () => ({
    type: "REDEEM_POINTS_IN_PROGRESS",
});

export const redeemPointsSuccess = points => ({    
    type: "REDEEM_POINTS_SUCCESS",
    redeemed: points
});

export const addPoints = (amount) => {
    return async (dispatch) => {
        dispatch(addPointsInProgress());

        const res = await fetch("https://coding-challenge-api.aerolab.co/user/points", 
        {method: "POST",headers, body: JSON.stringify({ amount })});
        const result = await res.json();

        try {
            dispatch(addPointsSuccess(result));
        } catch (error) {
            dispatch(addPointsFailed(error));
        }
    };
};

export const redeemPoints = (id) => {
    console.log(id);
    return async (dispatch) => {
        dispatch(redeemPointsInProgress());
        const res = await fetch("https://coding-challenge-api.aerolab.co/redeem", 
        {method: "POST",headers, body: JSON.stringify({ productId: id })});
        console.log('hola');
        console.log(JSON.stringify({ productId: id }));
        const result = await res.json();

        try {
            dispatch(redeemPointsSuccess(result));
        } catch (error) {
            dispatch(redeemPointsFailed(error));
        }
    };
};
  