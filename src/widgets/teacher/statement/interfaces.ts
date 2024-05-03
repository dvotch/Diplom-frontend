export interface ILesson {
  id: string;
  name: string;
  userId: string;
  group: number;
  dateStart: string;
  dateEnd: Date;
}

export interface IMark {
  id: string;
  statementId: string;
  mark: number;
  date: Date;
}

export interface IStatement {
  id: string;
  userId: string;
  lessonId: string;
  quarter: number;
}
export interface IUser {
  id: string;

  name: string;
  surname: string;
}
