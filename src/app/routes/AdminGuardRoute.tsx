import { Navigate, Outlet } from "react-router-dom";
import { decodeJwt } from "../../shared/helpers/decodeJwt";

export const AdminGuardRoute = () => {
  const token = decodeJwt();
  const isTeacher = token.roles.includes("RESOURCES_DEPARTMENT");
  return isTeacher ? <Outlet /> : <Navigate to="/forbidden" replace />;
};
