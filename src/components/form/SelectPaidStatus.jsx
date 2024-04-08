import { useContext } from "react";
import { Select } from "windmill-react-ui-kit";

import { SidebarContext } from "../../context/SidebarContext";
import { useEditOrder} from "src/hooks/press/useOrderSubmit";
import { notifyError, notifySuccess } from "../../utils/toast";

import OrderServices from "../../services/PressOrderServices"

const SelectPaidStatus = ({ uuid, order }) => {
  const { setIsUpdate } = useContext(SidebarContext);
  const {mutate: editOrder} = useEditOrder();
  const handleChangeStatus = (uuid, payment_status) => {
    OrderServices.updateOrder(uuid, { payment_status: payment_status })
      .then((res) => {
        notifySuccess(res.message);
        setIsUpdate(true);
      })
      .catch((err) => notifyError(err.message));
  };

  return (
    <>
      {
        (order?.payment_status === "due") ?
        <Select
          onChange={(e) => handleChangeStatus(uuid, e.target.value)}
          className="border border-gray-50 bg-gray-200 dark:border-gray-700 h-8 rounded-md text-xs focus:border-gray-400 focus:outline-none"
        >
        <option value="payment_status" defaultValue hidden>
          {order?.payment_status}
        </option>
        <option defaultValue={order?.payment_status === "paid"} value="paid">
          Paid
        </option>
        <option defaultValue={order?.payment_status === "bad-debt"} value="bad-debt">
          Bad Debt
        </option>
      </Select>
      : "Paid"
      }
    </>
  );
};

export default SelectPaidStatus;
