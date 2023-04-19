import * as request from "../services/requestMock";
import operations from "../mocks/operationsMock.json";
import Timeline from "../components/Timeline/Timeline";
import { useLocation, useParams } from "react-router-dom";
import { useMemo, useEffect, useState, useCallback } from "react";

const TimelinePage: React.FC<any> = ({ match }) => {
  const param = useParams();
  const accountId = match?.params?.accountId ?? param.accountId;

  const [operations, setVal] = useState(null);

  const getAnswer = async () => {
    const data: any = await request.getOperations(accountId);
    setVal(data);
  };

  useEffect(() => {
    getAnswer();
  }, [accountId]);

  if (operations) {
    return <Timeline items={operations} />;
  } else return <div>Идет загрузка...</div>;
};

export default TimelinePage;
