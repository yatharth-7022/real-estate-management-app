import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import API from "../axios/axiosInstance";
import { SIGN_UP } from "../api";

const useSignUp = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData) => {
      const data = API.post(SIGN_UP, formData);
      return data;
    },
    onSuccess: (data) => {
      console.log(data, "this is data");
      localStorage.setItem("token", data.token);
      queryClient.setQueryData(["user"], data.user);
      navigate("/signin");
    },
    onError: (error) => {
      console.error(
        "Signup Error:",
        error.response?.data?.message || error.message
      );
    },
  });
};
export default useSignUp;
