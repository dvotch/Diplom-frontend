import { TOKEN } from "../const";
import { jwtDecode } from "Jwt-decode";
import { JwtPayload } from "../interfaces";

export const decodeJwt = () => {
  return jwtDecode<JwtPayload>(TOKEN() || "");
};
