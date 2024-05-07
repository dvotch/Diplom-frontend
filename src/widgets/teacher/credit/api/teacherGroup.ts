import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IGroupMy } from "../interfaces";

export const fetchGroupLesson = async () => {
  const TOKEN = localStorage.getItem("token");
  return await axios.get<IGroupMy[]>(
    "http://prod.dvotch.ru:3001/api/lesson/teacher/my/group",
    {
      headers: {
        Authorization: TOKEN,
      },
    }
  );
};

export const useGroupLesson = () => {
  return useQuery({
    queryKey: ["lessons student"],
    queryFn: () => fetchGroupLesson(),
    select: ({ data }) => data,
  });
};
