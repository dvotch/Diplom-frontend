import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { ILesson } from "../../../statement/interfaces";
import { TOKEN } from "../../../../shared/const/token";

export const fetchStudentLessons = async (quater: number) => {
  return await axios.get<ILesson[]>(
    "http://prod.dvotch.ru:3001/api/student/lessons/" + quater,
    {
      headers: {
        Authorization: TOKEN(),
      },
    }
  );
};

export const useLessons = (quater: number) => {
  return useQuery({
    queryKey: ["lessons student", quater],
    queryFn: () => fetchStudentLessons(quater),
    select: ({ data }) => data,
  });
};
