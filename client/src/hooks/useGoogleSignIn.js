import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import API from "../axios/axiosInstance";
import { GET_GOOGLE_SIGNIN } from "../api";

export const useGoogleSignIn = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userData) => {
      const data = API.post(GET_GOOGLE_SIGNIN, userData);
      return data;
    },
    onSuccess: ({ data }) => {
      if (!data.token) {
        console.warn("No token received from backend!");
        return;
      }
      localStorage.setItem("token", data.token);
      localStorage.setItem("googleUser", JSON.stringify(data.user));
      queryClient.setQueryData(["googleUser"], data.user);
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
