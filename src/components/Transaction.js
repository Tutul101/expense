import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = (props) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = props.transaction.amount < 0 ? "-" : "+";
  return (
    <>
      <li class={props.transaction.amount < 0 ? "minus" : "plus"}>
        {props.transaction.text}
        <span>
          {sign}${Math.abs(props.transaction.amount)}
        </span>
        <button
          class="delete-btn"
          onClick={() => {
            deleteTransaction(props.transaction.id);
          }}
        >
          x
        </button>
      </li>
    </>
  );
};
