import { Badge } from "windmill-react-ui-kit";

const Status = ({ status }) => {
  return (
    <>
      <span className="font-serif">
        {status === "newOrder" && <Badge type="warning">{status}</Badge>}
        {status === "inProgress" && <Badge type="primary">{status}</Badge>}
        {status === "ready" && <Badge type="secondary">{status}</Badge>}
        {status === "delivered" && <Badge type="success">{status}</Badge>}
        {status === "canceled" && <Badge type="danger">{status}</Badge>}
      </span>
    </>
  );
};

export default Status;
