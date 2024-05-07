import { FutureCard } from "../../widgets/future/futureCard/ui";
import { FutureSwiper } from "../../widgets/future/futureSwiper/ui";
import { useGetFutures } from "./api/useGetFutures";

export const FuturePage = () => {
  const { data } = useGetFutures();
  return (
    <div>
      <h1 className=" text-5xl">Возможности</h1>
      {data?.works && <FutureSwiper data={data.works} />}
      {data?.learns && <FutureCard data={data.learns} />}
    </div>
  );
};
