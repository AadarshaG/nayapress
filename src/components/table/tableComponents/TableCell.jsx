import { TableCell } from "windmill-react-ui-kit";

function CTableCell({ children, onClick, className }) {
  return (
    <TableCell
      className={"select-none cursor-pointer text-right max-w-sm " + className}
      onClick={onClick}
    >
      {children}
    </TableCell>
  );
}

export default CTableCell;
