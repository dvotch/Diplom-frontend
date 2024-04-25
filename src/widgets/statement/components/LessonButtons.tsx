import { memo } from "react";
import { ILesson } from "../interfaces";

export const LessonButton = memo(({ onClick, lessons }: props) => {
  return (
    <div className="row-start-3 flex flex-col gap-y-8 mt-8" onClick={onClick}>
      {lessons &&
        lessons.map((elem) => (
          <button
            className="text-left p-[4px] dark:text-white dark:active:text-opacity-35 "
            key={elem.id}
            value={elem.id}
          >
            {elem.name}
          </button>
        ))}
    </div>
  );
});

interface props {
  onClick: React.MouseEventHandler<HTMLElement>;
  lessons: ILesson[] | undefined;
}
