import { connect } from "react-redux";
import { getProducts } from "../redux/actions/products";
import Products from "../products/Products";

const mapStateToProps = (state) => { 
    return {            
      products: state.product_reducer.product,
      points: 500, //state.user_reducer.user.points,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      loadProduct: () => dispatch(getProducts()),
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Products);