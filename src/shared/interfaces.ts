export interface JwtPayload {
  id: string;
  email: string;
  roles: roles[];
  organizationId: string;
  group: number;
  specialization: string;
  name: string;
  surname: string;
}

export type roles = "STUDENT" | "TEACHER" | "RESOURCES_DEPARTMENT";
