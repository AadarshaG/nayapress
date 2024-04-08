import dayjs from "dayjs";
import { useContext, useRef } from "react";
import { FiPrinter } from "react-icons/fi";
import { useParams } from "react-router";
import ReactToPrint from "react-to-print";
import {
  Table,
  TableRow,
  TableCell,
  TableContainer,
  TableHeader,
  WindmillContext,
} from "windmill-react-ui-kit";

import logoDark from "../../../assets/img/logo/Quality.png";
import logoLight from "../../../assets/img/logo/Quality.png";
import PageTitle from "../../../components/Typography/PageTitle";
import Invoice from "../../../components/invoice/Invoice";
import {
    useGetOrderById,
} from "src/hooks/press/useOrderSubmit";
import { useGetCustomerList } from "src/hooks/press/useCustomerSubmit";

import NepaliDate from 'https://cdn.jsdelivr.net/npm/nepali-date-converter/dist/nepali-date-converter.es5.js'


const OrderInvoice = () => {
  const { mode } = useContext(WindmillContext);
  const printRef = useRef();

  const { uuid } = useParams();

  const isView = !!uuid;

  const { data: orderById, isSuccess } = useGetOrderById(
    uuid, {
      enabled: isView,
      onSettled: () => {},
    });

  const { data: customerList } = useGetCustomerList();
  const reconstructCustomerObject = customerList?.data?.find(
    (x) => x?.uuid === orderById?.data?.customer_uuid
  );

  return (
    <>
      <PageTitle>Invoice</PageTitle>

      <div
        ref={printRef}
        className="bg-white dark:bg-gray-800 mb-4 p-6 lg:p-8 rounded-xl shadow-sm overflow-hidden"
      >
        <div className="">
        <div className="flex lg:flex-row md:flex-row flex-col lg:items-center justify-between pb-4 border-b border-gray-50 dark:border-gray-700 dark:text-gray-300">
            <div className="lg:text-right text-left">
                <h2 className="lg:flex lg:justify-end text-lg font-serif font-semibold mt-4 lg:mt-0 lg:ml-0 md:mt-0">
                    {mode === "dark" ? (
                    <img src={logoLight} alt="dashtar" width="110" />
                    ) : (
                    <img src={logoDark} alt="dashtar" width="110" />
                    )}
                </h2>
            </div>
            <h1 className="font-bold font-serif text-xl uppercase">
            Order Invoice
            </h1>
            <div className="lg:text-right text-left">
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                   PAN: 9876543456 <br />
                    Bharatpur-10, Chitwan
                    <br /> 9855058048, 056-594201
                </p>
            </div>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col justify-between pt-4">            
            <div className="flex flex-col text-left">
                <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                    Invoice To.
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 block">
                   Name: {reconstructCustomerObject?.company_name}
                    <br />
                   Address: {reconstructCustomerObject?.address.substring(0, 25)}
                    <br />
                   Phone No: {reconstructCustomerObject?.phone_number}
                </span>
            </div>
            <div className="mb-3 md:mb-0 lg:mb-0 flex flex-col">
                <span className="font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                    Ordered Date
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 block">
                    <span>{dayjs(orderById?.data?.createdAt).format("MMMM D, YYYY")}</span>
                    {/* <span>{new NepaliDate(new Date(orderById?.data?.createdAt)).format('YYYY MMMM DD')}</span> */}
                </span>
            </div>
        </div>
        </div>

        <div>
            <TableContainer className="my-8">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell> S.N.</TableCell>
                    <TableCell> Work Description</TableCell>
                    <TableCell className="text-center">Units</TableCell>
                    <TableCell className="text-center">Unit Price</TableCell>
                    <TableCell className="text-center">Amount</TableCell>
                  </TableRow>
                </TableHeader>
                <Invoice data={orderById?.data} />
              </Table>
            </TableContainer>
        </div>
        
        <div className="mb-5 border rounded-xl border-gray-100 p-8 py-6 bg-gray-50 dark:bg-gray-900 dark:border-gray-800">
            <div className="flex flex-col lg:flex-row md:flex-row flex-col justify-start gap-3">
                <p className="font-semibold">Remarks:</p>
                 <p>{orderById?.data?.remarks}</p>
            </div>
        </div>
        {/* <div className="border rounded-xl border-gray-100 p-8 py-6 bg-gray-50 dark:bg-gray-900 dark:border-gray-800">
        <div className="flex lg:flex-row md:flex-row flex-col justify-between">
            <div className="mb-3 md:mb-0 lg:mb-0  flex flex-col sm:flex-wrap">
            <span className="mb-1 font-serif text-sm text-gray-600 dark:text-gray-500 block">
                Payment Method
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 font-serif block">
                Cash
            </span>
            </div>
            <div className="mb-3 md:mb-0 lg:mb-0  flex flex-col sm:flex-wrap">
            <span className="mb-1 font-serif text-sm text-gray-600 dark:text-gray-500 block">
                Advanced Payment
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 font-serif block">
                Rs.{orderById?.data?.advanced_payment}
            </span>
            </div>
            <div className="mb-3 md:mb-0 lg:mb-0  flex flex-col sm:flex-wrap">
            <span className="mb-1 font-serif text-sm text-gray-600 dark:text-gray-500 block">
                Due Amount
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 font-serif block">
                Rs.{((orderById?.data?.unit_pieces)*(orderById?.data?.unit_price))-(orderById?.data?.advanced_payment)}
            </span>
            </div>
            <div className="flex flex-col sm:flex-wrap">
            <span className="mb-1 font-serif text-sm text-gray-600 dark:text-gray-500 block">
                Total Amount
            </span>
            <span className="text-sm font-serif text-gray-500 dark:text-green-500 block">
            Rs.{(orderById?.data?.unit_pieces)*(orderById?.data?.unit_price)}
            </span>
            </div>
        </div>
        </div> */}

        <div className="border rounded-xl border-gray-100 p-8 mt-6 bg-gray-50 dark:bg-gray-900 dark:border-gray-800">
        <div className="flex lg:flex-row md:flex-row flex-col justify-between">
            <div className="mb-3 md:mb-0 lg:mb-0  flex flex-col sm:flex-wrap">
            <span className=" mt-20 text-sm text-gray-500 dark:text-gray-400 font-semibold font-serif block">
                ..................................................
            </span>
            <span className="mb-5 font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                Authorized Signature/Stamp
            </span>
            <span className="mb-5 font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                 Name: 
            </span>
            <span className="mb-2 font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                Designation: 
            </span>
            </div>
            <div className="mb-3 md:mb-0 lg:mb-0  flex flex-col sm:flex-wrap">
                <span className="mt-20 text-sm text-gray-500 dark:text-gray-400 font-semibold font-serif block">
                    ..................................................
                </span>
                <span className="mb-2 font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block">
                    Received By
                </span>
            </div>
        
        </div>
        </div>
    
      </div>
     
    <div className="mb-4 mt-3 flex justify-end">
        <ReactToPrint
        trigger={() => (
            <button className="flex items-center text-sm leading-5 transition-colors duration-150 font-medium focus:outline-none px-5 py-2 rounded-md text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 w-auto">
            Print Invoice{" "}
            <span className="ml-2">
                <FiPrinter />
            </span>
            </button>
        )}
        content={() => printRef.current}
        documentTitle="Invoice"
        />
    </div>

    </>
  );
};

export default OrderInvoice;
