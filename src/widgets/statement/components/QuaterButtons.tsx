import { memo } from "react";

export const QuaterButtons = memo(({ onClick }: props) => {
  return (
    <nav className="flex ml-20 pt-2" onClick={onClick}>
      <button className="active grow" value={1}>
        1 семестр
      </button>
      <button className="grow" value={2}>
        2 семестр
      </button>
      <button className="grow" value={3}>
        3 семестр
      </button>
      <button className="grow" value={4}>
        4 семестр
      </button>
      <button className="grow" value={5}>
        5 семестр
      </button>
      <button className="grow" value={6}>
        6 семестр
      </button>
      <button className="grow" value={7}>
        7 семестр
      </button>
      <button className="grow" value={8}>
        8 семестр
      </button>
    </nav>
  );
});

interface props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
