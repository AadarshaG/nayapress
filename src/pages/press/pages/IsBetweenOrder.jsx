import PageTitle from "src/components/Typography/PageTitle";
import { Table } from "src/components/table";
import {
    useGetOrderList
} from "src/hooks/press/useOrderSubmit";
import { TableCell, TableRow } from "windmill-react-ui-kit";
import Tooltip from "src/components/tooltip/Tooltip";
import { IoMdEye } from "react-icons/io";
import { NavLink } from "react-router-dom";
import SelectStatus from "../../../components/form/SelectStatus";
import { useEffect, useState } from "react";

import NepaliDate from 'https://cdn.jsdelivr.net/npm/nepali-date-converter/dist/nepali-date-converter.es5.js'

const IsBetweenOrder = () => {

  const [threeDaysFromToday, setThreeDaysFromToday] = useState('');
  
  const { data:orders, isLoading, refetch } = useGetOrderList();

  const fromToday = new NepaliDate().format('YYYY-MM-DD');

  useEffect(()=>{
    const today = new Date();
    const threeDaysLater = new Date(today);

    threeDaysLater.setDate(today.getDate() + 3);
    setThreeDaysFromToday(new NepaliDate(threeDaysLater).format('YYYY-MM-DD'));
  },[]);

  
  const dataMap = (data, index) => {
    let deliveryDate = data?.delivery_date.split('T')[0]
    if( deliveryDate <= threeDaysFromToday || deliveryDate < fromToday ){
      return <TableRow key={index}>
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
        <span>{data?.delivery_date.split('T')[0]}</span>      
        </TableCell>
        <TableCell className="text-sm ">
          {/* <span>{data?.order_status}</span> */}
          <SelectStatus uuid={data?.uuid} order={data} />
        </TableCell>       
        <TableCell className="text-right flex justify-start">
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
     }
  }
  

  const items = [
    "अर्डर नं",
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
      columnName: itemsEngName[idx],
      sortable: true,
      searchable: true,
    });
  });

  return (
    <>
      <PageTitle>प्राथमिकताका  अर्डरहरु</PageTitle>
    
      <Table
        columns={columns}
        data={orders}
        loaded={!isLoading}
        tableDataMap={dataMap}
      />
    </>
  );
};

export default IsBetweenOrder;
