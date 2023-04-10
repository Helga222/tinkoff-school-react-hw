import React from "react";

import BoardItem from "../BoardItem/BoardItem";

import styles from "./Board.module.css";

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

const Board: React.FC<any> = (props) => {
  const accArr = [...props.accounts];
  accArr.sort(compare);
  const boardItems = accArr.map((acc) => (
    <BoardItem
      key={acc.id}
      type={acc.type}
      currency={acc.currency}
      amount={acc.amount}
      title={acc.title}
      customTitle={acc.customTitle}
    />
  ));

  return <div className={styles.board}>{boardItems}</div>;
};

export default Board;
