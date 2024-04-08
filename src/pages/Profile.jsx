import { useContext } from "react";
import { Button } from "windmill-react-ui-kit";

import { useHistory } from "react-router-dom";
import Error from "../components/form/Error";
import InputArea from "../components/form/InputArea";
import LabelArea from "../components/form/LabelArea";
import SelectRole from "../components/form/SelectRole";
import { AdminContext } from "../context/AdminContext";
import useStaffSubmit from "../hooks/useStaffSubmit";

const Profile = () => {
  const {
    state: { adminInfo },
  } = useContext(AdminContext);
  const history = useHistory();

  const { register, errors, imageUrl } = useStaffSubmit(adminInfo._id);

  return (
    <>
      <div className="container p-3 m-6 mx-auto bg-white  dark:bg-gray-800 dark:text-gray-200 rounded-lg">
        <div className="p-6 flex-grow scrollbar-hide w-full max-h-full">
          <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
            <LabelArea label="Profile Picture" />
            <div className="col-span-8 sm:col-span-4">
              <img src={imageUrl && imageUrl} className="w-32" alt="user-img" />
            </div>
          </div>

          <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
            <LabelArea label="Name" />
            <div className="col-span-8 sm:col-span-4">
              <InputArea
                register={register}
                label="Name"
                disabled
                name="name"
                type="text"
                placeholder="Your Name"
              />
              <Error errorName={errors.name} />
            </div>
          </div>

          <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
            <LabelArea label="Email" />
            <div className="col-span-8 sm:col-span-4">
              <InputArea
                register={register}
                label="Email"
                name="email"
                disabled
                type="text"
                placeholder="Email"
              />
              <Error errorName={errors.email} />
            </div>
          </div>

          <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
            <LabelArea label="Contact Number" />
            <div className="col-span-8 sm:col-span-4">
              <InputArea
                register={register}
                label="Contact Number"
                name="phone"
                disabled
                type="text"
                placeholder="Contact Number"
              />
              <Error errorName={errors.phone} />
            </div>
          </div>

          <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
            <LabelArea label="Your Role" />
            <div className="col-span-8 sm:col-span-4">
              <SelectRole
                register={register}
                disabled
                label="Role"
                name="role"
              />
              <Error errorName={errors.role} />
            </div>
          </div>
        </div>

        <div className="flex flex-row-reverse pr-6 pb-6">
          <Button
            type="button"
            onClick={() => history.push("/edit-profile")}
            className="h-12 px-6"
          >
            {" "}
            Edit Profile
          </Button>
        </div>
      </div>
    </>
  );
};

export default Profile;
