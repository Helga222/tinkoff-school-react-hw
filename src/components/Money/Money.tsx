import React from "react";

const gerCurrency = (cur: any):any => {
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

const Money: React.FC<any> = (props) => {
  const valArr = String(props.value).split(".");
  const intValue = Number(valArr[0]);
  const modValue = valArr[1] && Number(valArr[1]);

  return (
    <span>
      <span>{intValue}</span>
      {modValue && <span>,{modValue}</span>}
      {props.currency && <span>{gerCurrency(props.currency)}</span>}
    </span>
  );
};

export default Money;
