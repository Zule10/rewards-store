import { connect } from "react-redux";
import { getProducts,getOrderedProducts } from "../redux/actions/products";
import { redeemPoints } from "../redux/actions/points";
import Products from "../products/Products";

const mapStateToProps = (state) => { 
    return {            
      products: state.product_reducer.product,
      user: state.user_reducer.user,
      productsByPage:16,
      point: state.points_reducer,
      orderby: state.product_reducer.orderby,
      isLoading: state.product_reducer.loading,
      userLoading: state.user_reducer.loading
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      loadProduct: (sort) => dispatch(getProducts(sort)),
      orderProduct: (prod,sort) => dispatch(getOrderedProducts(prod,sort)),
      redeemProduct: (id) => dispatch(redeemPoints(id))
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Products);