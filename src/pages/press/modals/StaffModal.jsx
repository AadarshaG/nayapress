import { useFormik } from "formik";
import * as Yup from "yup";

import FormikDropdown from "src/components/FormikDropdown";
import EnglishInput from "src/components/form/EnglishInput";
import LabelArea from "src/components/form/LabelArea";
import ModalHeader from "src/components/form/ModalHeader";
import NepaliInput from "src/components/form/NepaliInput";
import PhoneInput from "src/components/form/PhoneInput";
import ModalFooter from "src/components/modal/ModalFooter";
import Select from "src/components/form/Select";

import useToggleModal from "src/hooks/useToggleModal";

const initialValues = {
  name: "",
  email: "",
  address: "",
  phone_number: "",
  role: "staff",
  status: "enabled",
  image: "",
};

const StaffSchema = Yup.object().shape({
  name: Yup.string().required("अनिवार्य छ"),
  address: Yup.string(),
  phone_number: Yup.string(),
  image: Yup.string().nullable(),
  email: Yup.string().email("ईमेल फरम्याट मिलेन ").required("अनिवार्य छ"),
});

const Roles = ['admin','staff'];
const Status = ['enabled','disabled'];

const StaffModal = ({
  isEdit,
  data,
  onSubmit,
  handleDataAdd,
  saveLoading,
  editLoading,
}) => {

  const processAndSubmit = (values, { setSubmitting }) => {
    const processedValues = {
      ...values,
    };
    handleDataAdd(processedValues);
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setFieldValue,
  } = useFormik({
    initialValues: isEdit
      ? {
          ...data,
        }
      : initialValues,
    validationSchema: StaffSchema,
    onSubmit: processAndSubmit,
    enableReinitialize: true,
  });

  const { handleModalClose } = useToggleModal();

  return (
    <>
      <div className="w-full relative  border-gray-100  dark:border-gray-700  dark:text-gray-300">
        <ModalHeader
          title={isEdit && isEdit ? "कर्मचारी अप्डेट" : "कर्मचारी "}
          handleModalClose={handleModalClose}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 items-center gap-2 md:gap-4 xl:gap-2 lg:gap-5">
          <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
            <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6  md:flex xl:flex">
                <LabelArea label="नाम* :" />
                <div className="flex-auto">
                  <EnglishInput
                    type="text"
                    name="name"
                    setFieldValue={setFieldValue}
                    onChange={handleChange}
                    value={values?.name}
                    onBlur={handleBlur}
                    helperText={touched.name && errors.name}
                  />
                </div>
            </div>
            <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6  md:flex xl:flex">
              <LabelArea label="ठेगाना* ​:" />
              <div className="flex-auto">
                <EnglishInput
                  type="text"
                  name="address"
                  onChange={handleChange}
                  value={values?.address}
                  onBlur={handleBlur}
                  helperText={touched.address && errors.address}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
            <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6  md:flex xl:flex">
                <LabelArea label="सम्पर्क नं* :" />
                <div className="flex-auto">
                  <PhoneInput
                    type="text"
                    name="phone_number"
                    setFieldValue={setFieldValue}
                    onChange={handleChange}
                    value={values?.phone_number}
                    onBlur={handleBlur}
                    helperText={touched.phone_number && errors.phone_number}
                  />
                </div>
            </div>
            <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6  md:flex xl:flex">
              <LabelArea label="ईमेल* ​:" />
              <div className="flex-auto">
                <EnglishInput
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values?.email}
                  onBlur={handleBlur}
                  helperText={touched.email && errors.email}
                />
              </div>
            </div>
          </div>
         
         {
          !isEdit &&
            !isEdit ? 
            <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
            <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6  md:flex xl:flex">
              <LabelArea label="पासपोर्ड * ​:" />
              <div className="flex-auto">
                <EnglishInput
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={values?.password}
                  onBlur={handleBlur}
                  helperText={touched.password && errors.password}
                />
              </div>
            </div>
          </div>
          : ""
         }

         {
           isEdit &&
           isEdit ?
           <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
            <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6  md:flex xl:flex">
                <LabelArea label="रोल :" />
                <div className="flex-auto">
                  <Select
                      label="role"
                      name="role"
                      options={Roles}
                      defaultValue="छान्नुहोस​"
                      onChange={handleChange}
                      value={values?.role}
                      onBlur={handleBlur}
                      helperText={touched.role && errors.role}
                    />
                </div>
            </div>
            <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6  md:flex xl:flex">
              <LabelArea label="स्टाटस ​:" />
              <div className="flex-auto">
                <Select
                    label="status"
                    name="status"
                    options={Status}
                    defaultValue="छान्नुहोस​"
                    onChange={handleChange}
                    value={values?.status}
                    onBlur={handleBlur}
                    helperText={touched.status && errors.status}
                  />
              </div>
            </div>
          </div>
          : ""
         }

        </div>

        <ModalFooter
          uuid={isEdit}
          onCancelClick={handleModalClose}
          isLoading={saveLoading || editLoading}
        />
      </form>
    </>
  );
};

export default StaffModal;
