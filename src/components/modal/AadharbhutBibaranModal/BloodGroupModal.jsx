import React from 'react';
import Error from '../../form/Error';
import InputArea from '../../form/InputArea';
import LabelArea from '../../form/LabelArea';
import SelectOption from '../../form/SelectOption';
import useCategorySubmit from '../../../hooks/useCategorySubmit';
import ModalHeader from '../../form/ModalHeader';

const BloodGroupModal = ({ id }) => {
    const {
        register,
        handleSubmit,
        onSubmit,
        errors,
       
    } = useCategorySubmit(id);

    return (
        <>
            <div className="w-full relative  border-gray-100  dark:border-gray-700  dark:text-gray-300">
                {id ? (
                    <ModalHeader
                        title="Update Blood Type"
                    />
                ) : (
                    <ModalHeader
                        title="Add Blood Type"
                    />
                )}
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="pt-4 flex-grow w-full max-h-full ">
                    <div className="grid items-center grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                        <LabelArea label="Product Type" />
                        <div className="col-span-8 sm:col-span-4">
                            <SelectOption
                                register={register}
                                label="Blood Type"
                                name="type"
                            />
                            <Error errorName={errors.type} />
                        </div>
                    </div>

                    <div className="grid items-center grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                        <LabelArea label="Parent Category" />
                        <div className="col-span-8 sm:col-span-4">
                            <InputArea
                                register={register}
                                label="Category title"
                                name="parent"
                                type="text"
                                placeholder="Category title"
                            />
                            <Error errorName={errors.parent} />
                        </div>
                    </div>
                </div>

            </form>
        </>
    );
};

export default BloodGroupModal;
