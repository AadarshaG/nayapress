import PageTitle from "src/components/Typography/PageTitle";
import { Table } from "src/components/table";
import {
    useGetOrderList
} from "src/hooks/press/useOrderSubmit";
import { TableCell, TableRow } from "windmill-react-ui-kit";
import Tooltip from "src/components/tooltip/Tooltip";
import { IoMdEye } from "react-icons/io";
import { NavLink } from "react-router-dom";
import dayjs from "dayjs";
import { useGetCustomerList } from "src/hooks/press/useCustomerSubmit";
import SelectStatus from "../../../components/form/SelectStatus";

const DeliveredOrder = () => {
  
  const { data, isLoading, refetch } = useGetOrderList();

  const dataMap = (data, index) => {
    if(data?.order_status === 'delivered'){
      return (
        <TableRow key={index}>
          <TableCell className="text-sm ">
            <span>{index+1}</span>
          </TableCell>
          <TableCell className="text-sm ">
            <span>{data?.customer?.contact_person}</span>
          </TableCell>
          <TableCell className="text-sm ">
            <span>{data?.advanced_payment}</span>
          </TableCell>
          <TableCell className="text-sm ">
            <span>{data?.unit_pieces * data?.unit_price}</span>
          </TableCell>
          <TableCell className="text-sm ">
            <span>{dayjs(data?.delivery_date).format("YYYY-MM-d")}</span>
          </TableCell>   
          <TableCell className="text-sm ">
          <SelectStatus uuid={data?.uuid} order={data} />
          </TableCell>     
          <TableCell className="text-right flex justify-end">
            {" "}
              <div className="p-2 cursor-pointer text-gray-400 hover:text-green-600">
                <NavLink to={`/orders/${data?.uuid}`}
                className="flex justify-center text-gray-400 hover:text-green-600"
                >
                  <Tooltip
                    id="view"
                    Icon={IoMdEye}
                    title="पुरा विवरण"
                    bgColor="#059669"
                  />
                </NavLink>
              </div>
          </TableCell>
        </TableRow>
      )
    }else {
      return null;
    }
  }

  const items = [
    "क्र.स​",
    "ग्राहकको नाम",
    "अग्रीम रकम",
    "जम्मा रकम",
    "दिनु पर्ने मिति",
    "स्टाटस",
    "विवरण", 
  ];

  const itemsEngName = [
    "s.n",
    "customer_name",
    "advanced_payment",
    "total_price",
    "delivery_date",
    "status",
    "view",
  ];

  const columns = [];
  items.forEach((item, idx) => {
    columns.push({
      headerText: item,
      columnName: itemsEngName[idx].toLowerCase(),
      sortable: true,
      searchable: true,
    });
  });

  return (
    <>
      <PageTitle>दिइसकेका  अर्डर</PageTitle>
    
      <Table
        columns={columns}
        data={data}
        loaded={!isLoading}
        tableDataMap={dataMap}
      />
    </>
  );
};

export default DeliveredOrder;
