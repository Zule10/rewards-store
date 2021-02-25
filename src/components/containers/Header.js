import { connect } from "react-redux";
import { getUser } from "../redux/actions/users";
import Header from "../global/Header";

const mapStateToProps = (state) => {
    return {    
      user: state.user_reducer.user,
      points: state.points_reducer.points,
      message: state.points_reducer.message
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      loadUser: () => dispatch(getUser()),
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Header);