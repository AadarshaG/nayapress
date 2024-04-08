import { useState } from "react";
import PageTitle from "src/components/Typography/PageTitle";
import AddEditModal from "src/components/modal/AddEditModal";
import DeleteModal from "src/components/modal/DeleteModal";
import { Table } from "src/components/table";
import EditDeleteButton from "src/components/table/EditDeleteButton";
import {
  useGetCustomerList,
  useGetCustomerById,
  useSaveCustomer,
  useEditCustomer,
  useDeleteCustomer,
} from "src/hooks/press/useCustomerSubmit";
import useToggleModal from "src/hooks/useToggleModal";
import { TableCell, TableRow } from "windmill-react-ui-kit";
import CustomerModal from "./modals/CustomerModal";
import {NavLink} from "react-router-dom"
import { IoMdEye } from "react-icons/io";
import Tooltip from "../../components/tooltip/Tooltip";

const Customer = () => {
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

  const { data, isLoading, refetch } = useGetCustomerList();

  const { mutate: deleteCustomer, isLoading: deleteLoading } =
    useDeleteCustomer();

  const { mutate: saveCustomer, isLoading: saveLoading } =
    useSaveCustomer({
      onSettled: () => {
        handleModalClose();
      },
    });

  const { mutate: editCustomer, isLoading: editLoading } =
    useEditCustomer();

  const { data: customerById, isSuccess } = useGetCustomerById(
    selectedId,
    {
      enabled: callApi,
      onSettled: () => {
        setCallApi(false);
        handleModalOpen();
      },
    }
  );

  const dataMap = (data, index) => (
    <TableRow key={index}>
      <TableCell className="text-sm ">
        <span>{index+1}</span>
      </TableCell>
      <TableCell className="text-sm ">
        <span>{data?.contact_person}</span>
      </TableCell>
      <TableCell className="text-sm ">
        <span>{data?.phone_number}</span>
      </TableCell>
      <TableCell className="text-sm ">
        <span>{data?.address}</span>
      </TableCell>
      <TableCell className="text-sm flex justify-start ">
        <NavLink
            to={`/customers/${data?.uuid}`}
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
      <TableCell className="text-center">
        <EditDeleteButton
          id={data?.uuid}
          handleUpdate={() => {
            setCallApi(true)
            setIsEdit(true)
            setSelectedId(data?.uuid)
          }}
          handleDeleteModelOpen={() => handleDeleteModalOpen(data?.uuid)}
        />
      </TableCell>
    </TableRow>
  );

  const items = [
    "क्र.स​",
    "सम्पर्क गर्नेको नाम ",
    "सम्पर्क नं",
    "ठेगाना",
    "विवरण",
  ];

  const itemsEngName = [
    "s.n",
    "contact_person",
    "phone_number",
    "address",
    "view",
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
      editCustomer(finalPayload, {
        onSuccess: () => {
          handleModalClose();
          refetch();
        },
      });
    !isEdit &&
      saveCustomer(
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
    deleteCustomer(serviceId);
    refetch();
    !deleteLoading && handleDeleteModalClose();
  };

  const onAddBtnClick = () => {
    setIsEdit(false);
    handleModalOpen();
  };

  return (
    <>
      <PageTitle>ग्राहकहरु</PageTitle>
      <DeleteModal handleDelete={handleDelete} />
      <AddEditModal>
        <CustomerModal
          data={isSuccess ? customerById?.data : []}
          handleDataAdd={handleDataAddOrEdit}
          saveLoading={saveLoading}
          editLoading={editLoading}
          isEdit={isEdit}
        />
      </AddEditModal>
      <Table
        columns={columns}
        data={data}
        onAddClick={onAddBtnClick}
        loaded={!isLoading}
        tableDataMap={dataMap}
      />
    </>
  );
};

export default Customer;
