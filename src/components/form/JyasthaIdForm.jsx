import React from 'react';

import LabelArea from '../form/LabelArea';
import Uploader from '../image-uploader/Uploader';
import SectionTitle from '../Typography/SectionTitle';
import NepaliInput from './NepaliInput';
import NepDatePicker from './NepaliDatePicker/NepaliDatePicker';
import PhoneInput from './PhoneInput';
import { testSelectOption } from '../../utils/selectData';
import { Formik, getIn } from 'formik';
import Select from './Select';
import useJyasthaNagarSubmit from '../../hooks/useJyasthaNagarSubmit';

const JyasthaIdForm = ({ id }) => {
    const {
        imageUrl,
        setImageUrl,
        initialValues,
        JyasthaFormSchema
        // children,    
        // setChildren,
    } = useJyasthaNagarSubmit(id);

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
                // onSubmit(values);
                // setTimeout(() => {
                //     alert(JSON.stringify(values, null, 2));
                //     setSubmitting(false);
                // }, 100);
            }}
        validationSchema={JyasthaFormSchema}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldValue
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}>
                    <div className="p-6 flex flex-col flex-grow scrollbar-hide flex-auto  max-h-full pb-40">

                        <SectionTitle>जेष्ठ नागरिक​ परिचयपत्र फारम​</SectionTitle>
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
                                <LabelArea label="आ.ब.:" />
                                <div className="flex-auto">
                                    <Select
                                        name="fiscalyear"
                                        options={testSelectOption}
                                        onChange={handleChange}
                                        value={values.fiscalyear}
                                        onBlur={handleBlur}
                                        helperText={touched.fiscalyear && errors.fiscalyear}
                                    />
                                </div>
                            </div>


                            <div className="grid grid-cols-6 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                                <LabelArea label="परिचयपत्र नं:" />
                                <div className="flex-auto">
                                    <NepaliInput
                                        name="idNumber"
                                        onChange={handleChange}
                                        value={values.idNumber}
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                            <div className="grid grid-cols-6 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                                <LabelArea label="नाम:" required />
                                <div className="flex-auto">
                                    <NepaliInput
                                        name="parentFullNameNep"
                                        onChange={handleChange}
                                        value={values.parentFullNameNep}
                                        onBlur={handleBlur}
                                        helperText={touched.parentFullNameNep && errors.parentFullNameNep}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-6 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                                <LabelArea label="सम्पर्क नं:" />
                                <div className="flex-auto">
                                    <PhoneInput
                                        name="contactNumb"
                                        onChange={handleChange}
                                        value={values.contactNumb} />
                                </div>
                            </div>



                        </div>

                        <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                            <div className="grid grid-cols-6 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                                <LabelArea label="लिङ:​" required />
                                <div className="flex-auto">
                                    <Select
                                        name="tempAddress.wardNo"
                                        options={testSelectOption}
                                        onChange={handleChange}
                                        value={values.tempAddress.wardNo}
                                        onBlur={handleBlur}
                                        helperText={getIn(touched, 'tempAddress.wardNo') && getIn(errors, 'tempAddress.wardNo')}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-12 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                                <LabelArea label="जन्म मिति:" />
                                <div className="flex-auto">
                                    <NepDatePicker
                                        name="birthDate"
                                        onChange={setFieldValue}
                                        value={values.birthDate} />
                                </div>
                            </div>

                        </div>

                        <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                            <div className="grid grid-cols-12 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                                <LabelArea label="उमेर​:" required />
                                <div className="flex-auto">
                                    <NepaliInput
                                        name="parentFullNameNep"
                                        onChange={handleChange}
                                        value={values.parentFullNameNep}
                                        onBlur={handleBlur}
                                        helperText={touched.parentFullNameNep && errors.parentFullNameNep}
                                    />
                                </div>
                            </div>


                            <div className="grid grid-cols-6 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                                <LabelArea label="नागरिक्ता नम्बर​:" required />
                                <div className="flex-auto">
                                    <NepaliInput
                                        name="parentFullNameNep"
                                        onChange={handleChange}
                                        value={values.parentFullNameNep}
                                        onBlur={handleBlur}
                                        helperText={touched.parentFullNameNep && errors.parentFullNameNep}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                            <div className="grid grid-cols-12 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                                <LabelArea label="जारी जिल्ला:" />
                                <div className="flex-auto">
                                    <Select
                                        name="tempAddress.wardNo"
                                        options={testSelectOption}
                                        onChange={handleChange}
                                        value={values.tempAddress.wardNo}
                                        onBlur={handleBlur}
                                        helperText={getIn(touched, 'tempAddress.wardNo') && getIn(errors, 'tempAddress.wardNo')}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-6 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                                <LabelArea label="जारी मिति​:" />
                                <div className="flex-auto">
                                    <NepDatePicker
                                        name="issuedDate"
                                        onChange={setFieldValue}
                                        value={values.issuedDate} />
                                </div>
                            </div>
                        </div>


                        <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6  mb-12">
                            <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                                <LabelArea label="आवेदन मिति​:" />
                                <div className="flex-auto">
                                    <NepDatePicker
                                        name="applicationDate"
                                        onChange={setFieldValue}
                                        value={values.applicationDate} />
                                </div>
                            </div>
                        </div>



                        <SectionTitle>स्ठायी ठेगना</SectionTitle>
                        <div className="flex-auto h-px bg-yellow-500 mb-6"></div>
                        <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                            <div
                                className="grid grid-cols-12 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                                <LabelArea label="प्रदेश:​" required />
                                <div className="flex-auto">
                                    <Select
                                        name="tempAddress.province"
                                        options={testSelectOption}
                                        onChange={handleChange}
                                        value={values.tempAddress.province}
                                        onBlur={handleBlur}
                                        helperText={getIn(touched, 'tempAddress.province') && getIn(errors, 'tempAddress.province')}
                                    />
                                </div>
                            </div>


                            <div
                                className="grid grid-cols-6 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                                <LabelArea label="जिल्ला:" required />
                                <div className="flex-auto">
                                    <Select
                                        name="tempAddress.district"
                                        options={testSelectOption}
                                        onChange={handleChange}
                                        value={values.tempAddress.district}
                                        onBlur={handleBlur}
                                        helperText={getIn(touched, 'tempAddress.district') && getIn(errors, 'tempAddress.district')}
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                            <div
                                className="grid grid-cols-12 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                                <LabelArea label="स्ठानिय तह:" required />
                                <div className="flex-auto">
                                    <Select
                                        name="tempAddress.localLevel"
                                        options={testSelectOption}
                                        onChange={handleChange}
                                        value={values.tempAddress.localLevel}
                                        onBlur={handleBlur}
                                        helperText={getIn(touched, 'tempAddress.localLevel') && getIn(errors, 'tempAddress.localLevel')}
                                    />
                                </div>
                            </div>


                            <div
                                className="grid grid-cols-6 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                                <LabelArea label="वडा नंः" required />
                                <div className="flex-auto">
                                    <Select
                                        name="tempAddress.wardNo"
                                        options={testSelectOption}
                                        onChange={handleChange}
                                        value={values.tempAddress.wardNo}
                                        onBlur={handleBlur}
                                        helperText={getIn(touched, 'tempAddress.wardNo') && getIn(errors, 'tempAddress.wardNo')}
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6  mb-12">
                            <div
                                className="grid grid-cols-12 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                                <LabelArea label="टोलको नामः" required />
                                <div className="flex-auto">
                                    <NepaliInput
                                        name="tempAddress.areaName"
                                        onChange={handleChange}
                                        value={values.tempAddress.areaName}
                                        onBlur={handleBlur}
                                        helperText={getIn(touched, 'tempAddress.areaName') && getIn(errors, 'tempAddress.areaName')}
                                    />
                                </div>
                            </div>
                        </div>


                        <SectionTitle>अन्य विवरण</SectionTitle>
                        <div className="flex-auto h-px bg-yellow-500 mb-6"></div>
                        <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                            <div className="grid grid-cols-12 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                                <LabelArea label="संरक्षकको नाम थर​:​" required />
                                <div className="flex-auto">
                                    <NepaliInput
                                        name="parentFullNameNep"
                                        onChange={handleChange}
                                        value={values.parentFullNameNep}
                                        onBlur={handleBlur}
                                        helperText={touched.parentFullNameNep && errors.parentFullNameNep}
                                    />
                                </div>
                            </div>


                            <div className="grid grid-cols-6 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                                <LabelArea label="संरक्षक संगको नाता:" required />
                                <div className="flex-auto">
                                    <Select
                                        name="tempAddress.wardNo"
                                        options={testSelectOption}
                                        onChange={handleChange}
                                        value={values.tempAddress.wardNo}
                                        onBlur={handleBlur}
                                        helperText={getIn(touched, 'tempAddress.wardNo') && getIn(errors, 'tempAddress.wardNo')}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                            <div className="grid grid-cols-6 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                                <LabelArea label="संरक्षकको सम्पर्क नं:" required />
                                <div className="flex-auto">
                                    <PhoneInput
                                        name="parentContactNumb"
                                        onChange={handleChange}
                                        value={values.parentContactNumb} />
                                </div>
                            </div>

                            <div className="grid grid-cols-6 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                                <LabelArea label="पति/पत्निको नाम​:" />
                                <div className="flex-auto">
                                    <NepaliInput
                                        name="parentFullNameNep"
                                        onChange={handleChange}
                                        value={values.parentFullNameNep}
                                        onBlur={handleBlur}
                                        helperText={touched.parentFullNameNep && errors.parentFullNameNep}
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 ">
                            <div className="flex items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                                <LabelArea label="निवेदकको नाम​:" required />
                                <div className="flex-auto">
                                    <NepaliInput
                                        name="parentFullNameNep"
                                        onChange={handleChange}
                                        value={values.parentFullNameNep}
                                        onBlur={handleBlur}
                                        helperText={touched.parentFullNameNep && errors.parentFullNameNep}
                                    />
                                </div>
                            </div>


                            <div className="grid grid-cols-6 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                                <LabelArea label="निवेदकको ठेगाना​:" required />
                                <div className="flex-auto">
                                    <NepaliInput
                                        name="parentFullNameNep"
                                        onChange={handleChange}
                                        value={values.parentFullNameNep}
                                        onBlur={handleBlur}
                                        helperText={touched.parentFullNameNep && errors.parentFullNameNep}
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="grid grid-cols-2 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6">
                            <div className="grid grid-cols-6 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                                <LabelArea label="उपलब्ध छुट तथा सुबिधाहरु​:" />
                                <div className="flex-auto">
                                    <NepaliInput
                                        name="parentFullNameNep"
                                        onChange={handleChange}
                                        value={values.parentFullNameNep}
                                        onBlur={handleBlur}
                                        helperText={touched.parentFullNameNep && errors.parentFullNameNep}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-6 items-center gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 md:flex xl:flex">
                                <LabelArea label="रोग र सेवन गरिएको औषधिको नाम​​:" />
                                <div className="flex-auto">
                                    <NepaliInput
                                        name="parentFullNameNep"
                                        onChange={handleChange}
                                        value={values.parentFullNameNep}
                                        onBlur={handleBlur}
                                        helperText={touched.parentFullNameNep && errors.parentFullNameNep}
                                    />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="text-sm self-end transition-colors duration-150 font-medium focus:outline-none px-5 py-2 rounded-md text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 w-32 cursor-pointer">सुरक्षित गर्नुहोस​</button>
                    </div>
                </form>
            )}
        </Formik>
    );
};

export default JyasthaIdForm;
