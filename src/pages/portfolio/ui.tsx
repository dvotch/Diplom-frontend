import { Hr } from "../../shared/components";
import { AchievementForm } from "../../widgets";

export const PortfolioPage = () => {
  return (
    <div>
      <h1 className=" text-5xl">Мое портфолио</h1>
      <Hr />
      <h3 className="text-xl mt-4">Загрузить достижения</h3>
      <AchievementForm />
    </div>
  );
};
