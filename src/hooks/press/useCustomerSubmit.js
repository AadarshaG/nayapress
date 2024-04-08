import { useMutation, useQuery } from "@tanstack/react-query";
import { notifyError, notifySuccess } from "src/utils/toast";

import { endpoints } from "src/core/endpoints";
import requests from "src/services/httpService";

const getCustomerList = () => {
  const updatedEndpoints = endpoints.customer;
  return requests.get(updatedEndpoints);
};

const getCustomerById = (uuid) => {
  const updatedEndpoints = endpoints.customer;
  return requests.get(updatedEndpoints + "/" + uuid);
};

const deleteCustomer = (uuid) => {
  const updatedEndpoints = endpoints.customer;
  return requests.delete(updatedEndpoints + "/" + uuid);
};

const saveCustomer = (data) => {
  const updatedEndpoints = endpoints.customer;
  return requests.post(updatedEndpoints + "/register", data);
};

const editCustomer = (data) => {
  const updatedEndpoints = endpoints.customer;
  return requests.patch(updatedEndpoints + "/" + data.uuid, data);
};

const useGetCustomerList = (rest) => {
  return useQuery(["getCustomerList"], () => getCustomerList(), {
    ...rest,
  });
};

const useGetCustomerById = (uuid, rest) => {
  return useQuery(["getCustomerById"], () => getCustomerById(uuid), {
    ...rest,
  });
};

const useSaveCustomer = () => {
  return useMutation(["saveCustomer"], saveCustomer, {
    onSuccess: (res) => {
      notifySuccess("Data Sucessfully Saved");
    },
    onError: (err) => {
      notifyError("Oops! Error Occured while saving data");
    },
  });
};

const useEditCustomer = () => {
  return useMutation(["editCustomer"], editCustomer, {
    onSuccess: (res) => {
      notifySuccess("Data Sucessfully Edited");
    },
    onError: (err) => {
      notifyError("Oops! Error Occured while editing data");
    },
  });
};

const useDeleteCustomer = () => {
  return useMutation(["deleteCustomer"], deleteCustomer, {
    onSuccess: (res) => {
      notifySuccess("Data Sucessfully Deleted");
    },
    onError: (err) => {
      notifyError("Oops! Error Occured while deleting data");
    },
  });
};

export {
  useGetCustomerList,
  useGetCustomerById,
  useSaveCustomer,
  useEditCustomer,
  useDeleteCustomer,
};
