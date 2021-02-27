import { connect } from "react-redux";
import { getHistory,getOrderedProducts} from "../redux/actions/history";
import History from "../history/History";

const mapStateToProps = (state) => { 
    return {            
      products: state.history_reducer.history,
      productsByPage:16,
      isLoading: state.history_reducer.loading,
      orderby: state.history_reducer.orderby
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      loadHistory: () => dispatch(getHistory()),      
      orderProduct: (prod,sort) => dispatch(getOrderedProducts(prod,sort))
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(History);