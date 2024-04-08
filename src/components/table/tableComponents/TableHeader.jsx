import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import { TableCell } from "windmill-react-ui-kit";

const Th = ({ headerText, columnName, handleSort, sortDirection }) => {
  const handleSortInner = () => {
    if (!columnName || !handleSort) {
      return;
    }
    switch (sortDirection) {
      case "asc":
        handleSort(columnName, "desc");
        break;
      case "desc":
        handleSort(columnName, "");
        break;
      default:
        handleSort(columnName, "asc");
        break;
    }
  };

  const tableSortDirection =
    sortDirection === "" || !sortDirection ? "" : sortDirection;
  return (
    <TableCell
      className="select-none cursor-pointer text-right "
      onClick={handleSortInner}
    >
      {handleSort ? (
        <div className="flex items-center ">
          <span className="text-ellipsis overflow-hidden">{headerText}</span>
          {tableSortDirection === "asc" && <FaSortUp className="ml-1" />}
          {tableSortDirection === "" && <FaSort className="ml-1" />}
          {tableSortDirection === "desc" && <FaSortDown className="ml-1" />}
        </div>
      ) : (
        <>{headerText}</>
      )}
    </TableCell>
  );
};

export default Th;
