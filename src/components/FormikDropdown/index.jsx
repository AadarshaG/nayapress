import Select from "react-select";
import AsyncSelect from "react-select/async";
import AsyncSelectCreatable from "react-select/async-creatable";
import CreatableSelect from "react-select/creatable";

const FormikDropdown = ({
  type,
  label,
  labelColor,
  onBlur,
  onChange,
  field,
  required,
  error,
  customStyles,
  onChangeCallback,
  ...rest
}) => {
  const handleChange = (value) => {
    // this is going to call setFieldValue and manually update values.topcis
    if (onChangeCallback) {
      onChangeCallback(value);
    }
    onChange(field, value);
  };

  const handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.topcis
    onBlur(field, true);
    // if (rest.value === null) {
    //   rest.setFieldError("defaultPurpose", "Default Purpose is required!");
    // }
  };
  // console.log("In dropdown", error);

  const getComponent = (type, props) => {
    switch (type) {
      case "ASYNC":
        return <AsyncSelect {...props} />;
      case "CREATABLE":
        return <CreatableSelect {...props} />;
      case "ASYNC_CREATABLE":
        return <AsyncSelectCreatable {...props} />;
      default:
        return <Select {...props} />;
    }
  };

  return (
    <>
      {getComponent(type, {
        styles: {
          input: (a, b) => ({
            ...a,
            padding: "8px 0",
            ...customStyles?.input,
          }),
          control: (a, b) => ({
            ...a,
            minHeight: 48,
            height: "auto",
            // margin: "5px 0",
            ...(error
              ? {
                  borderColor: "red",
                }
              : {}),
          }),
          container: (a, b) => ({
            ...a,
            width: "100%",
            minHeight: 48,
            height: "auto",
          }),
          valueContainer: (a, b) => ({
            ...a,
            // padding: "10px 0",
          }),
        },
        ...rest,
        onBlur: handleBlur,
        onChange: (v) => handleChange(v),
      })}
      {!!error && (
        <div className="text-red-400 text-sm -top-2" >{error}</div>
      )}
    </>
  );
};

export default FormikDropdown;
