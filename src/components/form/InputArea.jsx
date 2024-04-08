import { Input } from "windmill-react-ui-kit";

const InputArea = ({
  register,
  defaultValue,
  required,
  name,
  label,
  type,
  disabled,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <>
      <Input
        {...register(`${name}`, {
          required: required ? false : `${label} is required!`,
        })}
        className="border h-12 text-xs focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
        defaultValue={defaultValue}
        type={type}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        name={name}
        value={value}
      />
    </>
  );
};

export default InputArea;
