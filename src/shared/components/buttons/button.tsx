interface props {
  text: string;
}
export const Button = ({ text }: props) => {
  return (
    <button className=" border-[1px] border-violet-900 text-violet-900 rounded-xl px-10 ml-4 font-bold text-xl">
      {text}
    </button>
  );
};
