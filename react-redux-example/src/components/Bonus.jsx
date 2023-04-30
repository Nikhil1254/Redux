import { incrementBonus } from "../actions";

function Bonus({ Store }) {
  return (
    <>
      <div className="container-fluid bg-success text-center p-3 rounded text-white">
        <h4>Bonus component</h4>
        <h2>Total Points : {Store.getState().bonus.points}</h2>
        <button
          className="btn btn-danger"
          onClick={() => Store.dispatch(incrementBonus())}
        >
          +1
        </button>
      </div>
    </>
  );
}

export default Bonus;
