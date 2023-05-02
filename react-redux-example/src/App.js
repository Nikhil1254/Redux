import { useSelector } from "react-redux";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import Reward from "./components/Reward";

function App() {

  const amount = useSelector(state => state.account.amount);
  const points = useSelector(state => state.bonus.points);
  const pending = useSelector(state => state.account.pending);
  const error = useSelector(state => state.account.error);
  const account = useSelector(state => state.account);

  return (
    <div className="container-fluid text-center border border-danger p-2">
      <h1>App Component</h1>
      {
        pending ? <p className="text-warning">Loading....</p> :
          (
            error ? <h3 className="text-danger">ERROR: {error}</h3> : <h3 className="text-success">Amount: ${amount}</h3>
          )
      }
      <h3>Bonus : {points}</h3>
      <Account />
      <Bonus />
      <br /><br />
      <Reward />
    </div>
  );
}

export default App;
