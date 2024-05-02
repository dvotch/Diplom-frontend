import { Button } from "../../../../shared/components";

export const PaginationButton = ({
  countPages,
  currentPage,
}: {
  countPages: number;
  currentPage: number;
}) => {
  if (countPages < 8) {
    const startWith2Array = new Array(Math.round(countPages - 1)).fill(" ");
    return (
      <>
        <Button value="0">1</Button>
        {startWith2Array.map((_, index) => (
          <Button value={(index + 1).toString()} key={index}>
            {index + 2}
          </Button>
        ))}
      </>
    );
  }

  if (currentPage < 4) {
    return (
      <>
        <Button value="0">1</Button>
        <Button value="1">2</Button>
        <Button value="2">3</Button>
        <Button value="3">4</Button>
        <Button value="4">5</Button>
        <Button value="5">6</Button>
        <div className="w-12 grid items-end justify-center">...</div>
        <Button value={(countPages - 1).toString()}>{countPages - 1}</Button>
      </>
    );
  }
  return (
    <>
      <Button value="0">1</Button>
      <div className="w-12 grid items-end justify-center">...</div>
      <Button value={(currentPage - 2).toString()}>{currentPage - 1}</Button>
      <Button value={(currentPage - 1).toString()}>{currentPage}</Button>
      <Button value={currentPage.toString()}>{currentPage + 1}</Button>
      <Button value={(currentPage + 1).toString()}>{currentPage + 2}</Button>
      <Button value={(currentPage + 2).toString()}>{currentPage + 3}</Button>
      <div className="w-12 grid items-end justify-center">...</div>
      <Button value={(countPages - 1).toString()}>{countPages - 1}</Button>
    </>
  );
};
