import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ILesson } from "../interfaces";
import { TOKEN } from "../../../../shared/const";

export const fetchStudentLessons = async (group: number) => {
  return await axios.get<ILesson[]>(
    "http://prod.dvotch.ru:3001/api/lesson/teacher/" + group,
    {
      headers: {
        Authorization: TOKEN(),
      },
    }
  );
};

export const useLessons = (group: number) => {
  return useQuery({
    queryKey: ["lessons student", group],
    queryFn: () => fetchStudentLessons(group),
    select: ({ data }) => data,
  });
};
