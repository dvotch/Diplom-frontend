import axios from "axios";
import { ISpecialization } from "./interfaces";
import { SPECIALIZATION_URL, TOKEN } from "../../../shared/const";
import { useQuery } from "@tanstack/react-query";

export const fetchSpecializations = () =>
  axios.get<ISpecialization[]>(SPECIALIZATION_URL, {
    headers: { Authorization: TOKEN() },
  });

export const useGetSpecializations = () =>
  useQuery({
    queryKey: ["all specializations"],
    queryFn: fetchSpecializations,
    select: ({ data }) => data,
  });
