import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IMark } from "../interfaces";
import { TOKEN } from "../../../shared/const";

export const fetchStudentMarks = async (lessonId: string) => {
  return await axios.get<IMark[]>(
    "http://prod.dvotch.ru:3001/api/student/marks/" + lessonId,
    {
      headers: {
        Authorization: TOKEN(),
      },
    }
  );
};

export const useMarks = (lessonId: string) => {
  return useQuery({
    queryKey: ["marks student", lessonId],
    queryFn: () => fetchStudentMarks(lessonId),
    select: ({ data }) => data,
    enabled: !!lessonId,
  });
};
