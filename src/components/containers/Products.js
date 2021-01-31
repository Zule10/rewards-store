import { connect } from "react-redux";
import { getProducts } from "../redux/actions/products";
import Products from "../products/Products";

const mapStateToProps = (state) => { 
    console.log(state)  
    return {            
      products: state.product_reducer.product,
      points: 100,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      loadProduct: () => dispatch(getProducts()),
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Products);