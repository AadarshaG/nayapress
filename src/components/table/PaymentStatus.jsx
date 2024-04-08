import { Badge } from "windmill-react-ui-kit";

const PaymentStatus = ({ PaymentStatus }) => {
  return (
    <>
      <span className="font-serif">
        {PaymentStatus === "paid" && <Badge type="success">{PaymentStatus}</Badge>}
        {PaymentStatus === "due" && <Badge type="danger">{PaymentStatus}</Badge>}
      </span>
    </>
  );
};

export default PaymentStatus;
