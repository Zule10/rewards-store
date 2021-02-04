const initialState = {
  points: "",
  loading: false,
  error: null,
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

    default: {
      return state;
    }
  }
};

export default points_reducer;