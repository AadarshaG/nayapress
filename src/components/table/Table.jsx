import { orderBy } from "lodash";
import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import {
  Button,
  Card,
  CardBody,
  Pagination,
  Table,
  TableContainer,
  TableFooter,
  TableHeader,
} from "windmill-react-ui-kit";
import { searchString } from "../../utils";
import NepaliInput from "../form/NepaliInput";
import { TBody, Th } from "./tableComponents";
import EnglishInput from "../form/EnglishInput";

function MainTable({
  loaded,
  headerName,
  data,
  columns,
  tableDataMap,
  onAddClick,
  showSearch = true,
  showFooter = true,
}) {
  const [sortedData, setSortedData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!data?.data) {
      setSortedData([]);
      return;
    }

    let sortedDataTemp = data?.data;
    if (sortDirection) {
      sortedDataTemp = orderBy(sortedDataTemp, sortColumn, sortDirection);
    }
    if (searchValue) {
      const searchableColumns = columns.filter((c) => c.searchable);
      sortedDataTemp = sortedDataTemp.filter((d) =>
        searchableColumns.some(({ columnName }) =>
          searchString(searchValue, d[columnName])
        )
      );  
    }
    setSortedData(sortedDataTemp);
  }, [data?.data, sortDirection, sortColumn, searchValue, currentPage, columns]);

  const handleChangePage = (p) => {
    setCurrentPage(p);
  };

  return (
    <>
      {showSearch && (
        <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
          <CardBody className="flex">
            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow ">
              <EnglishInput
                showError={false}
                type="text"
                name="searchValue"
                placeholder="खोजनुहोस​"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
              />
            </div>
            <div className="flex flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow justify-end">
              <Button
                type="button"
                onClick={() => onAddClick()}
                className=" rounded-md h-12 w-40"
              >
                <span className="mr-3">
                  <FiPlus />
                </span>
                थप्नुहोस्
              </Button>
            </div>
          </CardBody>
        </Card>
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
        <TBody loaded={loaded}>{sortedData && sortedData?.map(tableDataMap)}</TBody>
        </Table>

        {showFooter && (
          <TableFooter>
            <Pagination
              totalResults={data?.data?.length}
              resultsPerPage={10}
              onChange={handleChangePage}
              label="Table navigation"
              currentPage={currentPage}
            />
          </TableFooter>
        )}
      </TableContainer>
    </>
  );
}

export default MainTable;