import { connect } from "react-redux";
import { getUser } from "../redux/actions/users";
import Header from "../Header";

const mapStateToProps = (state) => {
    return {    
      user: state.user_reducer.user,
      points: state.user_reducer.user.points,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      loadUser: () => dispatch(getUser()),
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Header);