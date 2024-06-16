import { Quarter } from "./config/quarters";
import { useState } from "react";
import { useLessons } from "./api/lessonsGroup";
import { LessonButton } from "./components";
import { GroupButtons } from "./components/GroupButtons";

export const StatementTeacher = () => {
  const [group, setGroup] = useState(205);
  const [currentLesson, setCurrentLesson] = useState("");
  const { data: lessons } = useLessons(group || 205);

  const changeLesson = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target instanceof HTMLButtonElement) {
      const button = e.target;
      setCurrentLesson(button.value);
      document.querySelector("div > .active")?.classList.remove("active");
      button.classList.add("active");
    }
  };

  const changeGroup = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target instanceof HTMLButtonElement) {
      setCurrentLesson("");
      const button = e.target;
      document.querySelector("nav > .active")?.classList.remove("active");
      button.classList.add("active");
      setGroup(+button.value);
    }
  };

  return (
    <div className=" grid grid-cols-statement grid-rows-statement pr-5 dark:text-white">
      <h1 className=" text-5xl dark:text-white ">Журнал</h1>

      {group ? (
        <LessonButton lessons={lessons} onClick={changeLesson} />
      ) : (
        <></>
      )}
      <div></div>
      <div></div>
      <div>
        <GroupButtons onClick={changeGroup} />
      </div>
      <div id="quarter">
        {currentLesson ? (
          <Quarter currentLesson={currentLesson} group={group} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
