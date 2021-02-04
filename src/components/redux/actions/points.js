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
  