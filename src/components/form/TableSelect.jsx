import { Select as WindMillSelect } from "windmill-react-ui-kit";
import ErrorMessage from "./ErrorMessage";

const TableSelect = ({
  helperText,
  disabled,
  name,
  onBlur,
  options,
  onChange,
  value,
  defaultValue,
}) => {
  return (
    <>
      <WindMillSelect
        className="border text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
        name={name}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      >
        <option value="" defaultValue hidden className="text-gray-500">
          {defaultValue}
        </option>
        {options &&
          options.map((option, idx) => (
            <option key={option + idx} value={option.value}>
              {option.name}
            </option>
          ))}
      </WindMillSelect>
      <ErrorMessage errorName={helperText} />
    </>
  );
};

export default TableSelect;
