import { memo } from "react";
import { ILesson } from "../interfaces";
import { useAverageMark } from "../api/useAverageMark";

export const LessonButton = memo(({ onClick, lessons }: props) => {
  return (
    <div className="row-start-3 flex flex-col gap-y-8 mt-8" onClick={onClick}>
      {lessons &&
        lessons.map((elem) => <Lesson id={elem.id} name={elem.name} />)}
    </div>
  );
});

const Lesson = memo(({ id, name }: { id: string; name: string }) => {
  const { data } = useAverageMark(id);
  const mark = data && !isNaN(+data) ? Number(data).toFixed(2) : "";
  return (
    <button
      className="text-left p-[4px] dark:text-white dark:active:text-opacity-35 "
      key={id}
      value={id}
    >
      {name + " " + mark}
    </button>
  );
});

interface props {
  onClick: React.MouseEventHandler<HTMLElement>;
  lessons: ILesson[] | undefined;
}
