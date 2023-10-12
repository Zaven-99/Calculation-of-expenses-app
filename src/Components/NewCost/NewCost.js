import { useState } from "react";

import CostForm from "./CostForm";

import "./NewCost.css";


const NewCost = ({addCost}) => {

    const saveData = (inputData) => {
        const costData = {
            ...inputData,
            id:Math.random().toString()
        }
        //Передаем объект наверх до app.js
        addCost(costData)
    }

    const [isFormVisible , setIsFormVisible] = useState(false)

    const clickToAddCost = () => {
      setIsFormVisible(true)
    } 

    const cancelCost = () => {
      setIsFormVisible(false)
    }

  return (
    <div className="new-cost">
      {!isFormVisible && <button onClick={clickToAddCost} className="addCost">Добавить новый расход</button>}
      {isFormVisible &&<CostForm cancelCost = {cancelCost} saveData = {saveData}/>}
    </div>
  );
};

export default NewCost;
