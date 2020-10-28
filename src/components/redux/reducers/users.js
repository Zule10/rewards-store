const initialState = {
    user: "",
    loading: false,
    error: null,
  };
  
const user_reducer = (state = initialState,action) =>{
  switch (action.type) {
    case "LOAD_USER_IN_PROGRESS": {
      return {
        ...state,
        loading: true,
      };
    }

    case "LOAD_USER_SUCCESS": {
      return {
        ...state,
        user: action.loadUser,
        loading: false,
      };
    }

    case "LOAD_USER_FAILED": {
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

export default user_reducer;