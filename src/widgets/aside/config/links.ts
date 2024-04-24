export const LinksGeneral: LinkData[] = [
  {
    path: "/portfolio",
    text: "Моё портфолио",
  },
];

export const LinksStudent: LinkData[] = [
  {
    path: "/student/statement",
    text: "Журнал",
  },
  ...LinksGeneral,
  {
    path: "/student/organizations",
    text: "Членство",
  },
  {
    path: "/student/credit",
    text: "Задолженности",
  },
  {
    path: "/student/feature",
    text: "Возможности",
  },
  ...LinksGeneral,
];

export const LinksTeacher: LinkData[] = [
  {
    path: "/teacher/statement",
    text: "Журнал",
  },
  ...LinksGeneral,
  {
    path: "/teacher/credit",
    text: "Задолженности",
  },
];

export interface LinkData {
  path: string;
  text?: string;
}
