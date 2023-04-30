import { useState } from "react";
import Account from "./components/Account";
import Bonus from "./components/Bonus";

function App() {
  const [bonus, setBonus] = useState({ points: 0 });
  const [account, setAccount] = useState({ amount: 0 });


  const incrementBonus = () => {
    setBonus({ points: bonus.points + 1 });
  };

  const increment = () => {
    setAccount({ amount: account.amount + 1 });
  };

  const decrement = () => {
    setAccount({ amount: account.amount - 1 });
  };

  const incrementByAmount = (value) => {
    setAccount({ amount: account.amount + value });
  };

  return (
    <div className="container-fluid text-center border border-danger p-2">
      <h1>App Component</h1>
      <h3>Account : ${account.amount}</h3>
      <h3>Bonus : {bonus.points}</h3>
      <Account
        increment={increment}
        decrement={decrement}
        incrementByAmount={incrementByAmount}
        account={account}
      />
      <Bonus incrementBonus={incrementBonus} bonus={bonus} />
    </div>
  );
}

export default App;
