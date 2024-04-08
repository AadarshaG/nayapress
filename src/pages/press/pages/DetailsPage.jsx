import React, { useRef } from 'react'
import dayjs from "dayjs";
import ReactToPrint from "react-to-print";
import { FiPrinter } from "react-icons/fi";
import {
    useGetOrderById,
} from "src/hooks/press/useOrderSubmit";
import { useGetCustomerList } from "src/hooks/press/useCustomerSubmit";
import { useHistory, useParams } from "react-router-dom";
import NepaliDate from 'https://cdn.jsdelivr.net/npm/nepali-date-converter/dist/nepali-date-converter.es5.js'


function OrderDetail() {

  const pdfRef=useRef()
  const printRef = useRef();
 
  const history = useHistory();

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
     <div className="flex justify-between">
        <h1 className="mt-6 text-lg font-bold text-gray-700 dark:text-gray-300">
        अर्डर विवरण 
        </h1>
     </div>
      <div className="flex-auto h-px bg-yellow-500 mt-2 mb-6"></div>
        <div  className="grid grid-cols-1 items-center">
          <div ref={printRef}>
            <div className="grid  items-center grid-cols-2 gap-3 md:gap-5 xl:gap-6 lg:gap-6">
              <div className="flex  items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:flex xl:flex ">
                <div className="flex gap-5 items-center">
                  <div>
                    <p>ग्राहकको पुरा नाम  :</p>
                  </div>
                  <div>
                    <p> {reconstructCustomerObject?.contact_person}</p>
                  </div>
                </div>
              </div>
              <div className="flex  items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:flex xl:flex ">
                <div className="flex gap-5 items-center">
                  <div>
                    <p>अर्डर गरेको मिति ​:</p>
                  </div>
                  <div>
                    <p>
                        <span>{dayjs(new Date(orderById?.data?.createdAt)).format('YYYY MMMM DD')}</span>
                        {/* <span>{new NepaliDate(new Date(orderById?.data?.createdAt)).format('YYYY MMMM DD')}</span> */}
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="flex  items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:flex xl:flex ">
                <div className="flex gap-5 items-center">
                  <div>
                    <p>साइज/पेज ​:</p>
                  </div>
                  <div>
                    <p className="font-bold"> {orderById?.data?.size_page}</p>
                  </div>
                </div>
              </div>
              <div className="flex  items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:flex xl:flex ">
                <div className="flex gap-5 items-center">
                  <div>
                    <p>प्रती/पिस  ​:</p>
                  </div>
                  <div>
                    <p className="font-bold"> {orderById?.data?.unit_pieces}</p>
                  </div>
                </div>
              </div>
              <div className="flex  items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:flex xl:flex ">
                <div className="flex gap-5 items-center">
                  <div>
                    <p>हट लेमिनेशन   ​:</p>
                  </div>
                  <div>
                    <p> {(orderById?.data?.hot_lamination === "myat") ? "म्याट" : (orderById?.data?.hot_lamination === "loss") ? "लस" : (orderById?.data?.hot_lamination === "no") ? "छैन" : ""}</p>
                  </div>
                </div>
              </div>
              <div className="flex  items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:flex xl:flex ">
                <div className="flex gap-5 items-center">
                  <div>
                    <p>नर्मल लेमिनेशन   ​:</p>
                  </div>
                  <div>
                    <p> {(orderById?.data?.normal_lamination === "myat") ? "म्याट" : (orderById?.data?.normal_lamination === "loss") ? "लस" : (orderById?.data?.normal_lamination === "no") ? "छैन" : ""}</p>
                  </div>
                </div>
              </div>
              <div className="flex  items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:flex xl:flex ">
                <div className="flex gap-5 items-center">
                  <div>
                    <p>मेशिन ​:</p>
                  </div>
                  <div>
                    <p> {(orderById?.data?.machine_type === "20*30 Colorful") ? "२०*३० रङ्गिन" : (orderById?.data?.machine_type === "20*30 BW") ? "२०*३० BW" : (orderById?.data?.machine_type === "19*25 BW") ? "१९*२५ BW" : (orderById?.data?.machine_type === "10*15 BW") ? "१०*१५ BW" : ""}</p>
                  </div>
                </div>
              </div>
              <div className="flex  items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:flex xl:flex ">
                <div className="flex gap-5 items-center">
                  <div>
                    <p>अर्डर दिनु पर्ने मिति ​:</p>
                  </div>
                  <div>
                    <p className="font-bold"> {orderById?.data?.delivery_date.split('T')[0]}</p>
                  </div>
                </div>
              </div>
              <div className="flex  items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:flex xl:flex ">
                <div className="flex gap-5 items-center">
                  <div>
                    <p>अर्डरको प्रकार ​:</p>
                  </div>
                  <div>
                    <p className="font-bold uppercase"> {orderById?.data?.order_status}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-6"></div>
            <div className="grid  items-center grid-cols-1 gap-3 md:gap-5 xl:gap-6 lg:gap-6">
            <div className="flex  items-center  md:gap-5 xl:gap-6 lg:gap-6 md:flex xl:flex ">
                <div className="flex gap-5 items-center">
                  <div>
                    <p>कामको विवरण ​:</p>
                  </div>
                  <div>
                    <p dangerouslySetInnerHTML={{ __html: orderById?.data?.work_description}}></p>
                  </div>
                </div>
              </div>
              <div className="flex  items-center  md:gap-5 xl:gap-6 lg:gap-6 md:flex xl:flex ">
                <div className="flex gap-5 items-center">
                  <div>
                    <p>कागजको विवरण ​:</p>
                  </div>
                  <div>
                    <p>{orderById?.data?.paper_description}</p>
                  </div>
                </div>
              </div>
              <div className="flex  items-center  md:gap-5 xl:gap-6 lg:gap-6 md:flex xl:flex ">
                <div className="flex gap-5 items-center">
                  <div>
                    <p>मासिको विवरण ​:</p>
                  </div>
                  <div>
                    <p dangerouslySetInnerHTML={{ __html: orderById?.data?.ink_description}}></p>
                  </div>
                </div>
              </div>
              <div className="flex  items-center  md:gap-5 xl:gap-6 lg:gap-6 md:flex xl:flex ">
                <div className="flex gap-5 items-center">
                  <div>
                    <p>प्लेट/CTP विवरण ​:</p>
                  </div>
                  <div>
                    <p dangerouslySetInnerHTML={{ __html: orderById?.data?.plate_ctp_description}}></p>
                  </div>
                </div>
              </div>
              <div className="flex  items-center  md:gap-5 xl:gap-6 lg:gap-6 md:flex xl:flex ">
                <div className="flex gap-5 items-center">
                  <div>
                    <p>रिम/सिट ​:</p>
                  </div>
                  <div>
                    <p>{orderById?.data?.rim_sheet}</p>
                  </div>
                </div>
              </div>
              <div className="flex  items-center  md:gap-5 xl:gap-6 lg:gap-6 md:flex xl:flex ">
                <div className="flex gap-5 items-center">
                  <div>
                    <p>बाइन्डिङ्ग /नम्बरइङ्ग ​:</p>
                  </div>
                  <div>
                    <p>{orderById?.data?.binding_numbering}</p>
                  </div>
                </div>
              </div>
              <div className="flex  items-center  md:gap-5 xl:gap-6 lg:gap-6 md:flex xl:flex ">
                <div className="flex gap-5 items-center">
                  <div>
                    <p>Remarks ​:</p>
                  </div>
                  <div>
                    <p>{orderById?.data?.remarks}</p>
                    {/* <p dangerouslySetInnerHTML={{ __html: orderById?.data?.remarks}}></p> */}
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
            <div className="h-6"></div>
            <div className="grid  items-center grid-cols-2 gap-3 md:gap-5 xl:gap-6 lg:gap-6">
              <div className="flex  items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:flex xl:flex ">
                <div className="flex gap-5 items-center">
                  <div>
                    <p>प्रती मुल्य  ​:</p>
                  </div>
                  <div>
                    <p className="font-bold"> {orderById?.data?.unit_price}</p>
                  </div>
                </div>
              </div>
              <div className="flex  items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:flex xl:flex ">
                <div className="flex gap-5 items-center">
                  <div>
                    <p>जम्मा रकम  ​:</p>
                  </div>
                  <div>
                    <p className="font-bold"> Rs.{orderById?.data?.unit_price * orderById?.data?.unit_pieces }</p>
                  </div>
                </div>
              </div>
              <div className="flex  items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:flex xl:flex ">
                <div className="flex gap-5 items-center">
                  <div>
                    <p>अग्रीम रकम ​:</p>
                  </div>
                  <div>
                    <p className="font-bold"> Rs.{orderById?.data?.advanced_payment}</p>
                  </div>
                </div>
              </div>
              <div className="flex  items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:flex xl:flex ">
                <div className="flex gap-5 items-center">
                  <div>
                    <p>बाँकी आएको रकम ​:</p>
                  </div>
                  <div>
                    <p className="font-bold"> Rs.{orderById?.data?.total_payment}</p>
                  </div>
                </div>
              </div>
              <div className="flex  items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:flex xl:flex ">
                <div className="flex gap-5 items-center">
                  <div>
                    <p>बाँकी रकम ​:</p>
                  </div>
                  <div>
                    <p className="font-bold"> Rs.{(orderById?.data?.unit_pieces*orderById?.data?.unit_price)-((orderById?.data?.advanced_payment)+(orderById?.data?.total_payment)) }</p>
                  </div>
                </div>
              </div>
              <div className="flex  items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:flex xl:flex ">
                <div className="flex gap-5 items-center">
                  <div>
                    <p>तिर्नु पर्ने/नपर्ने  ​:</p>
                  </div>
                  <div>
                    <p className="font-bold uppercase"> {orderById?.data?.payment_status}</p>
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
}

export default OrderDetail;