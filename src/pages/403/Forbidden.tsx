import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/components";
import Svg403 from "./Svg403";

export const Forbidden = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div>
      <Svg403 />
      <h1>Нет доступа</h1>
      <p>
        Если вы уверены, что вам нужна эта страница, запросите доступ у
        администратора
      </p>
      <Button onClick={goBack}>Вернуться назад</Button>
    </div>
  );
};
