import { useContext } from "react";
import { FiPlus } from "react-icons/fi";
import {
  Button,
  Card,
  CardBody,
  Input,
  Pagination,
  Select,
  Table,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
} from "windmill-react-ui-kit";

import PageTitle from "../components/Typography/PageTitle";
import MainDrawer from "../components/drawer/MainDrawer";
import StaffDrawer from "../components/drawer/StaffDrawer";
import Loading from "../components/preloader/Loading";
import StaffTable from "../components/staff/StaffTable";
import NotFound from "../components/table/NotFound";
import { AdminContext } from "../context/AdminContext";
import { SidebarContext } from "../context/SidebarContext";
import useAsync from "../hooks/useAsync";
import useFilter from "../hooks/useFilter";
import AdminServices from "../services/AdminServices";

const Staff = () => {
  const { state } = useContext(AdminContext);
  const { adminInfo } = state;
  const { toggleDrawer } = useContext(SidebarContext);

  const { data, loading } = useAsync(() =>
    AdminServices.getAllStaff({ email: adminInfo.email })
  );

  const {
    userRef,
    setRole,
    handleChangePage,
    totalResults,
    resultsPerPage,
    dataTable,
    serviceData,
    handleSubmitUser,
  } = useFilter(data);

  return (
    <>
      <PageTitle>All Staff</PageTitle>
      <MainDrawer>
        <StaffDrawer />
      </MainDrawer>

      <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
        <CardBody>
          <form
            onSubmit={handleSubmitUser}
            className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex"
          >
            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <Input
                ref={userRef}
                className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
                type="search"
                name="search"
                placeholder="Search by name/email/phone"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-5 mr-1"
              ></button>
            </div>
            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <Select
                onChange={(e) => setRole(e.target.value)}
                className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
              >
                <option value="All" defaultValue hidden>
                  Staff Role
                </option>
                <option value="Admin">Admin</option>
                <option value="CEO">CEO</option>
                <option value="Manager">Manager</option>
                <option value="Accountant">Accountant</option>
                <option value="Driver"> Driver </option>
                <option value="Security Guard">Security Guard</option>
                <option value="Deliver Person">Delivery Person</option>
              </Select>
            </div>

            <div className="w-full md:w-56 lg:w-56 xl:w-56">
              <Button onClick={toggleDrawer} className="w-full rounded-md h-12">
                <span className="mr-3">
                  <FiPlus />
                </span>
                Add Staff
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>

      {loading ? (
        <Loading loading={loading} />
      ) : serviceData.length !== 0 ? (
        <TableContainer className="mb-8 rounded-b-lg">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Joining Date</TableCell>
                <TableCell>Role</TableCell>

                <TableCell className="text-right">Actions</TableCell>
              </tr>
            </TableHeader>
            <StaffTable staffs={dataTable} />
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
        <NotFound title="Staff" />
      )}
    </>
  );
};

export default Staff;
