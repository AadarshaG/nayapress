import { TableBody, TableCell, TableRow } from "windmill-react-ui-kit";

const Invoice = ({ data }) => {
  
  return (
    <>
      <TableBody className="bg-white dark:bg-gray-800 divide-y divide-gray-100 text-serif text-sm ">
        <TableRow className="dark:border-gray-700 dark:text-gray-400">
            <TableCell className="px-6 py-1 whitespace-nowrap font-normal text-gray-500 text-left">
              1.
            </TableCell>
            <TableCell className="px-6 py-1 whitespace-nowrap font-normal text-gray-500">
              {data?.work_description}
            </TableCell>
            <TableCell className="px-6 py-1 whitespace-nowrap font-normal text-center">
              {data?.unit_pieces}
            </TableCell>
            <TableCell className="px-6 py-1 whitespace-nowrap font-normal text-center">
              {data?.unit_price}
            </TableCell>

            <TableCell className="px-6 py-1 whitespace-nowrap text-center font-normal text-gray-500 dark:text-green-500">
              Rs.{data?.unit_price * data?.unit_pieces}
            </TableCell>
        </TableRow>
      </TableBody>
    </>
  );
};

export default Invoice;
