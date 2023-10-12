import Diagram from "../Diagram/Diagram";

const CostDiagram = (props) => {
  const diagramDataSets =  [
    { id:1, label: "jan", value: 0 },
    { id:2, label: "feb", value: 0 },
    { id:3, label: "mar", value: 0 },
    { id:4, label: "apr", value: 0 },
    { id:5, label: "may", value: 0 },
    { id:6, label: "jun", value: 0 },
    { id:7, label: "jul", value: 0 },
    { id:8, label: "aug", value: 0 },
    { id:9, label: "sep", value: 0 },
    { id:10, label: "oct", value: 0 },
    { id:11, label: "nov", value: 0 },
    { id:12, label: "dec", value: 0 },
  ];

  for (const cost of props.costs) {
    const costMonth = cost.date.getMonth();
    diagramDataSets[costMonth].value += cost.amount;
  }

  return <Diagram dataSets={diagramDataSets} />;
};

export default CostDiagram;
