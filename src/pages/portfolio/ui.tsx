import { Hr } from "../../shared/components";
import { AchievementForm, AchievementList } from "../../widgets/achievement";

export const PortfolioPage = () => {
  return (
    <div>
      <h1 className=" text-5xl dark:text-white">Мое портфолио</h1>
      <Hr />
      <h3 className="text-xl mt-4 dark:text-white">Загрузить достижения</h3>
      <AchievementForm />
      <AchievementList />
    </div>
  );
};
