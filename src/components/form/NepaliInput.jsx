import React from "react";
import Nepali from "nepalify-react";
import ErrorMessage from "./ErrorMessage";

const NepaliInput = ({
  defaultValue,
  required,
  name,
  label,
  placeholder,
  onChange,
  onBlur,
  value,
  type = "text",
  helperText,
  disabled,
  showError = true,
}) => {
  return (
    <>
      <Nepali
        className={
          type === "textarea"
            ? "border rounded-md px-3 h-32 text-base text-gray-500 focus:outline-none block w-full bg-gray-100 dark:bg-white focus:bg-white"
            : "border rounded-md px-3 h-12 text-base text-gray-500 focus:outline-none block w-full bg-gray-100 dark:bg-white  focus:bg-white"
        }
        funcname="unicodify"
        defaultValue={defaultValue}
        placeholder={placeholder}
        valueChange={(_, value) => onChange(value)}
        name={name}
        onBlur={onBlur}
        inputType={type}
        value={value}
        disabled={disabled}
      />
      {!showError || helperText ? (
        <ErrorMessage errorName={helperText} />
      ) : (
        <span className="text-red-400 text-sm mt-2">&nbsp;</span>
      )}
    </>
  );
};
export default NepaliInput;
