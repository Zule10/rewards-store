const initialState = {
    history: [],
    loading: false,
    error: null,
    orderby: ""
  };
  
const history_reducer = (state = initialState,action) =>{
  switch (action.type) {
    case "LOAD_HISTORY_IN_PROGRESS": {
      return {
        ...state,
        loading: true,
      };
    }

    case "LOAD_HISTORY_SUCCESS": {
      return {
        ...state,
        history: action.loadHistory,
        loading: false,
      };
    }

    case "LOAD_HISTORY_FAILED": {
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    }

    case "LOAD_HISTORY_PRODUCTS": {
      return {
        ...state,
        history: action.orderedProduct,
        orderby: action.orderby,        
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default history_reducer;