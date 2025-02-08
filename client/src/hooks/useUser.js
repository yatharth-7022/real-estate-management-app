import { useQuery } from "@tanstack/react-query";
import API from "../axios/axiosInstance";
import { GET_USER } from "../api";

const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await API.get(GET_USER);
      return data;
    },
    staleTime: 1000 * 60 * 10,
  });
};

export default useUser;
