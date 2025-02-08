import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import API from "../axios/axiosInstance";
import { SIGN_IN } from "../api";

const useSignIn = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData) => {
      const data = API.post(SIGN_IN, formData);
      return data;
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      queryClient.setQueryData(["user"], data.user);
      navigate("/");
    },
    onError: (error) => {
      console.error(
        "Signup Error:",
        error.response?.data?.message || error.message
      );
    },
  });
};
export default useSignIn;
