import { useSelector } from "react-redux";
import Account from "./components/Account";
import Bonus from "./components/Bonus";

function App() {

  const amount = useSelector(state => state.account.amount);
  const points = useSelector(state => state.bonus.points);
  const account = useSelector(state => state.account);

  return (
    <div className="container-fluid text-center border border-danger p-2">
      <h1>App Component</h1>
      {
        account.pending ? <p className="text-warning">Loading....</p> :
          (
            account.error ? <h3 className="text-danger">ERROR: {account.error}</h3> : <h3 className="text-success">Amount: ${account.amount}</h3>
          )
      }
      <h3>Bonus : {points}</h3>
      <Account />
      <Bonus />
    </div>
  );
}

export default App;
