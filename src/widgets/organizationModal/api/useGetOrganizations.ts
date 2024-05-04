import axios from "axios";
import { IOrganizations } from "../../../pages/organization/api/interfaces";
import { ORGANIZATION_URL, TOKEN } from "../../../shared/const";
import { useQuery } from "@tanstack/react-query";

export const fetchAllOrganization = () => {
  return axios.get<IOrganizations[]>(ORGANIZATION_URL, {
    headers: { Authorization: TOKEN() },
  });
};

export const useGetOrganizations = () =>
  useQuery({
    queryKey: ["all organizations"],
    queryFn: fetchAllOrganization,
    select: ({ data }) => data,
  });
