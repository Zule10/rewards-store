const initialState = {
  points: "",
  loading: false,
  error: null,
  message:""
};
  
const points_reducer = (state = initialState,action) =>{
  switch (action.type) {
    case "ADD_POINTS_IN_PROGRESS": {
      return {
        ...state,
        loading: true,
      };
    }

    case "ADD_POINTS_SUCCESS": {
      return {
        ...state,
        points: action.loadPoints,
        message:"",
        loading: false,
      };
    }

    case "ADD_POINTS_FAILED": {
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    }

    case "REDEEM_POINTS_IN_PROGRESS": {
      return {
        ...state,
        loading: true,
      };
    }

    case "REDEEM_POINTS_SUCCESS": {
      return {
        ...state,
        message: action.redeemed,
        loading: false,
      };
    }

    case "REDEEM_POINTS_FAILED": {
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default points_reducer;