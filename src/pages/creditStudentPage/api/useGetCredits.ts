import axios from "axios";
import {
  STUDENT_CREDIT_URL,
  STUDENT_LESSON_URL,
  STUDENT_TEACHER_URL,
  TOKEN,
} from "../../../shared/const";
import { useQuery } from "@tanstack/react-query";

export const fetchStudentCredits = async () => {
  const { data: credits } = await axios.get<Credits[]>(STUDENT_CREDIT_URL, {
    headers: { Authorization: TOKEN() },
  });

  return Promise.all(
    credits.map(async (elem) => {
      const { data: lesson } = await axios.get<Lesson>(
        STUDENT_LESSON_URL + "/" + elem.lessonId,
        { headers: { Authorization: TOKEN() } }
      );

      const { data: teacher } = await axios.get<Teacher>(
        STUDENT_TEACHER_URL + "/" + lesson.userId,
        { headers: { Authorization: TOKEN() } }
      );

      const returnObj = {
        lesson: lesson.name,
        name: teacher.name,
        surname: teacher.surname,
        patronymic: teacher.patronymic,
        office: elem.office,
        date: elem.date,
        deadLine: elem.deadLine,
        id: elem.id,
      };

      return returnObj;
    })
  );
};

export const useGetStudentCredits = () =>
  useQuery({
    queryKey: ["my credits"],
    queryFn: fetchStudentCredits,
  });

interface Credits {
  id: string;
  lessonId: string;
  userId: string;
  deadLine: Date;
  date: Date;
  office: 110;
}

interface Teacher {
  name: string;
  surname: string;
  patronymic: string;
  email: string;
  phoneNumber: string;
}

interface Lesson {
  name: string;
  userId: string;
}
