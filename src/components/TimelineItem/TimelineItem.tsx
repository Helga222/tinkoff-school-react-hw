import Money from "../Money/Money";
import { useMemo } from "react";

const formatDate = (date:any):any =>{
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  
  const yyyy = date.getFullYear();
  if (dd < 10) {
      dd = '0' + dd;
  }
  if (mm < 10) {
      mm = '0' + mm;
  }
  return dd + '.' + mm + '.' + yyyy;
}


const TimelineItem: React.FC<any> = (props) => {

  const date = useMemo(()=>{
    const curDate = new Date(props.date);
    let dd:any = curDate.getDate();
    let mm:any = curDate.getMonth() + 1;
    
    const yyyy = curDate.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    return dd + '.' + mm + '.' + yyyy;
  },[]);

  return <div className="item">
    <h3 className="title">{props.title}</h3>
    <div className="date">{date}</div>
    <Money value={props.amount} currency={props.currency}/>
  </div>
};

export default TimelineItem;
