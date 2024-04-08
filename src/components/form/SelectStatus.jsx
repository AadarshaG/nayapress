import { useContext } from "react";
import { Select } from "windmill-react-ui-kit";

import { SidebarContext } from "../../context/SidebarContext";
import { useEditOrder} from "src/hooks/press/useOrderSubmit";
import { notifyError, notifySuccess } from "../../utils/toast";

import OrderServices from "../../services/PressOrderServices"

const SelectStatus = ({ uuid, order }) => {
  const { setIsUpdate } = useContext(SidebarContext);
  const {mutate: editOrder} = useEditOrder();
  const handleChangeStatus = (uuid, order_status) => {
    OrderServices.updateOrder(uuid, { order_status: order_status })
      .then((res) => {
        notifySuccess(res.message);
        setIsUpdate(true);
      })
      .catch((err) => notifyError(err.message));
  };

  return (
    <>
    {
      (order?.order_status === "newOrder") ?
      <Select
        onChange={(e) => handleChangeStatus(uuid, e.target.value)}
        className="border border-gray-50 bg-gray-200 dark:border-gray-700 h-8 rounded-md text-xs focus:border-gray-400 focus:outline-none"
      >
        <option value="order_status" defaultValue hidden>
          {order?.order_status}
        </option>
        {/* <option defaultValue={order?.order_status === "newOrder"} value="newOrder">
          New Order
        </option> */}
        <option defaultValue={order?.order_status === "inProgress"} value="inProgress">
          In Progress
        </option>
        <option
          defaultValue={order?.order_status === "ready"} value="ready">
          Ready
        </option>
        <option defaultValue={order?.order_status === "delivered"} value="delivered">
          Delivered
        </option>
        <option defaultValue={order?.order_status === "canceled"} value="canceled">
          Canceled
        </option>
      </Select>
      : (order?.order_status === "inProgress") ?
      <Select
        onChange={(e) => handleChangeStatus(uuid, e.target.value)}
        className="border border-gray-50 bg-gray-200 dark:border-gray-700 h-8 rounded-md text-xs focus:border-gray-400 focus:outline-none"
      >
        <option value="order_status" defaultValue hidden>
          {order?.order_status}
        </option>
        <option
          defaultValue={order?.order_status === "ready"} value="ready">
          Ready
        </option>
        <option defaultValue={order?.order_status === "delivered"} value="delivered">
          Delivered
        </option>
        <option defaultValue={order?.order_status === "canceled"} value="canceled">
          Canceled
        </option>
      </Select>
      : (order?.order_status === "ready") ?
      <Select
        onChange={(e) => handleChangeStatus(uuid, e.target.value)}
        className="border border-gray-50 bg-gray-200 dark:border-gray-700 h-8 rounded-md text-xs focus:border-gray-400 focus:outline-none"
      >
        <option value="order_status" defaultValue hidden>
          {order?.order_status}
        </option>
        <option defaultValue={order?.order_status === "delivered"} value="delivered">
          Delivered
        </option>
        <option defaultValue={order?.order_status === "canceled"} value="canceled">
          Canceled
        </option>
      </Select>
      : (order?.order_status === "delivered") ?
      
          "Delivered"
        
      : "Canceled"

    }
      
    </>
  );
};

export default SelectStatus;
