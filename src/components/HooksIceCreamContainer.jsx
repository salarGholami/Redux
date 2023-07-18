import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux/iceCream/iceCreamAction";

const HooksIceCreamContainer = () => {
  const numOfIceCreams = useSelector((state) => state.iceCreams.numOfIceCreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>number of iceCream -{numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>buy iceCream</button>
    </div>
  );
};

export default HooksIceCreamContainer;
