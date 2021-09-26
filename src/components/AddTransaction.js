import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const changeTextHandler = (event) => {
    setText(event.target.value);
  };
  const changeAmountHandler = (event) => {
    setAmount(event.target.value);
  };

  const { addTransaction } = useContext(GlobalContext);

  const submitHandler = (event) => {
    event.preventDefault();
    var amountInteger = parseInt(amount);
    const newTransaction = {
      id: Math.floor(Math.random() * 100000),
      text,
      amountInteger,
    };
    addTransaction(newTransaction);
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label for="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={changeTextHandler}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label for="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={changeAmountHandler}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
