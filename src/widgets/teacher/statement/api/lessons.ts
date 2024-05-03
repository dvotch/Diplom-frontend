import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ILesson } from "../interfaces";
import { TOKEN } from "../../../../shared/const";

export const fetchAllTeacherLessons = async () => {
  return await axios.get<ILesson[]>(
    "http://prod.dvotch.ru:3001/api/lesson/teacher",
    {
      headers: {
        Authorization: TOKEN(),
      },
    }
  );
};

export const useLessonsAll = () => {
  return useQuery({
    queryKey: ["lessonsAll teacher"],
    queryFn: () => fetchAllTeacherLessons(),
    select: ({ data }) => data,
  });
};
