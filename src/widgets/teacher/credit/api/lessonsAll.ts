import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ILesson } from "../interfaces";

export const fetchStudentLessonsAll = async () => {
  const TOKEN = localStorage.getItem("token");
  return await axios.get<ILesson[]>(
    "http://prod.dvotch.ru:3001/api/lesson/teacher/",
    {
      headers: {
        Authorization: TOKEN,
      },
    }
  );
};

export const useLessonsAll = () => {
  return useQuery({
    queryKey: ["lessonsAll student"],
    queryFn: () => fetchStudentLessonsAll(),
    select: ({ data }) => data,
  });
};
