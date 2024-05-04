import axios from "axios";
import { IOrganizations } from "./interfaces";
import { STUDENT_ORGANIZATION_URL, TOKEN } from "../../../shared/const";
import { useQuery } from "@tanstack/react-query";

export const fetchMyOrganizations = () => {
  return axios.get<IOrganizations[]>(STUDENT_ORGANIZATION_URL, {
    headers: {
      Authorization: TOKEN(),
    },
  });
};

export const useGetMyOrganizations = () =>
  useQuery({
    queryKey: ["organizations"],
    queryFn: fetchMyOrganizations,
    select: ({ data }) => data,
  });
