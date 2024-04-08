import { useMutation, useQuery } from "@tanstack/react-query";
import { notifyError, notifySuccess } from "src/utils/toast";

import { endpoints } from "src/core/endpoints";
import requests from "src/services/httpService";

const getOrderList = () => {
  const updatedEndpoints = endpoints.order;
  return requests.get(updatedEndpoints + "/list?expand=true");
};

const getOrderById = (uuid) => {
  const updatedEndpoints = endpoints.order;
  return requests.get(updatedEndpoints + "/" + uuid);
};

const deleteOrder = (uuid) => {
  const updatedEndpoints = endpoints.order;
  return requests.delete(updatedEndpoints + "/" + uuid);
};

const saveOrder = (data) => {
  const updatedEndpoints = endpoints.order;
  return requests.post(updatedEndpoints + "/register", data);
};

const editOrder = (data) => {
  const updatedEndpoints = endpoints.order;
  return requests.patch(updatedEndpoints + "/" + data?.uuid, data);
};

const customerOrder = (customerUUID) => {
  const updatedEndpoints = endpoints.order;
  return requests.get(updatedEndpoints + "/list/" + customerUUID);
};

const useGetOrderList = (rest) => {
  return useQuery(["getOrderList"], () => getOrderList(), {
    ...rest,
  });
};
const useGetCustomerOrderList = (customerUUID,rest) => {
  return useQuery(["customerOrder"], () => customerOrder(customerUUID), {
    ...rest,
  });
};

const useGetOrderById = (uuid, rest) => {
  return useQuery(["getOrderById"], () => getOrderById(uuid), {
    ...rest,
  });
};

const useSaveOrder = () => {
  return useMutation(["saveOrder"], saveOrder, {
    onSuccess: (res) => {
      notifySuccess("Data Sucessfully Saved");
    },
    onError: (err) => {
      notifyError("Oops! Error Occured while saving data");
    },
  });
};

const useEditOrder = () => {
  return useMutation(["editOrder"], editOrder, {
    onSuccess: (res) => {
      notifySuccess("Data Sucessfully Edited");
    },
    onError: (err) => {
      notifyError("Oops! Error Occured while editing data");
    },
  });
};

const useDeleteOrder = () => {
  return useMutation(["deleteOrder"], deleteOrder, {
    onSuccess: (res) => {
      notifySuccess("Data Sucessfully Deleted");
    },
    onError: (err) => {
      notifyError("Oops! Error Occured while deleting data");
    },
  });
};

export {
  useGetOrderList,
  useGetOrderById,
  useSaveOrder,
  useEditOrder,
  useDeleteOrder,
  useGetCustomerOrderList,
};
