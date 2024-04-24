import { Navigate, Outlet } from "react-router-dom";
import { decodeJwt } from "../../shared/helpers/decodeJwt";

export const StudentGuardRoute = () => {
  const token = decodeJwt();
  const isStudent = token.roles.includes("STUDENT");
  console.log(isStudent);
  return isStudent ? <Outlet /> : <Navigate to="/forbidden" replace />;
};
