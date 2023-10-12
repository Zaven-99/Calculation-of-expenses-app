import { useState } from "react";

import CostItem from "./CostItem/CostItem";
import CostsFilter from "./CostFilter/CostsFilter";
import CostDiagram from "./CostsDiagram";

import "./Costs.css";

const Costs = ({ costs }) => {
  const [selectedyear, setSelectedYear] = useState("2023");

  const yearChange = (year) => {
    setSelectedYear(year);
  };

  //фильтрация элементов на странице
  const filteredCosts = costs.filter((costs) => {
    return costs.date.getFullYear().toString() === selectedyear;
  });

  return (
    <div className="costs">
      <CostsFilter year={selectedyear} yearChange={yearChange} />
      <CostDiagram costs={filteredCosts} />
      {/* Оповещение о состоянии  */}
      {filteredCosts.length === 0 ? (
        <p className="cost-list__fallback">
          Вы нечего не приобретали в {selectedyear} году
        </p>
      ) : (
        filteredCosts.map((costs, id) => <CostItem key={id} data={costs} />)
      )}
    </div>
  );
};

export default Costs;
