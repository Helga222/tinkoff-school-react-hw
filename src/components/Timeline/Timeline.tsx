import { useMemo } from "react";
import TimelineItem from "../TimelineItem/TimelineItem";

const Timeline: React.FC<any> = (props) => {
  const operations = [...props.items];
  const timeItems = operations.map((item) => (
    <TimelineItem
      id={item.id}
      title={item.title}
      date={item.date}
      amount={item.amount}
      currency={item.currency}
    />
  ));
  const result = useMemo(()=>timeItems.length>0 ? timeItems : "По данному аккаунту нет данных",[timeItems])  
  return <div>{result}</div>;
};

export default Timeline;
