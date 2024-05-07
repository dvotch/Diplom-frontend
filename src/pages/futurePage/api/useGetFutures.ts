import axios from "axios";
import { STUDENT_FUTURE_URL, TOKEN } from "../../../shared/const";
import { useQuery } from "@tanstack/react-query";

export const fetchFutures = () =>
  axios.get<IFuture>(STUDENT_FUTURE_URL, {
    headers: { Authorization: TOKEN() },
  });

export const useGetFutures = () =>
  useQuery({
    queryKey: ["my futures"],
    queryFn: fetchFutures,
    select: ({ data }) => data,
  });

interface IFuture {
  works: IWork[];
  learns: ILearn[];
}

interface IWork {
  id: string;
  name: string;
  place: string;
  cost: number;
  phone: string;
  url: string;
}

interface ILearn {
  id: string;
  name: string;
  place: string;
  cost: number;
  description: string;
  phone: string;
  url: string;
  photo: string;
}
