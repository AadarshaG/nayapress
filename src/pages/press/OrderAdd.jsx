import { useHistory, useParams, useLocation } from "react-router-dom";
import EnglishInput from "src/components/form/EnglishInput";
import LabelArea from "src/components/form/LabelArea";
import TextArea from "src/components/form/TextArea";

import { Formik } from "formik";
import NewNepaliDatePicker from "src/components/form/NepaliDatePicker/NewNepaliDatePicker";
import {
    useGetOrderById,
    useSaveOrder,
    useEditOrder,
} from "src/hooks/press/useOrderSubmit";
import { Button } from "windmill-react-ui-kit";
import * as Yup from "yup";
import Select from "src/components/form/Select";

const hotLamination = ["myat","loss","no"];
const normalLamination = ["myat","loss","no"];
const machineType = ["20*30 Colorful","20*30 BW","19*25 BW","10*15 BW"];


function OrderAdd() {
  
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const value = queryParams.get('id');

  const { uuid } = useParams();

  const isEdit = !!uuid;

  const { mutate: saveOrder } = useSaveOrder();
  const { mutate: editOrder } = useEditOrder();
  const { data: orderById, isSuccess } = useGetOrderById(uuid, {
    enabled: isEdit,
    onSettled: () => {
    },
  });

  const handleDataAddOrEdit = (data) => {
    const finalData = {
      ...data,
    };
    isEdit &&
    editOrder(finalData, {
        onSuccess: () => {
          afterSubmitCallback();
        },
      });
    !isEdit &&
    saveOrder(
        { ...finalData },
        {
          onSuccess: () => {
            afterSubmitCallback();
          },
        }
      );
  };

  const afterSubmitCallback = () => {
     history.push(`/customers/${value}`);
  };

  const initialValues = {
    customer_uuid: value,
    work_description: "",
    size_page: "",
    unit_pieces: "",
    paper_description: "",
    rim_sheet: "",
    plate_ctp_description: "",
    ink_description: "",
    binding_numbering: "",
    hot_lamination: "",
    normal_lamination: "",
    machine_type: "",
    unit_price: "",
    advanced_payment: "",
    total_payment: "",
    delivery_date: "",
    remarks : "",
    total_payment : 0,
    order_status : "newOrder",
    payment_status : "due",
  };

  const OrderSchema = Yup.object().shape({
    work_description: Yup.string().required("अनिवार्य छ"),
    size_page: Yup.string().required("अनिवार्य छ"),
    unit_pieces: Yup.number().required("अनिवार्य छ"),
    paper_description: Yup.string().required("अनिवार्य छ"),
    rim_sheet: Yup.string().required("अनिवार्य छ"),
    plate_ctp_description: Yup.string().required("अनिवार्य छ"),
    ink_description: Yup.string().required("अनिवार्य छ"),
    binding_numbering: Yup.string().required("अनिवार्य छ"),
    hot_lamination: Yup.string().required("अनिवार्य छ"),
    normal_lamination: Yup.string().required("अनिवार्य छ"),
    machine_type: Yup.string().required("अनिवार्य छ"),
    unit_price: Yup.string().required("अनिवार्य छ"),
    advanced_payment: Yup.number().required("अनिवार्य छ"),
    total_payment: Yup.number().required("अनिवार्य छ"),
    delivery_date: Yup.date().required("अनिवार्य छ"),
    remarks: Yup.string(),
  });

  return (
    <>
      <h1 className="mt-6 text-lg font-bold text-gray-700 dark:text-gray-300">
        {isEdit ? "अर्डर अप्डेट" : "अर्डर "}
      </h1>
      <Formik
        initialValues={
          isEdit
            ? {
                ...orderById?.data,
              }
            : initialValues
        }
        onSubmit={(values, { setSubmitting }) => {
           handleDataAddOrEdit(values)
        }}
        enableReinitialize
        validationSchema={OrderSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => {
          
          return (
            <form onSubmit={handleSubmit}>
              <div className="flex-auto h-px bg-yellow-500 mb-6"></div>
              <div className="grid grid-cols-1 items-center gap-2 md:gap-4 xl:gap-2 lg:gap-5">
                <div className="grid items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                    <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6  md:flex xl:flex">
                        <LabelArea label="कामको विवरण* :" />
                        <div className="flex-auto">
                          <EnglishInput
                            type="text"
                            name="work_description"
                            setFieldValue={setFieldValue}
                            onChange={handleChange}
                            value={values?.work_description}
                            onBlur={handleBlur}
                            helperText={touched.work_description && errors.work_description}
                          />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                    <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6  md:flex xl:flex">
                        <LabelArea label="साइज/पेज* ​:" />
                        <div className="flex-auto">
                            <EnglishInput
                            type="text"
                            name="size_page"
                            onChange={handleChange}
                            value={values?.size_page}
                            onBlur={handleBlur}
                            helperText={touched.size_page && errors.size_page}
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6  md:flex xl:flex">
                        <LabelArea label="प्रती/पिस :" />
                        <div className="flex-auto">
                        <EnglishInput
                            type="text"
                            name="unit_pieces"
                            setFieldValue={setFieldValue}
                            onChange={handleChange}
                            value={values?.unit_pieces}
                            onBlur={handleBlur}
                            helperText={touched.unit_pieces && errors.unit_pieces}
                        />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 -my-3 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6"> 
                    <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6  md:flex xl:flex">
                    <LabelArea label="प्रती मुल्य ​:" />
                    <div className="flex-auto">
                        <EnglishInput
                        type="text"
                        name="unit_price"
                        onChange={handleChange}
                        value={values?.unit_price}
                        onBlur={handleBlur}
                        helperText={touched.unit_price && errors.unit_price}
                        />
                    </div>
                    </div>
                    <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6  md:flex xl:flex">
                        <LabelArea label="रिम/सिट * :" />
                        <div className="flex-auto">
                        <EnglishInput
                            type="text"
                            name="rim_sheet"
                            setFieldValue={setFieldValue}
                            onChange={handleChange}
                            value={values?.rim_sheet}
                            onBlur={handleBlur}
                            helperText={touched.rim_sheet && errors.rim_sheet}
                        />
                        </div>
                    </div>
                </div>
                <div className="grid items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                    <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6  md:flex xl:flex">
                    <LabelArea label="बाइन्डिङ्ग /नम्बरइङ्ग* ​:" />
                    <div className="flex-auto">
                        <EnglishInput
                        type="text"
                        name="binding_numbering"
                        onChange={handleChange}
                        value={values?.binding_numbering}
                        onBlur={handleBlur}
                        helperText={touched.binding_numbering && errors.binding_numbering}
                        />
                    </div>
                    </div>
                </div>
                <div className="grid -my-3 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                    <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6  md:flex xl:flex">
                        <LabelArea label="कागजको विवरण* :" />
                        <div className="flex-auto">
                        <TextArea
                          name="paper_description"
                          onChange={handleChange}
                          value={values?.paper_description}
                          onBlur={handleBlur}
                          helperText={touched.paper_description && errors.paper_description}
                        />
                        </div>
                    </div>
                </div>
                <div className="grid my-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                    <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6  md:flex xl:flex">
                        <LabelArea label="मासिको विवरण* :" />
                        <div className="flex-auto">
                        <EnglishInput
                            type="text"
                            name="ink_description"
                            setFieldValue={setFieldValue}
                            onChange={handleChange}
                            value={values?.ink_description}
                            onBlur={handleBlur}
                            helperText={touched.ink_description && errors.ink_description}
                        />
                        </div>
                    </div>
                </div>
                <div className="grid -my-3 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                    <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6  md:flex xl:flex">
                    <LabelArea label="प्लेट/CTP विवरण* ​:" />
                    <div className="flex-auto">
                        <EnglishInput
                        type="text"
                        name="plate_ctp_description"
                        onChange={handleChange}
                        value={values?.plate_ctp_description}
                        onBlur={handleBlur}
                        helperText={touched.plate_ctp_description && errors.plate_ctp_description}
                        />
                    </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                    <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6  md:flex xl:flex">
                        <LabelArea label="हट लेमिनेशन :" />
                        <div className="flex-auto">
                        <Select
                            label="hot_lamination"
                            name="hot_lamination"
                            options={hotLamination}
                            defaultValue="छान्नुहोस​"
                            onChange={handleChange}
                            value={values?.hot_lamination}
                            onBlur={handleBlur}
                            helperText={touched.hot_lamination && errors.hot_lamination}
                        />
                        </div>
                    </div>
                    <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6  md:flex xl:flex">
                    <LabelArea label="नर्मल लेमिनेशन ​:" />
                    <div className="flex-auto">
                        <Select
                            label="normal_lamination"
                            name="normal_lamination"
                            options={normalLamination}
                            defaultValue="छान्नुहोस​"
                            onChange={handleChange}
                            value={values?.normal_lamination}
                            onBlur={handleBlur}
                            helperText={touched.normal_lamination && errors.normal_lamination}
                        />
                    </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 -my-3 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                    <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6  md:flex xl:flex">
                        <LabelArea label="मेशिन * :" />
                        <div className="flex-auto">
                        <Select
                            label="machine_type"
                            name="machine_type"
                            options={machineType}
                            defaultValue="छान्नुहोस​"
                            onChange={handleChange}
                            value={values?.machine_type}
                            onBlur={handleBlur}
                            helperText={touched.machine_type && errors.machine_type}
                        />
                        </div>
                    </div>
                    <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6  md:flex xl:flex">
                    <LabelArea label="अग्रीम रकम* ​:" />
                    <div className="flex-auto">
                        <EnglishInput
                        type="number"
                        min={0}
                        name="advanced_payment"
                        onChange={handleChange}
                        value={values?.advanced_payment}
                        onBlur={handleBlur}
                        helperText={touched.advanced_payment && errors.advanced_payment}
                        />
                    </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                  {
                    isEdit &&
                    isEdit ? 
                    <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6  md:flex xl:flex">
                    <LabelArea label="बाँकी आएको रकम*​:" />
                    <div className="flex-auto">
                        <EnglishInput
                        type="number"
                        min={0}
                        name="total_payment"
                        onChange={handleChange}
                        value={values?.total_payment}
                        onBlur={handleBlur}
                        helperText={touched.total_payment && errors.total_payment}
                        />
                    </div>
                    </div>
                    : ""
                  }
                  <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6  md:flex xl:flex">
                      <LabelArea label="दिनु पर्ने मिति* :" />
                      <div className="flex-auto">
                      <NewNepaliDatePicker
                          name="delivery_date"
                          setFieldValue={setFieldValue}
                          value={values?.delivery_date}
                          helperText={touched.delivery_date && errors.delivery_date}
                      />
                      </div>
                  </div>
                </div>
                <div className="grid items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                  <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6  md:flex xl:flex">
                    <LabelArea label="Remarks* ​:" />
                    <div className="flex-auto">
                        <TextArea
                          name="remarks"
                          onChange={handleChange}
                          value={values?.remarks}
                          onBlur={handleBlur}
                          helperText={touched.remarks && errors.remarks}
                        />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-4 mb-24">
                  <Button
                    className="w-full sm:w-auto bg-green-500 text-white hover:bg-gray-500 hover:text-white mr-0"
                    layout="outline"
                    type="submit"
                  >
                    <span className="text-white">{ isEdit ? "अपडेट गर्नुहोस्" : "सुरक्षित गर्नुहोस्"}</span>
                  </Button>
                </div>
                </div>
            </form>
          );
        }}
      </Formik>
    </>
  );
}

export default OrderAdd;