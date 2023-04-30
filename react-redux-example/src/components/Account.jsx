import { useState } from "react";
import {
  incrementAmount,
  decrementAmount,
  incrementByAmount,
  getAccount,
} from "../actions";
import { useDispatch, useSelector } from "react-redux";

function Account({ Store }) {
  const [value, setValue] = useState(0);
  const amount = useSelector((state) => state.account.amount);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container-fluid text-center bg-warning p-3 rounded mb-2 rounded">
        <h3>Account Component</h3>
        <h2>Amount: ${amount}</h2>
        <button
          onClick={() => dispatch(incrementAmount())}
          className="btn btn-danger mx-2"
        >
          +1
        </button>
        <button
          onClick={() => dispatch(decrementAmount())}
          className="btn btn-danger mx-2"
        >
          -1
        </button>
        <input onChange={(e) => setValue(+e.target.value)} type="text" />
        <button
          onClick={() => dispatch(incrementByAmount(value))}
          className="btn btn-danger mx-2"
        >
          +{value}
        </button>
        <button className="btn btn-danger" onClick={()=>dispatch(getAccount(2))}>Init Account</button>
      </div>
    </>
  );
}

export default Account;
