import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { route } from "./app/routes/routes";
import { Context } from "./app/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Context children={<RouterProvider router={route}></RouterProvider>} />
    </QueryClientProvider>
  </React.StrictMode>
);
