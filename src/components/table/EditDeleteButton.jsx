import { FiEdit, FiTrash2 } from "react-icons/fi";
import { HiOutlineEye } from "react-icons/hi";

import Tooltip from "../tooltip/Tooltip";

const EditDeleteButton = ({
  id,
  uuid,
  data,
  handleUpdate,
  handleView,
  handleDeleteModelOpen,
  title,
}) => {
  return (
    <>
      <div className="flex justify-end text-right">
      {handleView && (
          <div
            onClick={() => handleView(data)}
            className="p-2 cursor-pointer text-gray-400 hover:text-pink-300"
          >
            <Tooltip id="view" Icon={HiOutlineEye} title="पुरा विवरण" bgColor="#5D27C3" />
          </div>
        )}
        {handleUpdate && (
          <div
            onClick={() => handleUpdate(data)}
            className="p-2 cursor-pointer text-gray-400 hover:text-green-600"
          >
            <Tooltip id="edit" Icon={FiEdit} title="अप्डेट गर्नुहोस्" bgColor="#10B981" />
          </div>
        )}

        {handleDeleteModelOpen && (
          <div
            onClick={() => handleDeleteModelOpen(uuid)}
            className="p-2 cursor-pointer text-gray-400 hover:text-red-600"
          >
          <Tooltip
            id="delete"
            Icon={FiTrash2}
            title="रद्द गर्नुहोस्"
            bgColor="#EF4444"
          />
        </div>
        )}
      </div>
    </>
  );
};

export default EditDeleteButton;