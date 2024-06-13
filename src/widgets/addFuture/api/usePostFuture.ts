import axios from "axios";
import { ADMIN_FUTURE_URL, TOKEN } from "../../../shared/const";
import { IPostFuture } from "../../addFuture/api/interfaces";
import { useMutation } from "@tanstack/react-query";

export const PostFuture = (data: IPostFuture) =>
  axios.post(ADMIN_FUTURE_URL, data, {
    headers: {
      "Content-Type": `multipart/form-data`,
      Authorization: TOKEN(),
    },
  });

export const usePostFuture = () =>
  useMutation({
    mutationFn: (data: IPostFuture) => PostFuture(data),
  });
