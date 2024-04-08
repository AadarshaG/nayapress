import React from "react";
import Modal from "react-modal";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById("root"));

const TabAddEditModal = ({ isModalOpen, closeModal, id, children }) => {
  const customStyles = {
    content: {
      // maxWidth: "50vw",
      minWidth: "500px",
      border: "1px solid rgba(0,0,0,.2)",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      opacity: 1,
      padding: "25px",
      overflow: "inherit",
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
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="modal"
    >
      {children}
    </Modal>
  );
};

export default React.memo(TabAddEditModal);
