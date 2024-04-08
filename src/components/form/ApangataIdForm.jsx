import { Formik, getIn } from "formik";
import { Input, Label } from "windmill-react-ui-kit";
import useDisabilitySubmit from "../../hooks/useDisabilitySubmit";
import {
  educationalStatus,
  employmentStatus,
  gender,
  maritialStatus,
  testSelectOption,
} from "../../utils/selectData";
import SectionTitle from "../Typography/SectionTitle";
import Error from "../form/Error";
import LabelArea from "../form/LabelArea";
import Uploader from "../image-uploader/Uploader";
import EnglishInput from "./EnglishInput";
import NepDatePicker from "./NepaliDatePicker/NepaliDatePicker";
import NepaliInput from "./NepaliInput";
import PhoneInput from "./PhoneInput";
import Select from "./Select";

const ApangataIdForm = ({ id }) => {
  const {
    initialValues,
    DisabilityFormSchema,
    onSubmit,
    imageUrl,
    setImageUrl,
  } = useDisabilitySubmit(id);

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values);
        }}
        validationSchema={DisabilityFormSchema}
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
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="p-6 flex flex-col flex-grow scrollbar-hide flex-auto  max-h-full pb-40">
              <SectionTitle>अपाङ्गता परिचयपत्र फारम​</SectionTitle>
              <div className="flex-auto h-px bg-yellow-500 mb-4"></div>

              <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="फोटो:" />
                  <div className="col-span-8 sm:col-span-4">
                    <Uploader imageUrl={imageUrl} setImageUrl={setImageUrl} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="परिचयपत्र नंः" />
                  <div className="flex-auto">
                    <NepaliInput
                      name="idNumber"
                      onChange={handleChange}
                      value={values.idNumber}
                    />
                    <Error errorName={errors.type} />
                  </div>
                </div>

                <div className="grid grid-cols-6 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="मिति:" />
                  <div className="flex-auto">
                    <NepDatePicker
                      name="date"
                      onChange={setFieldValue}
                      value={values.date}
                    />
                    <Error errorName={errors.type} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="नाम​, थर​:" required />
                  <div className="flex-auto">
                    <NepaliInput
                      name="fullNameNep"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.fullNameNep}
                      helperText={touched.fullNameNep && errors.fullNameNep}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-6 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="नाम​, थर (अंग्रेजी):" required />
                  <div className="flex-auto">
                    <EnglishInput
                      name="fullNameEng"
                      onChange={handleChange}
                      value={values.fullNameEng}
                      onBlur={handleBlur}
                      helperText={touched.fullNameEng && errors.fullNameEng}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                <div className="grid grid-cols-12 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="लिङ:" required />
                  <div className="flex-auto">
                    <Select
                      label="Gender"
                      name="gender"
                      options={gender}
                      defaultValue="छान्नुहोस​"
                      onChange={handleChange}
                      value={values.gender}
                      onBlur={handleBlur}
                      helperText={touched.gender && errors.gender}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-6 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="विवाहित/अविवाहित:" />
                  <div className="flex-auto">
                    <Select
                      label="Maritial Status"
                      name="maritialStatus"
                      options={maritialStatus}
                      defaultValue="छान्नुहोस​"
                      onChange={handleChange}
                      value={values.maritialStatus}
                    />
                    <Error errorName={errors.type} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                <div className="grid grid-cols-12 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="शैक्षिक योग्यता:" />
                  <div className="flex-auto">
                    <Select
                      label="Educational Status"
                      name="educationalStatus"
                      options={educationalStatus}
                      defaultValue="छान्नुहोस​"
                      onChange={handleChange}
                      value={values.educationalStatus}
                    />
                    <Error errorName={errors.type} />
                  </div>
                </div>

                <div className="grid grid-cols-6 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="हालको पेशा:" />
                  <div className="flex-auto">
                    <Select
                      label="Employment Status"
                      name="employmentStatus"
                      options={employmentStatus}
                      defaultValue="छान्नुहोस​"
                      onChange={handleChange}
                      value={values.employmentStatus}
                    />
                    <Error errorName={errors.type} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                <div className="grid grid-cols-12 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="जन्म मिति:" />
                  <div className="flex-auto">
                    <NepDatePicker
                      name="birthDate"
                      onChange={setFieldValue}
                      value={values.birthDate}
                    />
                    <Error errorName={errors.type} />
                  </div>
                </div>

                <div className="grid grid-cols-6 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="उमेर​:" required />
                  <div className="flex-auto">
                    <NepaliInput
                      name="age"
                      onChange={handleChange}
                      value={values.age}
                      onBlur={handleBlur}
                      helperText={touched.age && errors.age}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                <div className="grid grid-cols-12 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="रक्त समूह​:" />
                  <div className="flex-auto">
                    <Select
                      name="bloodGroup"
                      options={maritialStatus}
                      defaultValue="छान्नुहोस​"
                      onChange={handleChange}
                      value={values.bloodGroup}
                    />
                    <Error errorName={errors.type} />
                  </div>
                </div>

                <div className="grid grid-cols-6 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="नागरिक्ता नम्बर​:" required />
                  <div className="flex-auto">
                    <NepaliInput
                      name="citizenShipNumb"
                      onChange={handleChange}
                      value={values.citizenShipNumb}
                      onBlur={handleBlur}
                      helperText={
                        touched.citizenShipNumb && errors.citizenShipNumb
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                <div className="grid grid-cols-12 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="जारी जिल्ला:" />
                  <div className="flex-auto">
                    <Select
                      name="citizenShipIssuedDistrict"
                      options={testSelectOption}
                      onChange={handleChange}
                      value={values.issuedDistrict}
                    />
                    <Error errorName={errors.type} />
                  </div>
                </div>

                <div className="grid grid-cols-6 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="जारी मिति​:" />
                  <div className="flex-auto">
                    <NepDatePicker
                      name="citizenShipIssuedDate"
                      onChange={setFieldValue}
                      value={values.citizenShipIssuedDate}
                    />
                    <Error errorName={errors.type} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-12">
                <div className="grid grid-cols-12 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="सम्पर्क नं:" />
                  <div className="flex-auto">
                    <PhoneInput
                      name="contactNumb"
                      onChange={handleChange}
                      value={values.contactNumb}
                    />
                    <Error errorName={errors.type} />
                  </div>
                </div>
              </div>

              <SectionTitle>स्ठायी ठेगना</SectionTitle>
              <div className="flex-auto h-px bg-yellow-500 mb-6"></div>
              <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                <div className="grid grid-cols-12 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="प्रदेश:​" required />
                  <div className="flex-auto">
                    <Select
                      name="tempAddress.province"
                      options={testSelectOption}
                      onChange={handleChange}
                      value={values.tempAddress.province}
                      onBlur={handleBlur}
                      helperText={
                        getIn(touched, "tempAddress.province") &&
                        getIn(errors, "tempAddress.province")
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-6 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="जिल्ला:" required />
                  <div className="flex-auto">
                    <Select
                      name="tempAddress.district"
                      options={testSelectOption}
                      onChange={handleChange}
                      value={values.tempAddress.district}
                      onBlur={handleBlur}
                      helperText={
                        getIn(touched, "tempAddress.district") &&
                        getIn(errors, "tempAddress.district")
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                <div className="grid grid-cols-12 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="स्ठानिय तह:" required />
                  <div className="flex-auto">
                    <Select
                      name="tempAddress.localLevel"
                      options={testSelectOption}
                      onChange={handleChange}
                      value={values.tempAddress.localLevel}
                      onBlur={handleBlur}
                      helperText={
                        getIn(touched, "tempAddress.localLevel") &&
                        getIn(errors, "tempAddress.localLevel")
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-6 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="वडा नंः" required />
                  <div className="flex-auto">
                    <Select
                      name="tempAddress.wardNo"
                      options={testSelectOption}
                      onChange={handleChange}
                      value={values.tempAddress.wardNo}
                      onBlur={handleBlur}
                      helperText={
                        getIn(touched, "tempAddress.wardNo") &&
                        getIn(errors, "tempAddress.wardNo")
                      }
                    />
                    <Error errorName={errors.type} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                <div className="grid grid-cols-12 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="टोलको नामः" required />
                  <div className="flex-auto">
                    <NepaliInput
                      name="tempAddress.areaName"
                      onChange={handleChange}
                      value={values.tempAddress.areaName}
                      onBlur={handleBlur}
                      helperText={
                        getIn(touched, "tempAddress.areaName") &&
                        getIn(errors, "tempAddress.areaName")
                      }
                    />
                    <Error errorName={errors.type} />
                  </div>
                </div>
              </div>

              <div className="mb-6 flex items-center">
                <span className="text-sm mx-2">
                  के हालको ठेगाना र स्ठायी ठेगाना एउटै हो ?
                </span>
                <input
                  type="checkbox"
                  className="ml-4"
                  disabled={
                    values.tempAddress.province === "" &&
                    values.tempAddress.district === "" &&
                    values.tempAddress.localLevel === ""
                  }
                  onChange={handleChange}
                  name="isTempAndPermAddressSame"
                  value={values.isTempAndPermAddressSame}
                />
              </div>

              <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                <div className="grid grid-cols-12 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="प्रदेश:​" required />
                  <div className="flex-auto">
                    <Select
                      disabled={values.isTempAndPermAddressSame}
                      name="permAddress.province"
                      options={testSelectOption}
                      onChange={handleChange}
                      value={
                        values.isTempAndPermAddressSame
                          ? values.tempAddress.province
                          : values.permAddress.province
                      }
                      onBlur={handleBlur}
                      helperText={
                        getIn(touched, "permAddress.province") &&
                        getIn(errors, "permAddress.province")
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-6 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="जिल्ला:" required />
                  <div className="flex-auto">
                    <Select
                      disabled={values.isTempAndPermAddressSame}
                      name="permAddress.district"
                      options={testSelectOption}
                      onChange={handleChange}
                      value={
                        values.isTempAndPermAddressSame
                          ? values.tempAddress.district
                          : values.permAddress.district
                      }
                      onBlur={handleBlur}
                      helperText={
                        getIn(touched, "permAddress.district") &&
                        getIn(errors, "permAddress.district")
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                <div className="grid grid-cols-12 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="स्ठानिय तह:" required />
                  <div className="flex-auto">
                    <Select
                      disabled={values.isTempAndPermAddressSame}
                      name="permAddress.localLevel"
                      options={testSelectOption}
                      onChange={handleChange}
                      value={
                        values.isTempAndPermAddressSame
                          ? values.tempAddress.localLevel
                          : values.permAddress.localLevel
                      }
                      onBlur={handleBlur}
                      helperText={
                        getIn(touched, "permAddress.localLevel") &&
                        getIn(errors, "permAddress.localLevel")
                      }
                    />
                    <Error errorName={errors.type} />
                  </div>
                </div>

                <div className="grid grid-cols-6 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="वडा नंः" required />
                  <div className="flex-auto">
                    <Select
                      disabled={values.isTempAndPermAddressSame}
                      name="permAddress.wardNo"
                      options={testSelectOption}
                      onChange={handleChange}
                      value={
                        values.isTempAndPermAddressSame
                          ? values.tempAddress.wardNo
                          : values.permAddress.wardNo
                      }
                      onBlur={handleBlur}
                      helperText={
                        getIn(touched, "permAddress.wardNo") &&
                        getIn(errors, "permAddress.wardNo")
                      }
                    />
                    <Error errorName={errors.type} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-12">
                <div className="grid grid-cols-12 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="टोलको नामः" required />
                  <div className="flex-auto">
                    <NepaliInput
                      disabled={values.isTempAndPermAddressSame}
                      name="permAddress.areaName"
                      onChange={handleChange}
                      value={
                        values.isTempAndPermAddressSame
                          ? values.tempAddress.areaName
                          : values.permAddress.areaName
                      }
                      onBlur={handleBlur}
                      helperText={
                        getIn(touched, "permAddress.areaName") &&
                        getIn(errors, "permAddress.areaName")
                      }
                    />
                    <Error errorName={errors.type} />
                  </div>
                </div>
              </div>

              <SectionTitle>संरक्षक/अभिभावक विवरण</SectionTitle>
              <div className="flex-auto h-px bg-yellow-500 mb-6"></div>
              <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                <div className="grid grid-cols-12 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="संरक्षक/अभिभावकको नाम थर​:​" required />
                  <div className="flex-auto">
                    <NepaliInput
                      name="parentFullNameNep"
                      onChange={handleChange}
                      value={values.parentFullNameNep}
                      onBlur={handleBlur}
                      helperText={
                        touched.parentFullNameNep && errors.parentFullNameNep
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-6 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="निवेदकको नाता:" required />
                  <div className="flex-auto">
                    <Select
                      name="applicantRelation"
                      options={testSelectOption}
                      onChange={handleChange}
                      value={values.applicantRelation}
                      onBlur={handleBlur}
                      helperText={
                        touched.applicantRelation && errors.applicantRelation
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                <div className="grid grid-cols-12 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea
                    label="संरक्षक/अभिभावकको नाम थर​ (अंग्रेजी):​"
                    required
                  />
                  <div className="flex-auto">
                    <EnglishInput
                      name="parentFullNameEng"
                      onChange={handleChange}
                      value={values.parentFullNameEng}
                      onBlur={handleBlur}
                      helperText={
                        touched.parentFullNameEng && errors.parentFullNameEng
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-6 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="संरक्षक/अभिभावकको सम्पर्क नं:" />
                  <div className="flex-auto">
                    <PhoneInput
                      name="parentContactNumb"
                      onChange={handleChange}
                      value={values.parentContactNumb}
                    />
                    <Error errorName={errors.type} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                <div className="grid grid-cols-6 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="अपाङ्गताको प्रकार​:" required />
                  <div className="flex-auto">
                    <Select
                      name="disabilityType"
                      options={testSelectOption}
                      onChange={handleChange}
                      value={values.disabilityType}
                      onBlur={handleBlur}
                      helperText={
                        touched.disabilityType && errors.disabilityType
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-6 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea
                    label="अशक्तताको आधारमा अपाङ्गताको प्रकार​:"
                    required
                  />
                  <div className="flex-auto">
                    <Select
                      name="disabilityTypeByType"
                      options={testSelectOption}
                      onChange={handleChange}
                      value={values.disabilityTypeByType}
                      onBlur={handleBlur}
                      helperText={
                        touched.disabilityTypeByType &&
                        errors.disabilityTypeByType
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="grid items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                <div className="grid  items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea
                    label="शरीरको अंग​, संरचना, प्रणालीमा आएको क्षतिको विवरण​:"
                    width
                  />
                  <div className="flex-auto">
                    <NepaliInput
                      name="deformityDetail"
                      onChange={handleChange}
                      value={values.deformityDetail}
                    />
                    <Error errorName={errors.type} />
                  </div>
                </div>
              </div>

              <div className="grid items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                <div className="grid  items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea
                    label="क्षति भएपछि दैनिक कृयाकलापमा आएको अवरोध वा सिमितताको विवरण​:"
                    width
                  />
                  <div className="flex-auto">
                    <NepaliInput
                      name="obstacleDueToDeformity"
                      onChange={handleChange}
                      value={values.obstacleDueToDeformity}
                    />
                    <Error errorName={errors.type} />
                  </div>
                </div>
              </div>

              <div className="grid items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                <div className="grid  items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="आपाङ्गताको कारण​:" width required />
                  <div className="flex-auto">
                    <Select
                      name="disabilityReason"
                      options={testSelectOption}
                      onChange={handleChange}
                      value={values.disabilityReason}
                      onBlur={handleBlur}
                      helperText={
                        touched.disabilityReason && errors.disabilityReason
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="grid items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                <div className="grid  items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea
                    label="सहायक सामग्री प्रयोग गर्नु पर्ने आवश्यकता भए/नभ​एको​:"
                    width
                  />
                  <div className="flex-auto">
                    <Label radio>
                      <Input
                        type="radio"
                        name="assistantEquipment"
                        onChange={handleChange}
                        value="required"
                      />
                      <span className="ml-2">भए</span>
                    </Label>
                    <Label radio>
                      <Input
                        type="radio"
                        className="ml-6"
                        name="assistantEquipment"
                        onChange={handleChange}
                        value="notRequired"
                      />
                      <span className="ml-2">नभ​एको​</span>
                    </Label>
                  </div>
                </div>
              </div>

              <div className="grid items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                <div className="grid  items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea
                    label="आवश्यकता भएको भ​ए कस्तो समग्रीको प्रयोग गर्नु पर्ने हुन्छ​?​:"
                    width
                  />
                  <div className="flex-auto">
                    <NepaliInput
                      name="requiredEquipment"
                      onChange={handleChange}
                      value={values.requiredEquipment}
                    />
                    <Error errorName={errors.type} />
                  </div>
                </div>
              </div>

              <div className="grid items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                <div className="grid  items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea
                    label="सहायक सामग्री प्रयोग गर्ने गरेको/नगरेको​:"
                    width
                  />
                  <div className="flex-auto">
                    <Label radio>
                      <Input
                        type="radio"
                        name="assistantEquipmentUsage"
                        onChange={handleChange}
                        value="used"
                      />
                      <span className="ml-2">गरेको</span>
                    </Label>
                    <Label radio>
                      <Input
                        type="radio"
                        className="ml-6"
                        name="assistantEquipmentUsage"
                        onChange={handleChange}
                        value="notUsed"
                      />
                      <span className="ml-2">नगरेको​</span>
                    </Label>
                  </div>
                </div>
              </div>

              <div className="grid items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                <div className="grid  items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea
                    label="सहायक सामग्री प्रयोग प्रयोग गरेको भए समाग्रीको नाम​​:"
                    width
                  />
                  <div className="flex-auto">
                    <NepaliInput
                      name="usedEquipName"
                      onChange={handleChange}
                      value={values.usedEquipName}
                    />
                    <Error errorName={errors.type} />
                  </div>
                </div>
              </div>

              <div className="grid items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                <div className="grid  items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea
                    label="अन्य व्यक्तिको सहयोग विना आफ्ना कस्ता कस्ता दैनिक कार्य गर्नु हुन्छ​?​:"
                    width
                  />
                  <div className="flex-auto">
                    <NepaliInput
                      name="dailyRoutineWOHelp"
                      onChange={handleChange}
                      value={values.dailyRoutineWOHelp}
                    />
                    <Error errorName={errors.type} />
                  </div>
                </div>
              </div>

              <div className="grid items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-12">
                <div className="grid  items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea
                    label="अन्य व्यक्तिको सहयोग लिनु हुन्छ भने कुन कुन कामको लागि लिनु हुन्छ​​?​:"
                    width
                  />
                  <div className="flex-auto">
                    <NepaliInput
                      name="dailyRoutineWHelp"
                      onChange={handleChange}
                      value={values.dailyRoutineWHelp}
                    />
                    <Error errorName={errors.type} />
                  </div>
                </div>
              </div>

              <SectionTitle>तालिम विवरण</SectionTitle>
              <div className="flex-auto h-px bg-yellow-500 mb-4"></div>

              <div className="grid items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 ">
                <div className="grid  items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea
                    label="कुनै तालिम प्राप्त गर्नुभ​एको भ​ए मुख्य तालिमहरुको नाम​​:"
                    width
                  />
                  <div className="flex-auto">
                    <NepaliInput
                      name="trainingName"
                      onChange={handleChange}
                      value={values.trainingName}
                    />
                    <Error errorName={errors.type} />
                  </div>
                </div>
              </div>

              <div className="grid items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-12">
                <div className="grid  items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="तालिमहरुको विवरण​:" width />
                  <div className="flex-auto">
                    <NepaliInput
                      name="trainingDescription"
                      onChange={handleChange}
                      value={values.trainingDescription}
                    />
                    <Error errorName={errors.type} />
                  </div>
                </div>
              </div>

              <SectionTitle>निवेदकको विवरण</SectionTitle>
              <div className="flex-auto h-px bg-yellow-500 mb-4"></div>

              <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 ">
                <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="निवेदकको नाम​:" />
                  <div className="flex-auto">
                    <NepaliInput
                      name="applicantName"
                      onChange={handleChange}
                      value={values.applicantName}
                    />
                    <Error errorName={errors.type} />
                  </div>
                </div>

                <div className="grid grid-cols-6 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                  <LabelArea label="निवेदकको ठेगाना​:" />
                  <div className="flex-auto">
                    <NepaliInput
                      name="applicantAddress"
                      onChange={handleChange}
                      value={values.applicantAddress}
                    />
                    <Error errorName={errors.type} />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="text-sm self-end transition-colors duration-150 font-medium focus:outline-none px-5 py-2 rounded-md text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 w-32 cursor-pointer"
              >
                सुरक्षित गर्नुहोस
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default ApangataIdForm;
