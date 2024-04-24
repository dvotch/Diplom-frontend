export const LinksStudent: LinkData[] = [
  {
    path: "/student/statement",
    text: "Журнал",
  },
  {
    path: "/student/portfolio",
    text: "Моё портфолио",
  },
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
];

export const LinksTeacher: LinkData[] = [
  {
    path: "/teacher/statement",
    text: "Журнал",
  },
  {
    path: "/teacher/portfolio",
    text: "Моё портфолио",
  },
  {
    path: "/teacher/credit",
    text: "Задолженности",
  },
];

export interface LinkData {
  path: string;
  text?: string;
}
