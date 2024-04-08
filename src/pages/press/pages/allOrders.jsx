import PageTitle from "src/components/Typography/PageTitle";
import { useContext } from "react";
import {
  Pagination,
  Table,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
} from "windmill-react-ui-kit";
import {
    useGetOrderList
} from "src/hooks/press/useOrderSubmit";
import NotFound from "../../../components/table/NotFound";
import AllOrder from "src/components/order/AllOrders"
import { SidebarContext } from "../../../context/SidebarContext";

const TotalOrder = () => {

  const { data, isLoading, refetch } = useGetOrderList();

  const { currentPage, handleChangePage, lang } = useContext(SidebarContext);

  return(
    <>
    <PageTitle>सम्पूर्ण अर्डरहरु</PageTitle>
    { 
      data &&
      data?.data?.length !== 0 ? (
        <TableContainer className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>क्र.स</TableCell>
                <TableCell>ग्राहकको नाम</TableCell>
                <TableCell> अग्रीम रकम </TableCell>
                <TableCell> बाँकी रकम </TableCell>
                <TableCell> जम्मा रकम </TableCell>
                <TableCell> दिनु पर्ने मिति </TableCell>
                <TableCell> स्टाटस </TableCell>
                <TableCell>विवरण</TableCell>
              </tr>
            </TableHeader>

            <AllOrder
              orders={data?.data}
            />
          </Table>
          <TableFooter>
            <Pagination
              totalResults={data?.data?.length}
              resultsPerPage={10}
              onChange={handleChangePage}
              label="Table navigation"
            />
          </TableFooter>
        </TableContainer>
      ) : (
        <NotFound title="Sorry, There are no orders right now." />
      )}
    </>
  )
}

export default TotalOrder;
