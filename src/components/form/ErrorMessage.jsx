import React from "react";

const ErrorMessage = ({ errorName }) => {
  return (
    <>
      {errorName && (
        <span className="text-red-400 text-sm mt-2">{errorName}</span>
      )}
    </>
  );
};

export default ErrorMessage;
