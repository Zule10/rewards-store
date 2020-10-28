import { headers } from "../api-headers";

export const loadUserFailed = error => ({
    error,
    type: "LOAD_USER_FAILED"   
  });
  
  export const loadUserInProgress = () => ({
    type: "LOAD_USER_IN_PROGRESS",
  });
  
  export const loadUserSuccess = user => ({
    loadUser: user,
    type: "LOAD_USER_SUCCESS"   
  });

  export const getUser = () => {
    return async (dispatch) => {
      dispatch(loadUserInProgress());
  
      const res = await fetch("https://coding-challenge-api.aerolab.co/user/me", {headers});
      const result = await res.json();
      console.log(result);
  
      try {
        dispatch(loadUserSuccess(result));
      } catch (error) {
        dispatch(loadUserFailed(error));
      }
    };
  };
  