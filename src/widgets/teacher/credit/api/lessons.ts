import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ILesson } from "../interfaces";

export const fetchStudentLessons = async () => {
  const TOKEN = localStorage.getItem("token");
  return await axios.get<ILesson[]>(
    "http://prod.dvotch.ru:3001/api/lesson/teacher",
    {
      headers: {
        Authorization: TOKEN,
      },
    }
  );
};

export const useLessons = () => {
  return useQuery({
    queryKey: ["lessons student"],
    queryFn: () => fetchStudentLessons(),
    select: ({ data }) => data,
  });
};
