export interface ILesson {
  id: string;
  name: string;
  userId: string;
  group: number;
  dateStart: Date;
  dateEnd: Date;
}

export interface IMark {
  id: string;
  statementId: string;
  mark: number;
  date: Date;
}
