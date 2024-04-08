import { useState } from "react";
import { Card, CardBody} from "windmill-react-ui-kit"
import PageTitle from "src/components/Typography/PageTitle";
import LabelArea from "src/components/form/LabelArea";
import {
  useGetStaffById
} from "src/hooks/press/useStaffSubmit";
import { useParams } from "react-router-dom";

const StaffDetail = () => {
    const { uuid } = useParams();

    const isView = !!uuid;

    const { data: staffById } = useGetStaffById(
        uuid, {
        enabled: isView,
        onSettled: () => {},
      });
      
  return (
    <>
     <PageTitle>कर्मचारीको विवरण</PageTitle>
        <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
            <CardBody>
                <div className="grid grid-cols-2">
                    <div className="grid grid-cols-6 font-bold gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                        <LabelArea label="नाम :" />
                        <div className="col-span-8 sm:col-span-4">
                        <p className="dark:text-gray-400">{staffById?.data?.name}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                        <LabelArea label="ईमेल:" />
                        <div className="col-span-8 sm:col-span-4">
                        <p className="dark:text-gray-400">{staffById?.data?.email}</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="grid grid-cols-6 font-bold gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                        <LabelArea label="सम्पर्क नं  :" />
                        <div className="col-span-8 sm:col-span-4">
                            <p className="dark:text-gray-400">{staffById?.data?.phone_number}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                        <LabelArea label="ठेगाना :" />
                        <div className="col-span-8 sm:col-span-4">
                            <p className="dark:text-gray-400">{staffById?.data?.address}</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                        <LabelArea label="Status  :" />
                        <div className="col-span-8 sm:col-span-4">
                            { staffById?.data?.status === 'disabled' && (
                                <p className="dark:text-gray-400">Disabled</p>
                            )}
                            { staffById?.data?.status === 'enabled' && (
                                <p className="dark:text-gray-400">Enabled</p>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                        <LabelArea label="Role :" />
                        <div className="col-span-8 sm:col-span-4">
                        { staffById?.data?.role === 'admin' && (
                                <p className="dark:text-gray-400">Admin</p>
                            )}
                            { staffById?.data?.role === 'staff' && (
                                <p className="dark:text-gray-400">Staff</p>
                            )}
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    </>
  );
};

export default StaffDetail;
