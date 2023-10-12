import { useState } from "react";

import Costs from "./Components/Costs/Costs";
import NewCost from "./Components/NewCost/NewCost";
import "./App.css";

const INITIAL_COSTS = [
  {
    id: 1,
    description: "Холодильник",
    date: new Date(2022, 1, 23),
    amount: 999,
  },
  {
    id: 2,
    description: "Macbook",
    date: new Date(2019, 7, 18),
    amount: 1254,
  },
  {
    id: 3,
    description: "Микрофон",
    date: new Date(2019, 6, 27),
    amount: 56,
  },
  {
    id: 3,
    description: "Микрофон",
    date: new Date(2020, 6, 8),
    amount: 56,
  },
];

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCost = (inputData) => {
    setCosts((prevCosts) => {
      return [inputData, ...prevCosts];
    });
    console.log(setCosts);
  };

  return (
    <div>
      <NewCost addCost={addCost} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
