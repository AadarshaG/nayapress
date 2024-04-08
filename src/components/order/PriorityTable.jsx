import { useState, useEffect } from "react";
import {NavLink} from "react-router-dom"
import dayjs from "dayjs";
import { TableBody, TableCell, TableRow, Badge } from "windmill-react-ui-kit";

import { IoMdEye } from "react-icons/io";
import Tooltip from "../tooltip/Tooltip";
import NepaliDate from 'https://cdn.jsdelivr.net/npm/nepali-date-converter/dist/nepali-date-converter.es5.js'
import SelectStatus from "../../components/form/SelectStatus";

const PriorityOrder = ({ orders }) => {

  return (
    <>
      <TableBody>
        {
            orders &&
            orders?.map((order, i) => (
                <TableRow key={i + 1}>
                    <TableCell>
                    <span className="font-semibold uppercase text-xs">{i + 1}</span>
                    </TableCell>
                    <TableCell>
                    <span className="text-sm">{order?.customer?.contact_person}</span>
                    </TableCell>
                    {/* <TableCell>
                        <Badge>{order?.payment_status}</Badge>
                    </TableCell> */}
                    <TableCell>
                        <Badge type="danger">{order?.order_status}</Badge>
                    </TableCell>
                    <TableCell>
                    <span className="text-sm font-semibold">Rs.{(order?.unit_price*order?.unit_pieces)-(order?.advanced_payment)} </span>
                    </TableCell>
                    <TableCell className="text-sm ">
                      <SelectStatus uuid={order?.uuid} order={order} />
                    </TableCell> 
                    <TableCell  className="flex justify-center items-center">
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
            ))
        }
      </TableBody>
    </>
  );
};

export default PriorityOrder;
