import * as request from "../services/requestMock";
import operations from "../mocks/operationsMock.json";
import Timeline from "../components/Timeline/Timeline";
import { useLocation, useParams } from "react-router-dom";
import { useMemo, useEffect, useState, useCallback } from "react";

const TimelinePage: React.FC<any> = () => {

  const {accountId} = useParams();
  
  const [operations, setVal] = useState(null);

 
  const hendleReuquest = useCallback(()=>{
    request
    .getOperations(accountId)
    .then((operations:any) => {
      setVal(operations);
      console.log("operations" + operations);
    })
    .catch((err) => console.log(err));
  },[accountId])
    
  useEffect(hendleReuquest,[accountId])

  if (operations) {
    return <Timeline items={operations} />;
  } else return <div>Идет загрузка...</div>;
};

export default TimelinePage;


