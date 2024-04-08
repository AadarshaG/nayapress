import React from 'react';
import ReactTooltip from 'react-tooltip';

const Tooltip = ({ id, Icon, title, bgColor }) => {
  return (
    <>
      <p data-tip data-for={id}>
        <Icon className="h-6 w-6" />
      </p>
      <ReactTooltip id={id} backgroundColor={bgColor}>
        <span className="text-sm font-medium">{title}</span>
      </ReactTooltip>
    </>
  );
};

export default Tooltip;
