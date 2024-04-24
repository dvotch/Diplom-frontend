import clsx from "clsx";

export const Hr = ({ className }: props) => {
  return (
    <hr
      className={clsx("border-b-2 border-gray-200 w-[98%] mt-5", className)}
    />
  );
};

interface props {
  className?: string;
}
