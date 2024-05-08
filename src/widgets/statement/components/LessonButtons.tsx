import { memo } from "react";
import { ILesson } from "../interfaces";
import { useAverageMark } from "../api/useAverageMark";

export const LessonButton = memo(({ onClick, lessons }: props) => {
  return (
    <div className="row-start-3 flex flex-col gap-y-8 mt-8" onClick={onClick}>
      {lessons &&
        lessons.map((elem) => {
          const { data } = useAverageMark(elem.id);
          const mark = data && !isNaN(+data) ? Number(data).toFixed(2) : "";
          return (
            <button
              className="text-left p-[4px] dark:text-white dark:active:text-opacity-35 "
              key={elem.id}
              value={elem.id}
            >
              {elem.name + " " + mark}
            </button>
          );
        })}
    </div>
  );
});

interface props {
  onClick: React.MouseEventHandler<HTMLElement>;
  lessons: ILesson[] | undefined;
}
