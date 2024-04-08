import React, { useEffect, useState } from "react";
import Select from "react-select";
import ErrorMessage from "../ErrorMessage";
import "./styles.css";

const MultiSelect = ({
  defaultValue,
  options,
  showError = true,
  helperText,
  setFieldValue,
  value,
  onChange,
  name,
  onBlur,
}) => {
  const [selectValue, setSelectValue] = useState(value);
  useEffect(() => {
    setFieldValue(name, selectValue);
  }, [selectValue, setFieldValue, name]);
  return (
    <>
      <Select
        defaultValue={defaultValue}
        isMulti
        name={name}
        onChange={(e) => setSelectValue(e)}
        options={options}
        value={value}
        // onBlur={onBlur}
        placeholder="छान्नुहोस​"
        className=" border h-12 text-xs focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
        classNamePrefix="select"
      />
      {!showError || helperText ? (
        <ErrorMessage errorName={helperText} />
      ) : (
        <span className="text-red-400 text-sm mt-2">&nbsp;</span>
      )}
    </>
  );
};

export default MultiSelect;
