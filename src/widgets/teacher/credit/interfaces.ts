export interface ICredit {
  id: string;
  date: Date;
  deadLine: Date;
  lessonId: string;
  office: string;
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