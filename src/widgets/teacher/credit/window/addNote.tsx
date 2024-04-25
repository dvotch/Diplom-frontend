import { useCredit } from "../api/credits";
import { AddRecordModalProps } from "../interfaces";
import crest from "../../../../shared/assets/crest.png";
import { formatDateTime } from "../api/dateConvertString";
import { useLessons } from "../api/lessons";
export const AddRecordModal = ({ isOpen, onClose }: AddRecordModalProps) => {
  const { data: lessons } = useLessons();
  const { data: credits } = useCredit();
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-30">
          <div className="flex-row bg-white p-4  shadow-lg w-3/12 h-9/12 rounded-lg">
            <div className="flex justify-center">
              <h1 className="font-bold content-center text-gray-500 opacity-50">
                Добавить запись
              </h1>
              <button className="">
                <img
                  src={crest}
                  alt=""
                  className="w-10 "
                  onClick={() => {
                    onClose();
                  }}
                />
              </button>
            </div>
            <div>
              <div className="flex-col font-regular text-indigo-950">
                Выберите предмет
              </div>
              <select
                className="w-56 border-solid mt-2 border-2  font-regular rounded-lg"
                name="email"
              >
                <option value="" disabled selected>
                  Название
                </option>
                {credits &&
                  credits.map((credits) => <option>{credits.lessonId}</option>)}
              </select>
            </div>
            <div>
              <div className="flex-col font-regular text-indigo-950">
                Выберите студента
              </div>
              <select
                className="w-56 border-solid mt-2 border-2  font-regular rounded-lg"
                name="email"
              >
                <option value="" disabled selected>
                  ФИО
                </option>
                {credits &&
                  credits.map((credits) => <option>{credits.userId}</option>)}
              </select>
            </div>
            <div>
              <div className="flex-col font-regular text-indigo-950">Дата</div>
              <select
                className="w-56 border-solid mt-2 border-2  font-regular rounded-lg"
                name="email"
              >
                <option value="" disabled selected>
                  Время
                </option>
                {credits &&
                  credits.map((credits) => (
                    <option>{formatDateTime(credits.date.toString())}</option>
                  ))}
              </select>
            </div>
            <div>
              <div className="flex-col font-regular text-indigo-950">
                Кабинет
              </div>
              <select
                className="w-56 border-solid mt-2 border-2  font-regular rounded-lg"
                name="email"
              >
                <option value="" disabled selected>
                  Номер
                </option>
                {credits &&
                  credits.map((credits) => <option>{credits.office}</option>)}
              </select>
            </div>
            <div>
              <div className="flex-col font-regular text-indigo-950">
                Выберите группу
              </div>
              <select
                className="w-56 border-solid mt-2 border-2  font-regular rounded-lg"
                name="email"
              >
                <option value="" disabled selected>
                  Номер
                </option>
                {lessons &&
                  lessons.map((lessons) => <option>{lessons.group}</option>)}
              </select>
            </div>
            <div>
              <div className="flex-col font-regular text-indigo-950">
                Крайний срок
              </div>
              <select
                className="w-56 border-solid mt-2 border-2  font-regular rounded-lg"
                name="email"
              >
                <option value="" disabled selected>
                  Время
                </option>
                {credits &&
                  credits.map((credits) => (
                    <option>
                      {" "}
                      {formatDateTime(credits.deadLine.toString())}
                    </option>
                  ))}
              </select>
            </div>

            <div className="flex justify-between">
              <button className="bg-purple-800 text-lg text-white font-bold rounded-lg mt-4 ml-4 w-24">
                Добавить
              </button>
              <button
                className="border-[1px] border-purple-800 text-purple-800 rounded-xl   font-bold mt-4 mr-4 w-24"
                onClick={() => {
                  onClose();
                }}
              >
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddRecordModal;
