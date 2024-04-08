import {
  Pagination,
  Table,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
  WindmillContext,
} from "windmill-react-ui-kit";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";
import { useContext, useEffect, useState } from "react";

import PageTitle from "../components/Typography/PageTitle";
import { FiCheck, FiRefreshCw, FiShoppingCart, FiTruck } from "react-icons/fi";
import { CiWarning } from "react-icons/ci";
import { ImCreditCard, ImStack } from "react-icons/im";
import { FcCancel } from "react-icons/fc";
import CardItem from "../components/dashboard/CardItem"
import CardItemTwo from "../components/dashboard/CardItemTwo"
import OrderTable from "../components/dashboard/OrderTable";
import PriorityOrder from "../components/order/PriorityTable";
import NotFound from "../components/table/NotFound";
import { FaUsers, FaDownload} from "react-icons/fa";

//internal import
import { SidebarContext } from "../context/SidebarContext";
import {useGetOrderList} from "src/hooks/press/useOrderSubmit";
import { NavLink } from "react-router-dom";

import NepaliDate from 'https://cdn.jsdelivr.net/npm/nepali-date-converter/dist/nepali-date-converter.es5.js'


const Dashboard = () => {
  // priority data
  const [todayData, setTodayData] = useState([])
  const [priorityData, setPriorityData] = useState([])
  // todays sales
  const [todayOrder, setTodayOrder] = useState([])
  const [todaySaleAmount, setTodaySaleAmount] = useState(0)
  // weekly sales
  const [salesDay, setSalesDay] = useState()
  const [weeklyOrder, setWeeklyOrder] = useState([])
  const [weeklySale, setWeeklySale] = useState(0)
  // monthly sales
  const [monthlyDay, setMonthlyDay] = useState()
  const [monthlyOrder, setMonthlyOrder] = useState([])
  const [monthlySale, setMonthlySale] = useState(0)



  dayjs.extend(isBetween);
  dayjs.extend(isToday);
  dayjs.extend(isYesterday);

  const { currentPage, handleChangePage, lang } = useContext(SidebarContext);

   const {data: allOrders, isLoading, refetch} = useGetOrderList();

  const [threeDaysFromToday, setThreeDaysFromToday] = useState('');
  const fromToday = new NepaliDate().format('YYYY-MM-DD');

  // display todays order
  useEffect(() => {
    // today orders show
    const todayOrder = allOrders?.data?.filter((order) =>
      dayjs(order?.createdAt).isToday()
    );
    setTodayData(todayOrder)
   },[]);

  // display data in prathmikta order
  useEffect(()=>{
    const today = new Date();
    const threeDaysLater = new Date(today);

    threeDaysLater.setDate(today.getDate() + 3);
    setThreeDaysFromToday(new NepaliDate(threeDaysLater).format('YYYY-MM-DD'));
  },[]);

   useEffect(()=>{
    const priority = allOrders?.data?.filter((order) =>(
      ( order?.delivery_date.split('T')[0] === fromToday ) ?
        order : ""
    )
    );
    setPriorityData(priority)
   },[]);

  // display data for todays sales amount 
   useEffect(()=>{
    const todayAmount = allOrders?.data?.filter((order)=>
      dayjs(order?.createdAt).isToday()
    )
      setTodayOrder(todayAmount);
   },[]);
   
  useEffect(()=>{
    if (todayOrder && todayOrder?.length > 0) {
      const totalAmount = todayOrder.reduce((acc, order) =>
          acc + (order?.unit_pieces || 0) * (order?.unit_price || 0), 0);
      setTodaySaleAmount(totalAmount);
    } else {
        setTodaySaleAmount(0); // Set to 0 if there are no orders for today
    }
  },[todayOrder]);

 // Function to convert and download data in CSV format
  const exportToCSV = () => {
    if (todayData?.length === 0) {
      console.error('No data to export.');
      return;
    }

    // Convert data to CSV format
    const csvContent = [
      ["Customer Name","Work Description", "Unit Pieces", 
      "Unit Price", "Total Amount", 
      "Advance Payment","Remarks"],
      ...todayData?.map(({ customer  , work_description, unit_pieces, unit_price, amount, advanced_payment, remarks }) => ([
        '\n'+ customer?.contact_person ,
        work_description ,
        unit_pieces,
        unit_price ,
        unit_pieces*unit_price ,
        advanced_payment,
        remarks
      ]))
    ];
    // Create and download CSV file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "today's-report.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // display weekly sales data
  useEffect(()=>{
    const endDay = new Date();
    const startDay = new Date(endDay);

    startDay.setDate(endDay.getDate() - 6);
    setSalesDay(startDay);

    const weeklyOrders = allOrders?.data?.filter(order =>
      dayjs(order?.createdAt).isBetween(salesDay, endDay, null, '[]')
    );
    setWeeklyOrder(weeklyOrders);
    return () => {
      // Cleanup code here if necessary
    };
  },[]);

  useEffect(()=>{
    if (weeklyOrder && weeklyOrder?.length > 0) {
      const totalAmount = weeklyOrder.reduce((acc, order) =>
          acc + (order?.unit_pieces || 0) * (order?.unit_price || 0), 0);
      setWeeklySale(totalAmount);
  } else {
      setWeeklySale(0); // Set to 0 if there are no orders for the week
  }
  },[weeklyOrder]);  

  // display monthly sales data
  useEffect(()=>{
    const endDay = new Date();
    const startDay = new Date(endDay);

    startDay.setDate(endDay.getDate() - 29);
    setMonthlyDay(startDay);

    const monthlyOrders = allOrders?.data?.filter(order =>
      dayjs(order?.createdAt).isBetween(salesDay, endDay, null, '[]')
    );
    setMonthlyOrder(monthlyOrders);
  },[]);

  useEffect(()=>{
    if (monthlyOrder && monthlyOrder?.length > 0) {
      const totalAmount = monthlyOrder.reduce((acc, order) =>
          acc + (order?.unit_pieces || 0) * (order?.unit_price || 0), 0);
      setMonthlySale(totalAmount);
  } else {
      setMonthlySale(0); // Set to 0 if there are no orders for the week
  }
  },[monthlyOrder]);


  return (
    <>
      <PageTitle>Dashboard Overview</PageTitle>
      <div className="grid gap-4 mb-8 md:grid-cols-4 xl:grid-cols-4">
        <CardItemTwo
          title="Today's Sales Amount"
          title2="Today's Sales Amount"
          Icon={ImStack}
          price={todaySaleAmount}
          className="text-white dark:text-green-100 bg-teal-500"
        />

        <CardItemTwo
          title="Weekly Sales"
          title2="Weekly Sales"
          Icon={ImStack}
          price={weeklySale}
          className="text-white dark:text-orange-100 bg-orange-400"
        />

        <CardItemTwo
          title="Monthly Sales"
          title2="Monthly Sales"
          Icon={FiShoppingCart}
          price={monthlySale}
          className="text-white dark:text-green-100 bg-blue-500"
          
        />

        <CardItemTwo
          handleChange={exportToCSV}
          title="Today's Report"
          title2="Today's Report"
          Icon={FaDownload}
          className="text-white dark:text-green-100 bg-green-500"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-4 xl:grid-cols-4">
        <NavLink to="/all/orders">
          <CardItem
            title="सम्पूर्ण अर्डरहरु"
            Icon={FiShoppingCart}
            quantity={allOrders?.data?.length}
            className="text-orange-600 dark:text-orange-100 bg-orange-100 dark:bg-orange-500"
          />
        </NavLink>
        <NavLink to="/warning/orders">
          <CardItem
            title="प्राथमिकताका  अर्डरहरु"
            Icon={CiWarning}
            quantity={ ""}
            className="text-green-600 dark:text-green-100 bg-green-100 dark:bg-green-500"
          />
        </NavLink>
        <NavLink to="/order/new">
          <CardItem
            title="नयाँ अर्डरहरु"
            Icon={FiRefreshCw}
            quantity={""}
            className="text-blue-600 dark:text-blue-100 bg-blue-100 dark:bg-blue-500"
          />
        </NavLink>
        <NavLink to="/order/processing">
          <CardItem
            title="बन्दै गरेका अर्डरहरु"
            Icon={FiRefreshCw}
            quantity={""}
            className="text-teal-600 dark:text-teal-100 bg-teal-100 dark:bg-teal-500"
          />
        </NavLink>
        <NavLink to="/order/ready">
          <CardItem
            title="तयार भयका अर्डरहरु"
            Icon={FiCheck}
            quantity={""}
            className="text-green-600 dark:text-green-100 bg-green-100 dark:bg-green-500"
          />
        </NavLink>
        <NavLink to="/order/delivered">
          <CardItem
            title="दिइसकेका  अर्डरहरु"
            Icon={FiTruck}
            quantity={""}
            className="text-green-600 dark:text-green-100 bg-green-100 dark:bg-green-500"
          />
        </NavLink>
        <NavLink to="/order/cancelled">
          <CardItem
            title="रद्ध भयका अर्डरहरु"
            Icon={FcCancel}
            quantity={""}
            className="text-green-600 dark:text-green-100 bg-green-100 dark:bg-green-500"
          />
        </NavLink>
        <NavLink to="/show-customers">
          <CardItem
            title="सम्पूर्ण ग्राहकहरु"
            Icon={FaUsers}
            quantity={""}
            className="text-green-600 dark:text-green-100 bg-green-100 dark:bg-green-500"
          />
        </NavLink>
      </div> 

      <PageTitle>आजको अर्डरहरु </PageTitle>
      { 
      todayData &&
      todayData?.length !== 0 ? (
        <TableContainer className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>क्र.स</TableCell>
                <TableCell>ग्राहकको नाम</TableCell>
                {/* <TableCell>भुक्तानिको अवस्था </TableCell> */}
                <TableCell> अर्डरको अवस्था </TableCell>
                <TableCell> जम्मा रकम </TableCell>
                <TableCell>दिनु पर्ने मिति</TableCell>
                <TableCell>विवरण</TableCell>
              </tr>
            </TableHeader>

            <OrderTable
              orders={todayData}
            />
          </Table>
          <TableFooter>
            <Pagination
              totalResults={todayData?.length}
              resultsPerPage={10}
              onChange={handleChangePage}
              label="Table navigation"
            />
          </TableFooter>
        </TableContainer>
      ) : (
        <NotFound title="Sorry, There are no orders right now." />
      )}

    <PageTitle>आज दिनुपर्ने अर्डरहरु </PageTitle>
    { 
      priorityData &&
      priorityData?.length !== 0 ? (
        <TableContainer className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>क्र.स</TableCell>
                <TableCell>ग्राहकको नाम</TableCell>
                <TableCell> अर्डरको अवस्था </TableCell>
                <TableCell> बाँकी रकम </TableCell>
                <TableCell> स्टाटस </TableCell>
                <TableCell>विवरण</TableCell>
              </tr>
            </TableHeader>

            <PriorityOrder
              orders={priorityData}
            />
          </Table>
          <TableFooter>
            <Pagination
              totalResults={priorityData?.length}
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
  );
};

export default Dashboard;
