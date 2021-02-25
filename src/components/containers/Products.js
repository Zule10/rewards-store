import { connect } from "react-redux";
import { getProducts,getOrderedProducts } from "../redux/actions/products";
import { redeemPoints } from "../redux/actions/points";
import Products from "../products/Products";

const mapStateToProps = (state) => { 
    return {            
      products: state.product_reducer.product,
      userPoints: state.user_reducer.user.points,//500
      productsByPage:16,
      point: state.points_reducer
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      loadProduct: () => dispatch(getProducts()),
      orderProduct: (prod,sort) => dispatch(getOrderedProducts(prod,sort)),
      redeemProduct: (id) => dispatch(redeemPoints(id))
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Products);