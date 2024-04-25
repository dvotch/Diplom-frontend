import { memo } from "react";

export const QuaterButtons = memo(({ onClick }: props) => {
  return (
    <nav className="flex ml-20 pt-2 dark:text-white " onClick={onClick}>
      <button
        className="active grow dark:text-white dark:active:text-opacity-35"
        value={1}
      >
        1 семестр
      </button>
      <button className="grow dark:active:text-opacity-35" value={2}>
        2 семестр
      </button>
      <button className="grow dark:active:text-opacity-35" value={3}>
        3 семестр
      </button>
      <button className="grow dark:active:text-opacity-35" value={4}>
        4 семестр
      </button>
      <button className="grow dark:active:text-opacity-35" value={5}>
        5 семестр
      </button>
      <button className="grow  dark:active:text-opacity-35" value={6}>
        6 семестр
      </button>
      <button className="grow dark:active:text-opacity-35" value={7}>
        7 семестр
      </button>
      <button className="grow dark:active:text-opacity-35" value={8}>
        8 семестр
      </button>
    </nav>
  );
});

interface props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
