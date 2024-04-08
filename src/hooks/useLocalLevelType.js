import { useQuery } from "@tanstack/react-query";

import { endpoints } from "src/core/endpoints";
import requests from "src/services/httpService";

const getLocalLevelList = () => {
  const updatedEndpoints = endpoints.localLevelType;
  return requests.get(updatedEndpoints);
};

const useGetLocalLevelList = (rest) => {
  return useQuery(["getLocalLevelList"], () => getLocalLevelList(), {
    ...rest,
  });
};

export { useGetLocalLevelList };
