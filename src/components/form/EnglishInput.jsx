import { Input } from "windmill-react-ui-kit";
import ErrorMessage from "./ErrorMessage";

const EnglishInput = ({
  defaultValue,
  name,
  onBlur,
  type,
  disabled,
  placeholder,
  helperText,
  onChange,
  value,
  min,
  max,
  showError = true,

}) => {
  return (
    <>
      <Input
        className="border rounded-md px-3 h-12 text-base text-gray-500 focus:outline-none block w-full bg-gray-100 dark:bg-white  focus:bg-white"
        defaultValue={defaultValue}
        min={min}
        max={max}
        onChange={onChange}
        disabled={disabled}
        onBlur={onBlur}
        placeholder={placeholder}
        name={name}
        value={value}
        type={type}
      />
      {!showError || helperText ? (
        <ErrorMessage errorName={helperText} />
      ) : (
        <span className="text-red-400 text-sm mt-2">&nbsp;</span>
      )}
    </>
  );
};

export default EnglishInput;
