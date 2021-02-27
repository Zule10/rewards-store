import { headers } from "../api-headers";

export const loadUserFailed = error => ({   
    type: "LOAD_USER_FAILED",
    error 
});

export const loadUserInProgress = () => ({
    type: "LOAD_USER_IN_PROGRESS",
});

export const loadUserSuccess = user => ({    
    type: "LOAD_USER_SUCCESS",
    loadUser: user
});

export const getUser = () => {
    return async (dispatch) => {
        dispatch(loadUserInProgress());

        const res = await fetch("https://coding-challenge-api.aerolab.co/user/me", {method: "GET",'mode': 'cors', headers});
        const result = await res.json();

        try {
            dispatch(loadUserSuccess(result));
        } catch (error) {
            dispatch(loadUserFailed(error));
        }
    };
};
  