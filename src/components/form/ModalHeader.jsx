import React from "react";
import { AiOutlineClose } from "react-icons/ai";
const ModalHeader = ({ title, handleModalClose }) => {
  return (
    <>
      <div className="">
        <div className="flex items-baseline justify-between">
          <div></div>
          <h4 className="text-xl text-center mb-2 font-bold">{title}</h4>
          <AiOutlineClose
            className="cursor-pointer"
            color={"#232323"}
            size={24}
            onClick={handleModalClose}
          />
        </div>
        <div className="border-b mb-4"></div>
      </div>
    </>
  );
};

export default ModalHeader;
