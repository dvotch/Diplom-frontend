import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const fetchGroupTeacher = async () => {
  const TOKEN = localStorage.getItem("token");
  return await axios.get<string[]>(
    "http://prod.dvotch.ru:3001/api/lesson/teacher/my/group",
    {
      headers: {
        Authorization: TOKEN,
      },
    }
  );
};

export const useGroupTeacher = () => {
  return useQuery({
    queryKey: ["group teacher"],
    queryFn: () => fetchGroupTeacher(),
    select: ({ data }) => data,
  });
};
