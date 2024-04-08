import React from "react";
import ReactTooltip from "react-tooltip";

const TextTooltip = ({ id, content, title, bgColor }) => {
  return (
    <>
      <p data-tip data-for={id}>
        <span className="text-ellipsis">{content}</span>
      </p>
      <ReactTooltip id={id} backgroundColor="bg-gray-500">
        <span className="text-sm font-medium">{title}</span>
      </ReactTooltip>
    </>
  );
};

export default TextTooltip;
