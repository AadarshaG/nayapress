import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { endpoints } from "src/core/endpoints";
import { notifySuccess } from "src/utils/toast";

const signIn = (postData) => {
  const updatedEndpoints = endpoints.auth.signIn;
  console.log("here2");
  return axios.post(updatedEndpoints, postData);
};

export function useSignIn() {
  const history = useHistory();
  // const addUserDetails = useStore((state) => state.addUserDetails);

  return useMutation(signIn, {
    onSuccess: (response) => {
      console.log("yoooooooo");
      //   const { data } = response;
      //   token.setToken(data);
      console.log("here");
      //   history.replace("/");
      notifySuccess("Login Success!");
    },
  });
}
