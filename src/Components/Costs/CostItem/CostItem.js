import "./CostItem.css";
import CostDate from "../CostDate/CostDate";
const CostItem = ({ data }) => {
  return (
    <div className="cost-item">
      <CostDate key={data.id} data={data} />
      <div className="cost-item__description">
        <h2>{data.description}</h2>
        <div className="cost-item__price">${data.amount}</div>
      </div>
    </div>
  );
};

export default CostItem;
