import { useDispatch, useSelector } from "react-redux";
import { increment } from "../slices/bonus";
import { increment as incAmount } from "../slices/account";

console.log("account", incAmount());
console.log("bonus", increment());

function Bonus() {
  const points = useSelector((state) => state.bonus.points);
  const amount = useSelector((state) => state.account.amount);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container-fluid bg-success text-center p-3 rounded text-white">
        <h4>Bonus component</h4>
        <h2>Amount : {amount}</h2>
        <h2>Total Points : {points}</h2>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(increment())}
        >
          +1
        </button>
      </div>
    </>
  );
}

export default Bonus;
