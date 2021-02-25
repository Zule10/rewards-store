const initialState = {
    product: [],
    loading: false,
    error: null,
    orderby: ""
  };
  
const product_reducer = (state = initialState,action) =>{
  switch (action.type) {
    case "LOAD_PRODUCT_IN_PROGRESS": {
      return {
        ...state,
        loading: true,
      };
    }

    case "LOAD_PRODUCT_SUCCESS": {
      return {
        ...state,
        product: action.loadProduct,
        loading: false,
      };
    }

    case "LOAD_PRODUCT_FAILED": {
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    }

    case "LOAD_ORDERED_PRODUCTS": {
      return {
        ...state,
        product: action.orderedProduct,
        orderby: action.orderby,        
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default product_reducer;