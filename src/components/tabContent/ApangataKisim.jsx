import { useContext } from "react";
import { FiPlus } from "react-icons/fi";
import {
  Button,
  Card,
  CardBody,
  Input,
  Pagination,
  Table,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
} from "windmill-react-ui-kit";

import SelectCategory from "../../components/form/SelectCategory";
import Loading from "../../components/preloader/Loading";
import NotFound from "../../components/table/NotFound";
import { SidebarContext } from "../../context/SidebarContext";
import useAsync from "../../hooks/useAsync";
import useFilter from "../../hooks/useFilter";
import CategoryServices from "../../services/CategoryServices";
import ApangataKisimTable from "../table/ApangataKisimTable";

const ApangataKisim = () => {
  const { toggleModal } = useContext(SidebarContext);
  const { data, loading } = useAsync(CategoryServices.getAllCategory);

  const tempData = [
    {
      _id: 1,
      mainType: "दृष्टि सम्बन्धी अपांगता",
      name: "दृष्टि विहिनता",
      nameEng: "Blindness ",
      priority: "2.1",
      isType: true,
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
            className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex"
          >
            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <Input
                ref={categoryRef}
                className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
                type="search"
                name="search"
                placeholder="खोजनुहोस​"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-5 mr-1"
              ></button>
            </div>
            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <SelectCategory setCategory={setFilter} />
            </div>
            <div className="w-full md:w-56 lg:w-56 xl:w-56">
              <Button
                type="button"
                onClick={toggleModal}
                className="w-full rounded-md h-12"
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
                <TableCell>मुख्य किसिम​</TableCell>
                <TableCell className="text-center">नाम​</TableCell>
                <TableCell className="text-center">नाम​ (अंग्रेजी)</TableCell>
                <TableCell className="text-center">देखउनु क्रम​</TableCell>
                <TableCell className="text-center">प्रकार हो होइन​​</TableCell>
                <TableCell className="text-right">Actions</TableCell>
              </tr>
            </TableHeader>
            <ApangataKisimTable tempData={tempData} />
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

export default ApangataKisim;
