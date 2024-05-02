import React from "react";

type PaginationProps = {
  onNextPageClick: () => void;
  onPrevPageClick: () => void;
  disable: {
    left: boolean;
    right: boolean;
  };
  nav?: {
    current: number;
    total: number;
  };
};

export const Pagination = React.memo((props: PaginationProps) => {
  const { nav = null, disable, onNextPageClick, onPrevPageClick } = props;

  const handleNextPageClick = () => {
    onNextPageClick();
  };
  const handlePrevPageClick = () => {
    onPrevPageClick();
  };

  return (
    <div className="paginator">
      <button
        className="arrow"
        type="button"
        onClick={handlePrevPageClick}
        disabled={disable.left}
      >
        {"<"}
      </button>
      {nav && (
        <span className="navigation">
          {nav.current + 1} / {nav.total}
        </span>
      )}
      <button
        className="arrow"
        type="button"
        onClick={handleNextPageClick}
        disabled={disable.right}
      >
        {">"}
      </button>
    </div>
  );
});

// if (countPages < 8) {
//   const startWith2Array = new Array(Math.round(countPages - 1)).fill(" ");
//   return (
//     <>
//       <Button value="0">1</Button>
//       {startWith2Array.map((_, index) => (
//         <Button value={(index + 1).toString()} key={index}>
//           {index + 2}
//         </Button>
//       ))}
//     </>
//   );
// }

// if (currentPage < 4) {
//   return (
//     <>
//       <Button value="0">1</Button>
//       <Button value="1">2</Button>
//       <Button value="2">3</Button>
//       <Button value="3">4</Button>
//       <Button value="4">5</Button>
//       <Button value="5">6</Button>
//       <div className="w-12 grid items-end justify-center">...</div>
//       <Button value={(countPages - 1).toString()}>{countPages - 1}</Button>
//     </>
//   );
// }
// return (
//   <>
//     <Button value="0">1</Button>
//     <div className="w-12 grid items-end justify-center">...</div>
//     <Button value={(currentPage - 2).toString()}>{currentPage - 1}</Button>
//     <Button value={(currentPage - 1).toString()}>{currentPage}</Button>
//     <Button value={currentPage.toString()}>{currentPage + 1}</Button>
//     <Button value={(currentPage + 1).toString()}>{currentPage + 2}</Button>
//     <Button value={(currentPage + 2).toString()}>{currentPage + 3}</Button>
//     <div className="w-12 grid items-end justify-center">...</div>
//     <Button value={(countPages - 1).toString()}>{countPages - 1}</Button>
//   </>
