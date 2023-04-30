import { useDispatch, useSelector } from "react-redux";
import { incrementBonus } from "../actions";

function Bonus({ Store }) {
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container-fluid bg-success text-center p-3 rounded text-white">
        <h4>Bonus component</h4>
        <h2>Total Points : {points}</h2>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(incrementBonus())}
        >
          +1
        </button>
      </div>
    </>
  );
}

export default Bonus;
