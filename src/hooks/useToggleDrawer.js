import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";

const useToggleDrawer = () => {
  const [serviceId, setServiceId] = useState("");
  const [title, setTitle] = useState("");
  const [modalData, setModalData] = useState(null);
  const {
    isModalOpen,
    isDeleteModalOpen,
    toggleDeleteModal,
    toggleModal,
  } = useContext(SidebarContext);

  const handleUpdate = (id) => {
    setServiceId(id);
    toggleModal();
  };

  const handleModalOpen = () => {
    setModalData(modalData);
    setServiceId(serviceId);
    toggleModal();
  };

  const handleModalClose = () => {
    setModalData();
    setServiceId();
    toggleModal();
  };

  const handleDeleteModelOpen = (id, title) => {
    setServiceId(id);
    toggleDeleteModal();
    setTitle(title);
  };
  const handleDeleteModelClose = () => {
    setServiceId();
    toggleDeleteModal();
  };

  useEffect(() => {
    if (!isModalOpen) {
      setServiceId();
      setModalData(null);
    }
  }, [isModalOpen]);

  return {
    title,
    serviceId,
    modalData,
    isModalOpen,
    isDeleteModalOpen,
    setServiceId,
    handleModalOpen,
    handleModalClose,
    handleUpdate,
    handleDeleteModelOpen,
    handleDeleteModelClose,
  };
};

export default useToggleDrawer;
