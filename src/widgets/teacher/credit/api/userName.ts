import axios from "axios";
import { IUser } from "../interfaces";
import { useQuery } from "@tanstack/react-query";

export const fetchUserName = async () => {
  const TOKEN = localStorage.getItem("token");
  return await axios.get<IUser[]>("http://prod.dvotch.ru:3001/api/user/205", {
    headers: {
      Authorization: TOKEN,
    },
  });
};

export const useUserName = () => {
  return useQuery({
    queryKey: ["name user"],
    queryFn: () => fetchUserName(),
    select: ({ data }) => data,
  });
};
