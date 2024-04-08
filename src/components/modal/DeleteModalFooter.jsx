import { Button } from "windmill-react-ui-kit";

function DeleteModalFooter({ id, onCancelClick, handleDelete }) {
  return (
    <div className="mt-4 flex float-right ">
      <Button
        className="w-full sm:w-auto hover:bg-gray-500 hover:text-white-100"
        layout="outline"
        onClick={onCancelClick}
      >
        राख्नुहोस्
      </Button>
      <Button
        onClick={handleDelete}
        layout="outline"
        className="sm:w-auto mr-0 bg-white w-full text-red-500 hover:bg-red-50 hover:border-red-100 hover:text-red-600 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-red-700"
      >
        मेटाउनुहोस
      </Button>
    </div>
  );
}

export default DeleteModalFooter;
