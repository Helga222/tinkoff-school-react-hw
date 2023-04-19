import React from "react";

import BoardItem from "../BoardItem/BoardItem";

import styles from "./Board.module.css";
import { NavLink } from "react-router-dom";

const arrType = ["debit", "credit", "external", "saving", "loan"];
const arrCurrency = ["RUB", "USD", "EUR", "GBP"];

function compare(a, b) {
  if (arrType.indexOf(a.type) < arrType.indexOf(b.type)) {
    return -1;
  } else if (arrType.indexOf(a.type) === arrType.indexOf(b.type)) {
    return arrCurrency.indexOf(a.currency) < arrCurrency.indexOf(b.currency)
      ? -1
      : 1;
  } else return 1;
}

const Board: React.FC<any> = (props): any => {

  const accArr = props?.accounts ? [...props.accounts] : [];
  accArr.sort(compare);
  const boardItems = accArr.map((acc) => (
    <NavLink
      to={`/account/${acc.id}`}
      className={(isActive)=>isActive ? "activeItem" : "link"}
      style={({ isActive, isPending }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isPending ? "red" : "black",
        };
      }}
    >
      <BoardItem
        key={acc.id}
        type={acc.type}
        currency={acc.currency}
        amount={acc.amount}
        title={acc.title}
        customTitle={acc.customTitle}
      />
    </NavLink>
  ));
  const tt = 3;
  const tt1 = 2;
  return (
    <div className={styles.board}>
      {boardItems}

      <NavLink
        to="/actions/add_card"
        className={(isActive)=>isActive ? "activeItem" : "link"}
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
          };
        }}
      >
        <div className={styles.link}>Привязать карту</div>
      </NavLink>
    </div>
  );
};

export default Board;
