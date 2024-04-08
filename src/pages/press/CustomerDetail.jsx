import { Card, CardBody} from "windmill-react-ui-kit"
import PageTitle from "src/components/Typography/PageTitle";
import DeleteModal from "src/components/modal/DeleteModal";
import { Table } from "src/components/table";
import EditDeleteButton from "src/components/table/EditDeleteButton";
import LabelArea from "src/components/form/LabelArea";
import {
  useGetCustomerById
} from "src/hooks/press/useCustomerSubmit";
import {
    useDeleteOrder,
    useGetCustomerOrderList,
    useEditOrder
} from "src/hooks/press/useOrderSubmit";
import useToggleModal from "src/hooks/useToggleModal";
import { TableCell, TableRow } from "windmill-react-ui-kit";

import Tooltip from "src/components/tooltip/Tooltip";
import { FiZoomIn } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import {useParams, useHistory } from "react-router-dom";
import SelectPaidStatus from '../../components/form/SelectPaidStatus'
import { IoMdEye } from "react-icons/io";
import { FaFile } from "react-icons/fa";

import NepaliDate from 'https://cdn.jsdelivr.net/npm/nepali-date-converter/dist/nepali-date-converter.es5.js'
import { useEffect, useState } from "react";


const Order = () => {

  const { 
    serviceId,
    handleModalOpen,
    handleModalClose,
    handleDeleteModalOpen,
    handleDeleteModalClose, 
  } =  useToggleModal();

  const [totaltransaction, setTotalTransaction] = useState('')
  const [remainingPayment, setRemainingPayment] = useState('')
  const [baddebt, setBadDebt] = useState('')

    const { uuid } = useParams();

    const history = useHistory();

    const isView = !!uuid;

    const { data: customerById } = useGetCustomerById(
      uuid, {
        enabled: isView,
        onSettled: () => {},
    });


  const { data, isLoading, refetch } = useGetCustomerOrderList(uuid);

  const { mutate: deleteOrder, isLoading: deleteLoading } = useDeleteOrder();

  const handleAddData = () => {
    history.push(`/customer-order/add?id=${uuid}`);
  };

  useEffect(()=>{
    
    let sum = 0;
    for(let index = 0; index < data?.data?.length; index++){
      sum = sum + ((data?.data[index].order_status !== 'canceled') ? (data?.data[index].unit_pieces)* (data?.data[index].unit_price) : 0 )
      setTotalTransaction(sum);
  }
  },[data])

  useEffect(()=>{
    let remaining = 0;
    for(let index = 0; index < data?.data?.length; index++){
      remaining = remaining + ((data?.data[index].payment_status === 'due') ? (data?.data[index].unit_pieces*data?.data[index].unit_price)-(data?.data[index].advanced_payment)-(data?.data[index].total_payment) : 0);
      // remaining = remaining + (((data?.data[index].order_status !=='canceled') || (data?.data[index].payment_status === 'paid')) ? 0 : (data?.data[index].unit_pieces)* (data?.data[index].unit_price)-((data?.data[index].advanced_payment)+(data?.data[index].total_payment)));
      setRemainingPayment(remaining);
  }
  },[data])
  useEffect(()=>{
    let debt = 0;
    for(let index = 0; index < data?.data?.length; index++){
      debt = debt + ((data?.data[index].payment_status === 'bad-debt') ? (data?.data[index].unit_pieces*data?.data[index].unit_price)-(data?.data[index].advanced_payment)-(data?.data[index].total_payment) : 0);
      setBadDebt(debt);
  }
  },[data])

  const dataMap = (data, index) => (
    <TableRow key={index}>
      <TableCell className="text-sm ">
        <span>{index+1}</span>
      </TableCell>
      <TableCell className="text-sm ">
        <span>{(data?.work_description).substring(0,20)}</span>
      </TableCell>
      <TableCell className="text-sm ">
        <span>{(data?.unit_pieces)*(data?.unit_price)}</span>
      </TableCell>
      <TableCell className="text-sm ">
        <span>{data?.advanced_payment}</span>
      </TableCell>
      <TableCell className="text-sm ">
        <span>{(data?.payment_status === 'due') ? (data?.total_payment) : (data?.payment_status === 'bad-debt') ? (data?.total_payment) : (data?.payment_status === 'paid') ? (data?.unit_pieces)*(data?.unit_price)-((data?.advanced_payment)+(data?.total_payment)) : 0 }</span>
      </TableCell>
      <TableCell className="text-sm ">
        <span>{(data?.payment_status === 'paid') ? 0 : (data?.unit_pieces)*(data?.unit_price)-((data?.advanced_payment)+(data?.total_payment))}</span>
      </TableCell>
      
      <TableCell className="text-right flex justify-start">
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
      <TableCell className="text-sm ">
          {
          <span>{new NepaliDate(data?.delivery_date).format('YYYY MMMM DD')}</span>
          }
      </TableCell>
      <TableCell className="text-sm ">
        <span>{((((data?.unit_pieces * data?.unit_price)-((data?.advanced_payment)+(data?.total_payment)) )=== 0) || data?.payment_status === "paid") ? "Paid" : "Due"}</span>
      </TableCell>
      <TableCell className="text-sm ">
      <span>{((data?.unit_pieces * data?.unit_price)-(data?.advanced_payment)-(data?.total_payment) === 0) ?
       "Paid" : (data?.payment_status === "bad-debt") ? "Bad Debt"
       : 
       <SelectPaidStatus uuid={data?.uuid} order={data} />
       }
       </span>
        
      </TableCell>
      <TableCell className="text-sm ">
        <span>{data?.order_status}</span>
      </TableCell>   
      <TableCell className="text-right flex justify-end">
          <div className="p-2 cursor-pointer text-gray-400 hover:text-green-600">
            <NavLink to={`/invoice/${data?.uuid}`}
             className="flex justify-center text-gray-400 hover:text-green-600"
            >
              <Tooltip
                id="view"
                Icon={FaFile}
                title="इनभ्वाइस"
                bgColor="#059669"
              />
            </NavLink>
          </div>
      </TableCell> 
    
      <TableCell className="text-center">
        <EditDeleteButton
          id={data?.uuid}
          handleUpdate={() =>
            history.push(`/customer-order/edit/${data.uuid}?id=${uuid}`)
          }
          handleDeleteModelOpen={() => handleDeleteModalOpen(data?.uuid)}
        />
      </TableCell>
      
    </TableRow>
  );

  const items = [
    "क्र.स​",
    "कामको विवरण ",
    "जम्मा रकम",
    "अग्रीम रकम",
    "बाँकी आएको रकम",
    "बाँकी रकम",
    "विवरण",
    "दिने मिति",
    "भुक्तानी अवस्था ",
    "तिर्नु पर्ने/नपर्ने ",
    "स्टाटस ",
    "इनभ्वाइस ",
  ];

  const itemsEngName = [
    "s.n",
    "work_desc",
    "total_price",
    "advanced_payment",
    "total_payment",
    "remaining",
    "view",
    "delivery",
    "pay_status",
    "status",
    "order_status",
    "invoice",
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
  columns.push({ headerText: "कार्य ", columnName: "actions" });

  const handleDelete = () => {
    deleteOrder(serviceId, {
      onSuccess: () => {
        handleDeleteModalClose();
        refetch();
      },
    });
  };
  
  return (
    <>
        <Card className="min-w-0 mt-10 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
            <CardBody>
                <div className="grid md:grid-cols-2 items-center">
                  <div className="grid grid-cols-6 font-bold gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                      <LabelArea label="सम्पर्क गर्नेको नाम  :" />
                      <div className="col-span-8 text-right sm:col-span-4">
                      <p>{customerById?.data?.contact_person}</p>
                      </div>
                  </div>
                  <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                      <LabelArea label="ईमेल :" />
                      <div className="col-span-9 text-right sm:col-span-4">
                      <p>{customerById?.data?.email}</p>
                      </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <div className="grid grid-cols-6 font-bold gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                      <LabelArea label="सम्पर्क नं :" />
                      <div className="col-span-8 text-right sm:col-span-4">
                      <p>{customerById?.data?.phone_number}</p>
                      </div>
                  </div>
                  <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                      <LabelArea label="ठेगाना :" />
                      <div className="col-span-8 text-right sm:col-span-4">
                      <p>{customerById?.data?.address}</p>
                      </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                      <LabelArea label="पान नं :" />
                      <div className="col-span-8 text-right sm:col-span-4">
                      <p>{customerById?.data?.pan}</p>
                      </div>
                  </div>
                  <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                      <LabelArea label="सस्थाको नाम :" />
                      <div className="col-span-9 text-right sm:col-span-4">
                      <p>{customerById?.data?.company_name}</p>
                      </div>
                  </div>
                  <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                      <LabelArea label="Total कारोवार रकम  :" />
                      <div className="col-span-9 text-right sm:col-span-4">
                      <p className="font-semibold">Rs.{totaltransaction}</p>
                      </div>
                  </div>
                  <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                      <LabelArea label="भुक्तानी बाँकी रकम  :" />
                      <div className="col-span-9 text-right sm:col-span-4">
                      <p className="font-semibold">Rs.{remainingPayment}</p>
                      </div>
                  </div>
                  <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                      <LabelArea label="Total Bad Debt  :" />
                      <div className="col-span-9 text-right sm:col-span-4">
                      <p className="font-semibold">Rs.{baddebt}</p>
                      </div>
                  </div>
                </div>
            </CardBody>
        </Card>
      <PageTitle>अर्डरहरु</PageTitle>
      <DeleteModal handleDelete={handleDelete} />
      <Table
        columns={columns}
        data={data}
        onAddClick={handleAddData}
        loaded={!isLoading}
        tableDataMap={dataMap}
      />
    </>
  );
};

export default Order;
