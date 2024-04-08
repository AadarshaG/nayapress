import * as dayjs from "dayjs";
import { Link } from "react-router-dom";
import { TableBody, TableCell, TableRow } from "windmill-react-ui-kit";

import { FiZoomIn } from "react-icons/fi";
import SelectStatus from "../form/SelectStatus";
import Status from "../table/Status";
import Tooltip from "../tooltip/Tooltip";

const OrderTable = ({ orders }) => {
  return (
    <>
      <TableBody>
        {orders?.map((order, i) => (
          <TableRow key={i + 1}>
            <TableCell>
              <span className="font-semibold uppercase text-xs">{i + 1}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">
                {dayjs(order.createdAt).format("MMM D, YYYY")}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm">{order.address.substring(0, 25)}</span>
            </TableCell>
            <TableCell>
              {" "}
              <span className="text-sm">{order.contact}</span>{" "}
            </TableCell>
            <TableCell>
              <span className="text-sm font-semibold">
                {order.paymentMethod}
              </span>
            </TableCell>
            <TableCell>
              {" "}
              <span className="text-sm font-semibold">
                ${Math.round(order.total)}.00
              </span>{" "}
            </TableCell>
            <TableCell className="text-center text-xs">
              <Status status={order.status} />
            </TableCell>
            <TableCell className="text-center">
              <SelectStatus id={order._id} order={order} />
            </TableCell>
            <TableCell className="text-right flex justify-end">
              <div className="p-2 cursor-pointer text-gray-400 hover:text-green-600">
                {" "}
                <Link to={`/order/${order.uuid}`}>
                  <Tooltip
                    id="view"
                    Icon={FiZoomIn}
                    title="View Invoice"
                    bgColor="#34D399"
                  />
                </Link>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default OrderTable;

// const dataMap = (data, index) => {
//   if(data?.samiti_type === "मेलमिलाप केन्द्र"){
//     return (
//       <TableRow key={index}>
//       <TableCell className="text-sm ">
//         <span>
//           {sthaniyaTahaList?.find((x) => x.id === data?.sthaniya_taha_id)
//             ?.name || "-"}
//         </span>
//       </TableCell>
//       <TableCell className="text-sm ">
//         <span>{data?.name}</span>
//       </TableCell>
//       <TableCell className="text-sm">
//         <span>{data?.title}</span>
//       </TableCell>
//       <TableCell className="text-sm">
//         <span>{data?.samiti_created_date}</span>
//       </TableCell>
//       <TableCell className="text-sm">
//         <span>{data?.samiti_type}</span>
//       </TableCell>
//       <TableCell className="text-center">
//         <EditDeleteButton
//           id={data.id}
//           handleUpdate={() => {
//             setIsEdit(true);
//             setSelectedId(data.id);
//             setCallApi(true);
//           }}
//           handleDeleteModelOpen={() => handleDeleteModalOpen(data.id)}
//         />
//       </TableCell>
//     </TableRow>
//     )
//   }else{
//     return null;
//   }
// };
