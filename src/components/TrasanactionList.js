import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";
export const TrasanactionList = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);
  return (
    <>
      <h3>History</h3>
      <ul id="list" class="list">
        {transactions.map((transac) => {
          return (
            <Transaction key={transac.id} transaction={transac}></Transaction>
          );
        })}
      </ul>
    </>
  );
};
