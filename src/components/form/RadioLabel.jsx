import { Label } from "windmill-react-ui-kit";

const RadioLabel = ({ label, required, children }) => {
  return (
    <div>
      <Label
        className="col-span-3 sm:col-span-2 mb-2 font-medium text-sm "
        radio
      >
        {required && <span className="ml-2 text-red-600">*</span>}
        {children}
        <span className="ml-2 cursor-pointer">{label}</span>
      </Label>
      <span>&nbsp;</span>
    </div>
  );
};

export default RadioLabel;
