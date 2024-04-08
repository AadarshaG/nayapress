import { useMutation, useQuery } from "@tanstack/react-query";
import { notifyError, notifySuccess } from "src/utils/toast";

import { endpoints } from "src/core/endpoints";
import requests from "src/services/httpService";

const getStaffList = () => {
  const updatedEndpoints = endpoints.staff;
  return requests.get(updatedEndpoints + "/users");
};

const getStaffById = (uuid) => {
  const updatedEndpoints = endpoints.staff;
  return requests.get(updatedEndpoints + "/" + uuid);
};

const deleteStaff = (uuid) => {
  const updatedEndpoints = endpoints.staff;
  return requests.delete(updatedEndpoints + "/" + uuid);
};

const saveStaff = (data) => {
  const updatedEndpoints = endpoints.staff;
  return requests.post(updatedEndpoints + "/register", data);
};

const editStaff = (data) => {
  const updatedEndpoints = endpoints.staff;
  return requests.patch(updatedEndpoints + "/" + data.uuid, data);
};

const useGetStaffList = (rest) => {
  return useQuery(["getStaffList"], () => getStaffList(), {
    ...rest,
  });
};

const useGetStaffById = (uuid, rest) => {
  return useQuery(["getStaffById"], () => getStaffById(uuid), {
    ...rest,
  });
};

const useSaveStaff = () => {
  return useMutation(["saveStaff"], saveStaff, {
    onSuccess: (res) => {
      notifySuccess("Data Sucessfully Saved");
    },
    onError: (err) => {
      notifyError("Oops! Error Occured while saving data");
    },
  });
};

const useEditStaff = () => {
  return useMutation(["editStaff"], editStaff, {
    onSuccess: (res) => {
      notifySuccess("Data Sucessfully Edited");
    },
    onError: (err) => {
      notifyError("Oops! Error Occured while editing data");
    },
  });
};

const useDeleteStaff = () => {
  return useMutation(["deleteStaff"], deleteStaff, {
    onSuccess: (res) => {
      notifySuccess("Data Sucessfully Deleted");
    },
    onError: (err) => {
      notifyError("Oops! Error Occured while deleting data");
    },
  });
};

export {
  useGetStaffList,
  useGetStaffById,
  useSaveStaff,
  useEditStaff,
  useDeleteStaff,
};
