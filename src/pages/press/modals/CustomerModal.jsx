import { useFormik } from "formik";
import * as Yup from "yup";

import FormikDropdown from "src/components/FormikDropdown";
import EnglishInput from "src/components/form/EnglishInput";
import LabelArea from "src/components/form/LabelArea";
import ModalHeader from "src/components/form/ModalHeader";
import NepaliInput from "src/components/form/NepaliInput";
import PhoneInput from "src/components/form/PhoneInput";
import ModalFooter from "src/components/modal/ModalFooter";

import useToggleModal from "src/hooks/useToggleModal";

const initialValues = {
  contact_person: "",
  email: "",
  address: "",
  phone_number: "",
  company_name: "",
  pan: "",
};

const CustomerSchema = Yup.object().shape({
  contact_person: Yup.string().required("अनिवार्य छ"),
  address: Yup.string().nullable(),
  company_name: Yup.string().nullable(),
  pan: Yup.string().nullable(),
  phone_number: Yup.string().required("अनिवार्य छ"),
  email: Yup.string().nullable(),
});

const CustomerModal = ({
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
    validationSchema: CustomerSchema,
    onSubmit: processAndSubmit,
    enableReinitialize: true,
  });

  const { handleModalClose } = useToggleModal();

  return (
    <>
      <div className="w-full relative  border-gray-100  dark:border-gray-700  dark:text-gray-300">
        <ModalHeader
          title={isEdit && isEdit ? "ग्राहक अप्डेट" : "ग्राहक "}
          handleModalClose={handleModalClose}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 items-center gap-2 md:gap-4 xl:gap-2 lg:gap-5">
          <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
            <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6  md:flex xl:flex">
                <LabelArea label="सम्पर्क गर्नेको नाम  * :" />
                <div className="flex-auto">
                  <EnglishInput
                    type="text"
                    name="contact_person"
                    setFieldValue={setFieldValue}
                    onChange={handleChange}
                    value={values?.contact_person}
                    onBlur={handleBlur}
                    helperText={touched.contact_person && errors.contact_person}
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
                <LabelArea label="सस्थाको नाम :" />
                <div className="flex-auto">
                  <EnglishInput
                    type="text"
                    name="company_name"
                    setFieldValue={setFieldValue}
                    onChange={handleChange}
                    value={values?.company_name}
                    onBlur={handleBlur}
                    helperText={touched.company_name && errors.company_name}
                  />
                </div>
            </div>
            <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6  md:flex xl:flex">
              <LabelArea label="पान नं ​:" />
              <div className="flex-auto">
                <EnglishInput
                  type="text"
                  name="pan"
                  onChange={handleChange}
                  value={values?.pan}
                  onBlur={handleBlur}
                  helperText={touched.pan && errors.pan}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
            <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6  md:flex xl:flex">
                <LabelArea label="सम्पर्क नं* :" />
                <div className="flex-auto">
                  <PhoneInput
                    type="tel"
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

export default CustomerModal;
