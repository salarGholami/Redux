import { connect } from "react-redux";
import { buyIceCream } from "../redux/iceCream/iceCreamAction";

const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>number of ice cream -{props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>buy ice cream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCreams.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
