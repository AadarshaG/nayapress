import React from "react";
import { FiTrash2 } from "react-icons/fi";
import Modal from "react-modal";
import useToggleModal from "src/hooks/useToggleModal";
import DeleteModalFooter from "./DeleteModalFooter";

const DeleteModal = ({ handleDelete }) => {
  const { isDeleteModalOpen, handleDeleteModalClose } = useToggleModal();

  const customStyles = {
    content: {
      maxWidth: "50vw",
      width: "500px",
      border: "none",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      opacity: 1,
      padding: "20px",
    },
    overlay: {
      zIndex: 999,
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgb(124,125,125,0.5)",
    },
  };

  return (
    <>
      <Modal
        style={customStyles}
        contentLabel="modal"
        isOpen={isDeleteModalOpen}
        onClose={handleDeleteModalClose}
      >
        <div className="text-center custom-modal px-8 pt-6 pb-4">
          <span className="flex justify-center text-3xl mb-6 text-red-500">
            <FiTrash2 />
          </span>
          <h2 className="text-xl font-bold mb-1">
            के यो विवरण मेटाउन चाहनुहुन्छ?
          </h2>
          <p className="text-sm text-gray-600">
            के तपाई साँच्चै यी रेकर्डहरू मेटाउन चाहनुहुन्छ? यदि तपाईंले
            मेटाउनुभयो भने तपाईंले यसलाई आफ्नो सूचीमा हेर्न सक्नुहुन्न!
          </p>
        </div>
        <DeleteModalFooter
          onCancelClick={handleDeleteModalClose}
          handleDelete={handleDelete}
        />
      </Modal>
    </>
  );
};

export default React.memo(DeleteModal);
