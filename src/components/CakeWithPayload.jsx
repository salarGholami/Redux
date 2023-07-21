import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
import { useState } from "react";

const CakeWithPayload = () => {
  const [numbers, setNumbers] = useState(0);
  const numOfCakes = useSelector((state) => state.cakes.numOfCakes);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setNumbers(e.target.value);
  };
  
  return (
    <div>
      <h2>number of cakes -{numOfCakes}</h2>
      <input type="text" onChange={changeHandler} />
      <button onClick={() => dispatch(buyCake(numbers))}>
        buy {numbers}cake
      </button>
    </div>
  );
};

export default CakeWithPayload;
