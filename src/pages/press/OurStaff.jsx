import { useState } from "react";
import PageTitle from "src/components/Typography/PageTitle";
import AddEditModal from "src/components/modal/AddEditModal";
import DeleteModal from "src/components/modal/DeleteModal";
import { Table } from "src/components/table";
import EditDeleteButton from "src/components/table/EditDeleteButton";
import {
  useGetStaffList,
  useGetStaffById,
  useSaveStaff,
  useEditStaff,
  useDeleteStaff,
} from "src/hooks/press/useStaffSubmit";
import useToggleModal from "src/hooks/useToggleModal";
import { TableCell, TableRow, Badge } from "windmill-react-ui-kit";
import StaffModal from "./modals/StaffModal";
import {NavLink} from "react-router-dom"
import Tooltip from "../../components/tooltip/Tooltip";
import { IoMdEye } from "react-icons/io";

const OurStaff = () => {

  const {
    serviceId,
    handleModalOpen,
    handleModalClose,
    handleDeleteModalOpen,
    handleDeleteModalClose,
  } = useToggleModal();

  const [callApi, setCallApi] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedId, setSelectedId] = useState(false);

  const { data: staffData, isLoading, refetch } = useGetStaffList();

  const { mutate: deleteStaff, isLoading: deleteLoading } = useDeleteStaff();

  const { mutate: saveStaff, isLoading: saveLoading } =
    useSaveStaff({
      onSettled: () => {
        handleModalClose();
      },
    });

  const { mutate: editStaff, isLoading: editLoading } = useEditStaff();

  const { data: staffById, isSuccess } = useGetStaffById(
    selectedId,
    {
      enabled: callApi,
      onSettled: () => {
        setCallApi(false);
        handleModalOpen();
      },
    }
  );

  const dataMap = (data, index) => {
    if(data?.role === 'staff'){
      return(
        <TableRow key={index}>
          <TableCell className="text-sm ">
            <span>{index+1}</span>
          </TableCell>
          <TableCell className="text-sm ">
            <span>{data?.name}</span>
          </TableCell>
          <TableCell className="text-sm ">
            <span>{data?.phone_number}</span>
          </TableCell>
          <TableCell className="text-sm ">
            <span>{data?.address}</span>
          </TableCell>
          <TableCell className="text-right flex justify-start ">
            <NavLink
                to={`/staff/${data?.uuid}`}
                className="flex justify-center text-gray-400 hover:text-green-600"
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
          <TableCell>
            <span className="bg-blue-300 text-black text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-gray-400">
              {(data?.status === 'disabled') ? "Disabled" : "Enabled"}</span>
          </TableCell>
          <TableCell className="text-sm font-semibold ">
            <Badge type="success">{data?.role}</Badge>
          </TableCell>
          <TableCell className="text-center">
            <EditDeleteButton
              id={data?.uuid}
              handleUpdate={() => {
                setCallApi(true);
                setIsEdit(true);
                setSelectedId(data?.uuid);
              }}
              handleDeleteModelOpen={() => handleDeleteModalOpen(data?.uuid)}
            />
          </TableCell>
        </TableRow>
      )
    }
  }

  const items = [
    "क्र.स​",
    "नाम ",
    "सम्पर्क नं",
    "ठेगाना",
    "विवरण",
    "स्टाटस",
    "रोल ",
  ];

  const itemsEngName = [
    "s.n",
    "name",
    "phone_number",
    "address",
    "view",
    "status",
    "role",
  ];

  const columns = [];
  items.forEach((item, idx) => {
    columns.push({
      headerText: item,
      columnName: itemsEngName[idx].toLowerCase(),
      sortable: true,
      searchable: true,
    });
  });
  columns.push({ headerText: "कार्य ", columnName: "actions" });

  const handleDataAddOrEdit = (data) => {
    const finalPayload = {
      ...data
    };

    isEdit &&
      editStaff(finalPayload, {
        onSuccess: () => {
          handleModalClose();
          refetch();
        },
      });
    !isEdit &&
      saveStaff(
        { ...finalPayload},
        {
          onSuccess: () => {
            handleModalClose();
            refetch();
          },
        }
      );
  };

  const handleDelete = () => {
    deleteStaff(serviceId);
    refetch();
    !deleteLoading && handleDeleteModalClose();
  };

  const onAddBtnClick = () => {
    setIsEdit(false);
    handleModalOpen();
  };

  return (
    <>
      <PageTitle>कर्मचारीहरु </PageTitle>
      <DeleteModal handleDelete={handleDelete} />
      <AddEditModal>
        <StaffModal
          data={isSuccess ? staffById?.data : []}
          handleDataAdd={handleDataAddOrEdit}
          saveLoading={saveLoading}
          editLoading={editLoading}
          isEdit={isEdit}
        />
      </AddEditModal>
      <Table
        columns={columns}
        data={staffData}
        onAddClick={onAddBtnClick}
        loaded={!isLoading}
        tableDataMap={dataMap}
      />
    </>
  );
};

export default OurStaff;
