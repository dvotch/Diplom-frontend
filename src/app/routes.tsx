import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { RootLayot } from "./layout/Root";
import { Statement } from "../widgets/statement/ui";
import { NotFound } from "../pages/404/NotFound";

export const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<RootLayot />} path="/">
        <Route element={<Statement />} index path="statement" />
      </Route>
      <Route element={<NotFound />} path="*" />
    </Route>
  )
);
