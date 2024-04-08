import { useContext } from "react";
import { FiPlus } from "react-icons/fi";
import {
  Button,
  Card,
  CardBody,
  Pagination,
  Table,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
} from "windmill-react-ui-kit";

import Loading from "../../components/preloader/Loading";
import NotFound from "../../components/table/NotFound";
import { SidebarContext } from "../../context/SidebarContext";
import useAsync from "../../hooks/useAsync";
import useFilter from "../../hooks/useFilter";
import CategoryServices from "../../services/CategoryServices";
import { testSelectOption } from "../../utils/selectData";
import NepaliInput from "../form/NepaliInput";
import Select from "../form/Select";
import ApangataBargikaranTable from "../table/ApangataBargikaranTable";

const ApangataBargikaran = () => {
  const { toggleModal } = useContext(SidebarContext);
  const { data, loading } = useAsync(CategoryServices.getAllCategory);

  const tempData = [
    {
      _id: 1,
      name: "पुर्ण अशक्त अपांगता",
      type: "Profound Severe",
      cardColor: "रातो",
      description: "",
    },
  ];
  const {
    categoryRef,
    setFilter,
    handleChangePage,
    totalResults,
    resultsPerPage,
    handleSubmitCategory,
  } = useFilter(data);

  return (
    <>
      <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
        <CardBody>
          <form
            onSubmit={handleSubmitCategory}
            className="py-3 grid grid-cols-6 gap-4 lg:gap-6 xl:gap-6 "
          >
            <div className="col-span-3">
              <NepaliInput name="search" placeholder="खोजनुहोस​" />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-5 mr-1"
              ></button>
            </div>
            <div className="col-span-2">
              <Select
                defaultValue="यहाँ थिच्नुहोस"
                options={testSelectOption}
              />
            </div>
            <div className="col-span-1 w-full">
              <Button
                type="button"
                onClick={toggleModal}
                className=" rounded-md h-12"
              >
                <span className="mr-3">
                  <FiPlus />
                </span>
                थप्नुहोस
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>

      {loading ? (
        <Loading loading={loading} />
      ) : tempData.length !== 0 ? (
        <TableContainer className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>नाम​</TableCell>
                <TableCell className="text-center">type</TableCell>
                <TableCell className="text-center">परिचयपत्रको रंग</TableCell>
                <TableCell className="text-right">कैफियत​</TableCell>
                <TableCell className="text-right">Actions</TableCell>
              </tr>
            </TableHeader>
            <ApangataBargikaranTable tempData={tempData} />
          </Table>
          <TableFooter>
            <Pagination
              totalResults={totalResults}
              resultsPerPage={resultsPerPage}
              onChange={handleChangePage}
              label="Table navigation"
            />
          </TableFooter>
        </TableContainer>
      ) : (
        <NotFound title="Category" />
      )}
    </>
  );
};

export default ApangataBargikaran;
