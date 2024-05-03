import React, { memo, useMemo } from "react";
import { useLessonsAll } from "../api/lessons";

export const GroupButtons = memo(({ onClick }: props) => {
  const { data: lessonsAll } = useLessonsAll();

  const uniqueGroups = useMemo(() => {
    if (!lessonsAll) return [];

    const groupsSet = new Set(lessonsAll.map((elem) => elem.group));
    return Array.from(groupsSet);
  }, [lessonsAll]);

  return (
    <nav className="flex ml-20 pt-2 dark:text-white " onClick={onClick}>
      {uniqueGroups.map((group) => (
        <button
          className="text-left p-[4px] dark:text-white dark:active:text-opacity-35 mr-2 "
          key={group}
          value={group}
        >
          {group}
        </button>
      ))}
    </nav>
  );
});
interface props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
