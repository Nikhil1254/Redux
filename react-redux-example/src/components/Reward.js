import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByAmount } from "../reducers/reward";


function Reward() {
    const points = useSelector((state) => state.reward.points);
    const dispatch = useDispatch();

    return (
        <>
            <div className="container-fluid bg-success text-center p-3 rounded text-white">
                <h4 className="text-warning">Reward component</h4>
                <h2>Points : {points}</h2>
                <button
                    className="btn btn-danger mx-2"
                    onClick={() => dispatch(increment())}
                >
                    +1
                </button>
                <button onClick={() => dispatch(incrementByAmount(10))} className="btn btn-danger">
                    IncrementBy +10
                </button>
            </div>
        </>
    );
}

export default Reward;
