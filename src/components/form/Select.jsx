import { Select as WindMillSelect } from "windmill-react-ui-kit";
import ErrorMessage from "./ErrorMessage";

const Select = ({
  helperText,
  placeholder,
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
        className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
        name={name}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
      >
        <option value="" defaultValue hidden className="text-gray-500">
          {defaultValue}
        </option>
        {options &&
          options.map((option, idx) => (
            <option key={option + idx} value={option}>
              {option}
            </option>
          ))}
      </WindMillSelect>
      {helperText ? (
        <ErrorMessage errorName={helperText} />
      ) : (
        <span className="text-red-400 text-sm mt-2">&nbsp;</span>
      )}
    </>
  );
};

export default Select;
