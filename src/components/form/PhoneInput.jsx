import React, { useEffect, useState } from "react";
import { PatternFormat } from "react-number-format";
import ErrorMessage from "./ErrorMessage";

function PhoneInput({
  name,
  type,
  onChange,
  setFieldValue,
  value,
  onBlur,
  helperText,
  showError = true,
}) {
  const [phoneValue, setPhoneValue] = useState({ value });
  useEffect(() => {
    setFieldValue(name, phoneValue?.value);
  }, [phoneValue, setFieldValue, name]);
  return (
    <>
      <PatternFormat
        format="##########"
        name={name}
        type={type}
        onValueChange={(value, _) => setPhoneValue(value)}
        value={value}
        onBlur={onBlur}
        mask="_"
        placeholder="--"
        className="border rounded-md px-3 h-12 text-base text-gray-500 focus:outline-none block w-full bg-gray-100 dark:bg-white  focus:bg-white"
      />
      {!showError || helperText ? (
        <ErrorMessage errorName={helperText} />
      ) : (
        <span className="text-red-400 text-sm mt-2">&nbsp;</span>
      )}
    </>
  );
}

export default PhoneInput;
