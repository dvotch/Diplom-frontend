import { useQueryClient } from "@tanstack/react-query";
import { Quarter } from "./config/quarters";
import { useState } from "react";
import { useLessons } from "./api/lessons";
import { useMarks } from "./api/marks";
import { LessonButton, QuaterButtons } from "./components";

export const Statement = () => {
  const [quater, setQuater] = useState(1);
  const [lesson, setLesson] = useState("");
  const { data: lessons, isLoading: isLoadingLessons } = useLessons(quater);
  const { data: marks, isLoading: isLoadingMarks } = useMarks(lesson);
  const odd = quater % 2 === 1;

  const changeQuater = (e: React.MouseEvent<HTMLElement>) => {
    const button = e.target as HTMLButtonElement;
    document.querySelector("nav > .active")?.classList.remove("active");
    button.classList.add("active");
    setQuater(+button.value);
    setLesson("");
  };

  const changeLesson = (e: React.MouseEvent<HTMLElement>) => {
    const button = e.target as HTMLButtonElement;
    document.querySelector("div > .active")?.classList.remove("active");
    button.classList.add("active");
    setLesson(button.value);
  };

  return (
    <div className=" grid grid-cols-statement grid-rows-statement pr-5">
      <h1 className=" text-5xl">Журнал</h1>
      <QuaterButtons onClick={changeQuater} />
      {isLoadingLessons ? (
        <div>Loading</div>
      ) : (
        <LessonButton lessons={lessons} onClick={changeLesson} />
      )}

      {lesson && marks && <Quarter odd marks={marks} />}
    </div>
  );
};
