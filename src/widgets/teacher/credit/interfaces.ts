export interface ICredit {
  id: string;
  date: Date;
  deadLine: Date;
  lessonId: string;
  office: string;
  userId: string;
}
export interface ICreditPost {
  date: Date;
  deadLine: Date;
  lessonId: string;
  office: number;
  userId: string;
}
export interface AddRecordModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export interface ILesson {
  id: string;
  name: string;
  userId: string;
  group: number;
  dateStart: Date;
  dateEnd: Date;
}
export interface IUser {
  id: string;
  name: string;
  surname: string;
}
export interface IUserGroup {
  id: string;
  name: string;
  surname: string;
}
