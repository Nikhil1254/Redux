import { useState } from "react";
import {
  incrementAmount,
  decrementAmount,
  incrementByAmount,
} from "../actions";

function Account({ Store }) {
  const [value, setValue] = useState(0);

  return (
    <>
      <div className="container-fluid text-center bg-info p-3 rounded mb-2 rounded">
        <h3>Account Component</h3>
        <h2>Amount: ${Store.getState().account.amount}</h2>
        <button
          onClick={() => Store.dispatch(incrementAmount())}
          className="btn btn-warning mx-2"
        >
          +1
        </button>
        <button
          onClick={() => Store.dispatch(decrementAmount())}
          className="btn btn-warning mx-2"
        >
          -1
        </button>
        <input onChange={(e) => setValue(+e.target.value)} type="text" />
        <button
          onClick={() => Store.dispatch(incrementByAmount(value))}
          className="btn btn-danger mx-2"
        >
          +{value}
        </button>
      </div>
    </>
  );
}

export default Account;
