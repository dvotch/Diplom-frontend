import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { route } from "./app/routes";
import { Context } from "./app/context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Context children={<RouterProvider router={route}></RouterProvider>} />
  </React.StrictMode>
);
