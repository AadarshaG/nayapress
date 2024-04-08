import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "src/context/SidebarContext";

const useToggleModal = () => {
  const [serviceId, setServiceId] = useState("");
  const [title] = useState("");
  const [modalData, setModalData] = useState(null);
  const { isModalOpen, toggleModal, isDeleteModalOpen, toggleDeleteModal } =
    useContext(SidebarContext);

  const handleModalOpen = (id) => {
    setServiceId(id);
    toggleModal();
  };

  const handleModalClose = () => {
    toggleModal();
    setServiceId(null);
  };

  const handleDeleteModalOpen = (id) => {
    setServiceId(id);
    toggleDeleteModal();
  };

  const handleDeleteModalClose = () => {
    setServiceId(null);
    toggleDeleteModal();
  };

  const handleUpdate = (uuid) => {
    setServiceId(uuid);
    toggleModal();
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
    handleModalOpen,
    handleModalClose,
    isDeleteModalOpen,
    handleDeleteModalOpen,
    handleDeleteModalClose,
    setServiceId,
    handleUpdate,
  };
};

export default useToggleModal;
