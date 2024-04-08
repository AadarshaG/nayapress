import React, { useEffect, useState } from "react";
import NepaliDatepicker from "nepali-datepicker-and-dateinput";
import "./styles.css";
import ErrorMessage from "../ErrorMessage";

function NepDatePicker({
  value,
  name,
  placeholder,
  setFieldValue,
  onBlur,
  helperText,
  showError = true,
}) {
  const [dateValue, setDateValue] = useState(value);
  useEffect(() => {
    console.log(name, dateValue);
    setFieldValue(name, dateValue);
  }, [dateValue, setFieldValue, name]);
  console.log(value, "test value");
  return (
    <>
      <NepaliDatepicker
        // ref={}
        type="text"
        name={name}
        value={value}
        defaultDate={value}
        showDefaultDate
        label=""
        onChange={(name, m, value) => setDateValue(value)}
        onBlur={onBlur}
        id="nepali-datepicker"
        inputContainerClassName="nepali-date-picker-input"
        className="border rounded-md p-3 h-12 text-base text-gray-500 focus:outline-none block w-full bg-gray-100 dark:bg-white focus:bg-white"
        placeholder={placeholder}
      />
      {!showError || helperText ? (
        <ErrorMessage errorName={helperText} />
      ) : (
        <span className="text-red-400 text-sm mt-2">&nbsp;</span>
      )}
    </>
  );
}

export default NepDatePicker;
