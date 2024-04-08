import { Textarea } from "windmill-react-ui-kit";
import ErrorMessage from "./ErrorMessage";

const TextArea = ({
  defaultValue,
  name,
  onBlur,
  disabled,
  placeholder,
  helperText,
  onChange,
  value,
  showError = true,
}) => {
  return (
    <>
      <Textarea
        className="border rounded-md px-3 h-20 text-base text-gray-500 focus:outline-none block w-full bg-gray-100 dark:bg-gray-900 focus:bg-white"
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
        onBlur={onBlur}
        placeholder={placeholder}
        name={name}
        value={value}
      />
      {!showError || helperText ? (
        <ErrorMessage errorName={helperText} />
      ) : (
        <span className="text-red-400 text-sm mt-2">&nbsp;</span>
      )}
    </>
  );
};

export default TextArea;
