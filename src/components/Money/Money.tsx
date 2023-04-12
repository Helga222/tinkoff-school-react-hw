import React from "react";
import { useMemo } from "react";

const gerCurrency = (cur: any): any => {
  let result = "";
  switch (cur) {
    case "USD":
      result = "$";
      break;
    case "EUR":
      result = "€";
      break;
    case "GBP":
      result = "£";
      break;
    case "RUB":
      result = "₽";
      break;
  }
  return result;
};

const getNumber = (n: any): any => {
  const valArr = String(n).split(".");
  const intValue = Number(valArr[0]);
  const modValue = valArr[1] && Number(valArr[1]);
  return { intValue, modValue };
};

const Money: React.FC<any> = (props) => {
  const numberValue = useMemo(() => getNumber(props.value), [props.value]);
  const currency = useMemo(() => gerCurrency(props.currency), [props.currency]);

  return (
    <span>
      <span>{numberValue.intValue}</span>
      {numberValue.modValue && <span>,{numberValue.modValue}</span>}
      {props.currency && <span>{currency}</span>}
    </span>
  );
};

export default Money;
