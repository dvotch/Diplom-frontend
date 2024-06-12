import { useState } from "react";
import { useUserGroup } from "../../credit/api/userGroup";
import { useLessonsAll } from "../api/lessons";

import { allMonth } from "./months";
import { UserCard } from "./userCard";

export const Quarter = ({
  group,
  currentLesson,
}: {
  group: number;
  currentLesson: string;
}) => {
  const days: number[] = [];
  const [monthCompare, setMonthCompare] = useState("");
  const [selectedMark, setSelectedMark] = useState("2");
  const handleMarkSelection = (mark: string) => {
    setSelectedMark(mark);
  };

  const { data: lessons } = useLessonsAll();
  const { data: usersGroup } = useUserGroup(group);
  for (let i = 1; i <= 31; i++) days.push(i);
  const handelClick = (event: React.SyntheticEvent) => {
    const button = event.target;
    if (button instanceof HTMLButtonElement) {
      setMonthCompare(button.value);
      document.querySelector("#month > .active")?.classList.remove("active");
      button.classList.add("active");
    }
  };
  return (
    <div className="">
      <div className="flex justify-between">
        {lessons?.map((value) => {
          if (currentLesson === value.id) {
            const dateStart = new Date(value.dateStart);
            const monthStart = dateStart.getMonth();
            const dateEnd = new Date(value.dateEnd);
            const monthEnd = dateEnd.getMonth();
            const months = [];
            for (let i = monthStart; i <= monthEnd; i++) {
              months.push(i);
            }
            return (
              <div onClick={handelClick} id="month">
                {months.map((monthIndex, index) => (
                  <button className="ml-4" key={index} value={monthIndex}>
                    {allMonth[monthIndex]}
                  </button>
                ))}
              </div>
            );
          }
        })}
        <div className=" ">
          <div className="" id="mark">
            <button className="ml-2 " onClick={() => handleMarkSelection("0")}>
              Удалить
            </button>
            <button className="ml-2" onClick={() => handleMarkSelection("Н")}>
              Н
            </button>
            <button className="ml-2" onClick={() => handleMarkSelection("Н/Б")}>
              Н/Б
            </button>
            <button
              className="ml-2 text-red-600"
              onClick={() => handleMarkSelection("2")}
            >
              2
            </button>
            <button className="ml-2" onClick={() => handleMarkSelection("3")}>
              3
            </button>
            <button className="ml-2" onClick={() => handleMarkSelection("4")}>
              4
            </button>
            <button className="ml-2" onClick={() => handleMarkSelection("5")}>
              5
            </button>
          </div>
        </div>
      </div>
      <table className="table-fixed border-2 border-black row-start-3 h-1/2  dark:border-white w-full">
        <thead>
          <tr>
            <th className="w-20"></th>
            {days.map((value) => {
              return (
                <th className="border-[1px] border-red-500  w-6" key={value}>
                  {value}
                </th>
              );
            })}
            <td className="text-center font-semibold w-9 text-red-600 text-xs">
              ИТОГ
            </td>
          </tr>
        </thead>
        <tbody>
          {usersGroup &&
            usersGroup.map((usersGroup) => {
              return (
                <UserCard
                  user={usersGroup}
                  lesson={currentLesson}
                  monthCompare={monthCompare}
                  selectedMark={selectedMark}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
