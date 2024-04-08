import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import {
  Input,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
  TableRow,
} from "windmill-react-ui-kit";

const DataTable = ({
  data,
  columns,
  isSelectable,
  selectedRows,
  handleRowSelect,
}) => {
  const [rowSelection, setRowSelection] = useState({});
  const [globalFilter, setGlobalFilter] = useState("");

  useEffect(() => {
    handleRowSelect && handleRowSelect(rowSelection);

    return () => {
      handleRowSelect && handleRowSelect({});
    };
  }, [rowSelection, handleRowSelect]);

  const selectColumn = useMemo(() => {
    if (!isSelectable) return [];

    return [
      {
        id: "select",
        header: ({ table }) => (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <IndeterminateCheckbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        ),
      },
    ];
  }, [isSelectable]);

  const table = useReactTable({
    data,
    columns: [...selectColumn, ...columns],
    initialState: {
      rowSelection: selectedRows || {},
    },
    state: {
      rowSelection,
      columnFilters: {},
      columnOrder: {},
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: process.env.NODE_ENV === "development",
  });

  const handlePaginationChange = (page) => {
    table.setPageIndex(page - 1);
  };

  console.log("page index", table.getState().pagination.pageIndex);

  return (
    <TableContainer>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup?.headers?.map((header) => (
                <TableCell
                  key={header.id}
                  colSpan={header.colSpan}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div className="flex flex-row justify-start items-center cursor-pointer">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.id !== "select" &&
                      ({
                        asc: <FaSortUp className="ml-1" />,
                        desc: <FaSortDown className="ml-1" />,
                      }[header.column.getIsSorted()] ?? (
                        <FaSort className="ml-1" />
                      ))}
                  </div>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => {
            return (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <TableCell key={cell.id}>
                      <span className="text-sm">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </span>
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <TableFooter>
        <Pagination
          totalResults={data.length}
          resultsPerPage={table.getState().pagination.pageSize}
          onChange={handlePaginationChange}
          label="Pagination"
        />
      </TableFooter>
    </TableContainer>
  );
};

function IndeterminateCheckbox({ indeterminate, className = "", ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate, rest.checked]);

  return (
    <Input
      type="checkbox"
      ref={ref}
      className={"cursor-pointer border-gray-400"}
      {...rest}
    />
  );
}

export default DataTable;
