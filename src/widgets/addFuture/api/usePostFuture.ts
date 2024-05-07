import axios from "axios";
import { ADMIN_FUTURE_URL } from "../../../shared/const";
import { IPostFuture } from "../../addFuture/api/interfaces";
import { useMutation } from "@tanstack/react-query";

export const PostFuture = (data: IPostFuture) =>
  axios.post(ADMIN_FUTURE_URL, data, {
    headers: {
      "Content-Type": `multipart/form-data`,
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVmNWE1OWQ3LTdlNjYtNDdkZi04MzcxLWUwMmNmNDA4OGM0YSIsImVtYWlsIjoiYWRtMiIsInJvbGVzIjpbIlJFU09VUkNFU19ERVBBUlRNRU5UIl0sInNwZWNpYWxpemF0aW9uIjoiMDkuMDIuMDcg0J_RgNC-0LPRgNCw0LzQvNC40YDQstC-0LDQvdC40LUg0LIg0LrQvtC80L_RjNGO0YLQtdGA0L3Ri9GFINGB0LjRgdGC0LXQvNCw0YUuIiwiZ3JvdXAiOjIwNSwibmFtZSI6ItCQ0JTQnNCY0J0iLCJzdXJuYW1lIjoi0J3QlSDQo9CU0JDQm9Cv0KLQrCIsImlhdCI6MTcxNTA4MDY4MiwiZXhwIjoxNzE1Njg1NDgyfQ.qSopLNdgYndlG1Ea9QRk-IBBjB4CtwsaU8-UjlpcfQo",
    },
  });

export const usePostFuture = () =>
  useMutation({
    mutationFn: (data: IPostFuture) => PostFuture(data),
  });
