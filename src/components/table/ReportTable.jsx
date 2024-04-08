import { orderBy } from "lodash";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { NepaliDatePicker } from "nepali-datepicker-reactjs"

import {
  Button,
  Pagination,
  Table,
  TableContainer,
  TableFooter,
  TableHeader,
} from "windmill-react-ui-kit";
import { searchString } from "../../utils";
import { TBody, Th } from "./tableComponents";

function ReportTable({
  loaded,
  headerName,
  data,
  columns,
  tableDataMap,
  onAddClick,
  showDateFilter = true,
  showFooter = true,
  childrenBefore,
  childrenAfter,
}) {
   const [sortedData, setSortedData] = useState([]);
   const [searchValue] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

    // Function to filter data between selected dates
    const handleSearchClick = () => {
      let filterData = data;
      const filteredResults = filterData.filter((item) => {
        const itemDate = new Date(item.darta_miti || item.chalfal_miti );
        return (
          (!startDate || itemDate >= startDate) &&
          (!endDate || itemDate <= endDate)
        );
      });  
      setFilteredData(filteredResults);
    };

    console.log('Start Date', startDate)
    console.log('End Date', endDate)

  useEffect(() => {
    if (!data) {
      setSortedData([]);
      return;
    }

    let sortedData = data;
    if (sortDirection) {
      sortedData = orderBy(sortedData, sortColumn, sortDirection);
    }
    if (searchValue) {
      const searchableColumns = columns.filter((c) => c.searchable);
      sortedData = sortedData.filter((d) =>
        searchableColumns.some(({ columnName }) =>
          searchString(searchValue, d[columnName])
        )
      );
    }
    setSortedData(sortedData);
    // setFilteredData(sortedData);
  }, [data, sortDirection, sortColumn, currentPage, columns]);

  const handleChangePage = (p) => {
    setCurrentPage(p);
  };


  return (
    <>
      {showDateFilter && (
        <div className="flex mt-4 mb-4">
          <div className="flex gap-2">
            {childrenBefore}
            <div>
              <span className="text-sm text-gray-500"> मिति देखि</span>
               <NepaliDatePicker 
                  className="border rounded-md h-12 text-base text-gray-500 focus:outline-none block w-full bg-gray-100 dark:bg-white focus:bg-white"
                  value={startDate}
                  onChange={(value) => setStartDate(value)}
                  options={{
                    closeOnSelect: true,
                    calenderLocale: "ne", 
                    valueLocale: "ne" 
                  }} 
                />
            </div>
            <div>
              <span className="text-sm text-gray-500">मिति सम्म​</span>
              <NepaliDatePicker
                className="border rounded-md  h-12 text-base text-gray-500 focus:outline-none block w-full bg-gray-100 dark:bg-white focus:bg-white"
                value={endDate}
                onChange={(value) => setEndDate(value)}
                options={{
                  closeOnSelect: true,
                  calenderLocale: "ne", 
                  valueLocale: "ne" 
                }} 
              />
            </div>
            {childrenAfter}
          </div>
          <div className="flex items-center ml-4 mt-5">
            <Button
              type="button"
              onClick={handleSearchClick}
              className=" rounded-md h-12 w-40"
            >
              <span className="mr-3">
                <FiSearch />
              </span>
              खोज्नुहोस​
            </Button>
          </div>
        </div>
      )}
      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              {columns.map(({ headerText, columnName, sortable }) => (
                <Th
                  key={columnName}
                  headerText={headerText}
                  columnName={columnName}
                  sortDirection={
                    sortable && sortColumn === columnName ? sortDirection : ""
                  }
                  handleSort={
                    sortable
                      ? (columnName, sortDirection) => {
                          setSortColumn(columnName);
                          setSortDirection(sortDirection);
                        }
                      : undefined
                  }
                />
              ))}
            </tr>
          </TableHeader>
          <TBody loaded={loaded}>{sortedData?.map(tableDataMap)}</TBody>
        </Table>

        {showFooter && (
          <TableFooter>
            <Pagination
              totalResults={data?.length}
              resultsPerPage={10}
              onChange={handleChangePage}
              label="Table navigation"
            />
          </TableFooter>
        )}
      </TableContainer>
    </>
  );
}

export default ReportTable;
