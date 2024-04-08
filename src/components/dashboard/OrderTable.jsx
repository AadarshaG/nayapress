import React from "react";
import dayjs from "dayjs";
import { TableCell, TableBody, TableRow, Badge } from "windmill-react-ui-kit";
import {NavLink} from "react-router-dom"
import { IoMdEye } from "react-icons/io";
import Tooltip from "../../components/tooltip/Tooltip";

//internal import
import Status from "../../components/table/Status";

import NepaliDate from 'https://cdn.jsdelivr.net/npm/nepali-date-converter/dist/nepali-date-converter.es5.js'


const OrderTable = ({ orders }) => {
 
  return (
    <>
      <TableBody>
        {orders?.map((order,index) => (
          <TableRow key={index+1}>
            <TableCell>
              <span className="text-sm">
                {index+1}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm ">{order?.customer?.contact_person}</span>
            </TableCell>

            <TableCell>
              <Badge type="success"> {order?.order_status}</Badge>
            </TableCell>
            <TableCell>
            <span className="text-sm font-semibold">Rs.{order?.unit_price*order?.unit_pieces} </span>
            </TableCell>
            <TableCell>
            <span className="text-sm ">{new NepaliDate(order?.delivery_date).format('YYYY MMMM DD')} </span>
            </TableCell>
            <TableCell  className="flex justify-start items-center">
              <NavLink
                to={`/orders/${order?.uuid}`}
                className="flex justify-center items-center text-gray-400 hover:text-green-600"
                >
                <Tooltip
                    id="view"
                    Icon={IoMdEye}
                    title="पुरा विवरण"
                    bgColor="#10B981"
                    className="h-30 w-30"
                />
              </NavLink>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default OrderTable;
