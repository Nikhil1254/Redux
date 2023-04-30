function Bonus({ incrementBonus, bonus }) {
  return (
    <>
      <div className="container-fluid bg-success text-center p-3 rounded text-white">
        <h4>Bonus component</h4>
        <h2>Total Points : {bonus.points}</h2>
        <button className="btn btn-danger" onClick={incrementBonus}>
          +1
        </button>
      </div>
    </>
  );
}

export default Bonus;
