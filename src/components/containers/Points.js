import { connect } from "react-redux";
import { addPoints } from "../redux/actions/points";
import AddPoints from "../points/AddPoints";

const mapStateToProps = (state) => {
    return {
      points: state.points_reducer,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addPoints: (amount) => dispatch(addPoints(amount)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddPoints);