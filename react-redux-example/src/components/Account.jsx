import { useState } from "react";
import {
  increment,
  decrement,
  incrementByAmount,
  getUserById,
} from "../slices/account";
import { useDispatch, useSelector } from "react-redux";

function Account({ Store }) {
  const [value, setValue] = useState(0);
  const [userId, setUserId] = useState(null);
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container-fluid text-center bg-warning p-3 rounded mb-2 rounded">
        <h3>Account Component</h3>
        <h2>Amount: ${amount}</h2>
        <h2>Points : {points}</h2>
        <button
          onClick={() => dispatch(increment())}
          className="btn btn-danger mx-2"
        >
          +1
        </button>
        <button
          onClick={() => dispatch(decrement())}
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
        <div className="container-fluid py-2">
          <input
            onChange={(e) => setUserId(+e.target.value)}
            type="text"
            placeholder="UserId"
          />
          <button
            onClick={() => dispatch(getUserById(userId))}
            className="btn btn-danger mx-2"
          >
            getUserAmount
          </button>
        </div>
      </div>
    </>
  );
}

export default Account;
