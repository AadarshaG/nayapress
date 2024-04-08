import { Label } from "windmill-react-ui-kit";

const LabelArea = ({ label, width, required }) => {
  return (
    <div>
      <Label
        className={
          width
            ? "col-span-3 sm:col-span-2 mx-2 w-64 font-medium text-sm"
            : "col-span-3 sm:col-span-2 mx-2 w-32 font-medium text-sm"
        }
      >
        {label}
        {required && <span className="ml-2 text-red-600">*</span>}
      </Label>
      <span>&nbsp;</span>
    </div>
  );
};

export default LabelArea;
