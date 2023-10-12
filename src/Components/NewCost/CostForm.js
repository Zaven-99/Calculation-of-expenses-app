import React, { useState } from "react";
import "./CostForm.css";

const CostForm = ({saveData , cancelCost}) => {
  //Получаем значения input
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  const nameChange = (event) => {
    setInputName(event.target.value);
  };

  const amountChange = (event) => {
    setInputAmount(event.target.value);
  };
  const dateChange = (event) => {
    setInputDate(event.target.value);
  };

  //отменяем стандартное поведение браузера
  const submit = (event) => {
    event.preventDefault();

    //Создаем объект для группирования данных для отправки
    const data = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };
    //Передаем объект наверх до app.js
    saveData(data)
    //Очищаем заново input
    //В теге input добавить атрибут value с начальным состоянием
    setInputName("");
    setInputAmount("");
    setInputDate("");
  };

  return (
    <div>
      <form action="" onSubmit={submit}>
        <div className="new-cost__controls">
          <div className="new-cost__control">
            <label htmlFor="">Название</label>
            <input type="text" onChange={nameChange} value={inputName} />
          </div>
        </div>
        <div className="new-cost__controls">
          <div className="new-cost__control">
            <label htmlFor="">Сумма</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChange}
              value={inputAmount}
            />
          </div>
        </div>
        <div className="new-cost__controls">
          <div className="new-cost__control">
            <label htmlFor="">Дата</label>
            <input
              type="date"
              min="2019-01-01"
              step="2023-10-11"
              onChange={dateChange}
              value={inputDate}
            />
          </div>
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
          <button onClick = {cancelCost} type= 'button'>Отмена</button>
        </div>
      </form>
    </div>
  );
};

export default CostForm;
