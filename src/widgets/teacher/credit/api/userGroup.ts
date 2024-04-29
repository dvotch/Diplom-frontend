import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IUserGroup } from "../interfaces";

export const fetchUserGroup = async (group: string) => {
  const TOKEN = localStorage.getItem("token");
  return await axios.get<IUserGroup[]>(
    "http://prod.dvotch.ru:3001/api/user/" + group,
    {
      headers: {
        Authorization: TOKEN,
      },
    }
  );
};

export const useUserGroup = (group: string) => {
  return useQuery({
    queryKey: ["users group", group],
    queryFn: () => fetchUserGroup(group),
    select: ({ data }) => data,
  });
};
