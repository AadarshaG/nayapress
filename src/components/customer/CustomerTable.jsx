import * as dayjs from "dayjs";
import { useContext, useState } from "react";
import { FiTrash2, FiZoomIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import { TableBody, TableCell, TableRow } from "windmill-react-ui-kit";

import { SidebarContext } from "../../context/SidebarContext";
import MainModal from "../modal/MainModal";
import Tooltip from "../tooltip/Tooltip";

const CustomerTable = ({ customers }) => {
  const [customerId, setCustomerId] = useState("");
  const { toggleModal } = useContext(SidebarContext);
  const [title, setTitle] = useState("");

  const handleModalOpen = (id, title) => {
    setCustomerId(id);
    toggleModal();
    setTitle(title);
  };

  return (
    <>
      <MainModal id={customerId} title={title} />
      <TableBody>
        {customers?.map((user) => (
          <TableRow key={user._id}>
            <TableCell>
              <span className="font-semibold uppercase text-xs">
                {" "}
                {user._id.substring(20, 24)}
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm">
                {dayjs(user.createdAt).format("MMM D, YYYY")}
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{user.name}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{user.email}</span>{" "}
            </TableCell>
            <TableCell>
              <span className="text-sm font-medium">{user.phone}</span>
            </TableCell>

            <TableCell>
              <div className="flex justify-end text-right">
                <div className="p-2 cursor-pointer text-gray-400 hover:text-green-600">
                  {" "}
                  <Link to={`/customer-order/${user._id}`}>
                    <Tooltip
                      id="view"
                      Icon={FiZoomIn}
                      title="View Order"
                      bgColor="#34D399"
                    />
                  </Link>
                </div>
                <div
                  onClick={() => handleModalOpen(user._id, user.name)}
                  className="p-2 cursor-pointer text-gray-400 hover:text-red-600"
                >
                  <Tooltip
                    id="delete"
                    Icon={FiTrash2}
                    title="Delete"
                    bgColor="#F87171"
                  />
                </div>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default CustomerTable;
