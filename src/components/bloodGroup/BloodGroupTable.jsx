import { TableBody, TableCell, TableRow } from "windmill-react-ui-kit";

import useToggleDrawer from "../../hooks/useToggleDrawer";
import BloodGroupModal from "../modal/AadharbhutBibaranModal/BloodGroupModal";
import AddEditModal from "../modal/AddEditModal";
import MainModal from "../modal/MainModal";
import EditDeleteButton from "../table/EditDeleteButton";

const BloodGroupTable = ({ categories }) => {
  const { title, serviceId, handleModalOpen, handleDeleteModelOpen } =
    useToggleDrawer();
  return (
    <>
      <MainModal id={serviceId} title={title} />
      <AddEditModal>
        <BloodGroupModal id={serviceId} />
      </AddEditModal>
      <TableBody>
        {categories?.map((parent) => (
          <TableRow key={parent._id}>
            <TableCell className="text-sm ">
              <span>{parent.type}</span>
            </TableCell>
            <TableCell className="text-sm text-center">
              <span>{parent.symbol}</span>
            </TableCell>
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

export default BloodGroupTable;
