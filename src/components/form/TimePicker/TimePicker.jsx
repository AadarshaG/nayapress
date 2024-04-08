import React, { useEffect, useState } from "react";
import TimePickerfrom from "react-time-picker";
import ErrorMessage from "../ErrorMessage";
import "./styles.css";

const ReactTimePicker = ({
  required,
  name,
  label,
  placeholder,
  onBlur,
  value,
  type = "text",
  setFieldValue,
  helperText,
  disabled,
  showError = true,
}) => {
  const [timeValue, onChange] = useState(new Date());

  useEffect(() => {
    setFieldValue(name, timeValue);
  }, [setFieldValue, name, timeValue]);

  return (
    <>
      <TimePickerfrom
        isOpen={false}
        onChange={(e) => {
          onChange(e);
        }}
        value={value}
        className="border rounded-md px-3 h-12 text-base text-gray-500 focus:outline-none block w-full bg-gray-100 dark:bg-gray-900 focus:bg-white"
      />
      {!showError || helperText ? (
        <ErrorMessage errorName={helperText} />
      ) : (
        <span className="text-red-400 text-sm mt-2">&nbsp;</span>
      )}
    </>
  );
};

export default ReactTimePicker;
