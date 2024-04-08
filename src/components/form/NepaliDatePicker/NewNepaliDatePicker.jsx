import React from "react";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import "./styles.css";
import ErrorMessage from "../ErrorMessage";

function NewNepaliDatePicker({
  value,
  name,
  helperText,
  showError = true,
  setFieldValue,
}) {
  const handleDateChange = (value) => {
    setFieldValue(name, value);
  };

  // TODO: Add editable input field

  return (
    <>
      <NepaliDatePicker
        name={name}
        value={value}
        // onChange={handleDateChange}
        onSelect={handleDateChange}
        inputClassName="nepali-date-picker-input"
        className="border rounded-md h-12 text-base text-gray-500 focus:outline-none block w-full bg-gray-100 dark:bg-white focus:bg-white"
        options={{
          closeOnSelect: true,
          calenderLocale: "ne",
          valueLocale: "en",
        }}
      />
      {!showError || helperText ? (
        <ErrorMessage errorName={helperText} />
      ) : (
        <span className="text-red-400 text-sm mt-2">&nbsp;</span>
      )}
    </>
  );
}

export default NewNepaliDatePicker;
