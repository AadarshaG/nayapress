import ClockLoader from "react-spinners/ClockLoader";
import { Button } from "windmill-react-ui-kit";

const LoadingIndicator = () => (
  <ClockLoader
    color="#0e9f6e"
    size={16}
    css={{
      marginRight: "5px",
    }}
    speedMultiplier={2}
  />
);

function ModalFooter({
  uuid,
  onCancelClick,
  isLoading = false,
  disabled = false,
}) {
  return (
    <div className="relative float-right  mt-4 mb-4">
      <Button
        onClick={onCancelClick}
        className="sm:w-auto mr-0 bg-white w-full text-red-500 hover:bg-red-50 hover:border-red-100 hover:text-red-600 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-red-700"
        layout="outline"
      >
        रद्द गर्नुहोस
      </Button>
      <Button
        className="w-full sm:w-auto text-green-500 hover:bg-gray-500 hover:text-white-100"
        layout="outline"
        type="submit"
        iconLeft={isLoading && LoadingIndicator}
        disabled={disabled}
      >
        {uuid ? "अप्डेट गर्नुहोस​" : "थप्नुहोस​"}
      </Button>
    </div>
  );
}

export default ModalFooter;
