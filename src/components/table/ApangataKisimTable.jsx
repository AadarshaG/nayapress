import { TableBody, TableCell, TableRow } from "windmill-react-ui-kit";

import useToggleDrawer from "../../hooks/useToggleDrawer";
import BloodGroupModal from "../modal/AadharbhutBibaranModal/BloodGroupModal";
import AddEditModal from "../modal/AddEditModal";
import MainModal from "../modal/MainModal";
import EditDeleteButton from "./EditDeleteButton";

const ApangataKisimTable = ({ tempData }) => {
  const { title, serviceId, handleModalOpen, handleDeleteModelOpen } =
    useToggleDrawer();
  return (
    <>
      <MainModal id={serviceId} title={title} />
      <AddEditModal>
        <BloodGroupModal id={serviceId} />
      </AddEditModal>
      <TableBody>
        {tempData?.map((parent) => (
          <TableRow key={parent._id}>
            <TableCell className="text-sm ">
              <span>{parent.mainType}</span>
            </TableCell>
            <TableCell className="text-sm text-center">
              <span>{parent.name}</span>
            </TableCell>
            <TableCell className="text-sm text-center">
              <span>{parent.nameEng}</span>
            </TableCell>
            <TableCell className="text-sm text-center">
              <span>{parent.priority}</span>
            </TableCell>
            {parent.isType && (
              <TableCell className="text-sm text-green-600 text-center">
                <span> &#10003;</span>
              </TableCell>
            )}
            {!parent.isType && (
              <TableCell className="text-sm text-center">
                <span></span>
              </TableCell>
            )}
            <TableCell>
              <EditDeleteButton
                id={parent._id}
                title={parent.parent}
                handleUpdate={handleModalOpen}
                handleDeleteModelOpen={handleDeleteModelOpen}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default ApangataKisimTable;
