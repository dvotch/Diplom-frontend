export const Footer = () => {
  return (
    <footer className="text-white py-8 bg-gradient-to-b from-white to-purple-200 h-40 opacity-100 dark:opacity-100 dark:bg-gradient-to-b dark:from-slate-900 dark:to-gray-600">
      <div className="container mx-auto flex flex-row md:flex-row items-center justify-center">
        <div>
          <h3 className="text-lg font-bold  fonst-sans text-black opacity-50 dark:text-white">
            Зеленодольский механический колледж © 1939-2024.
          </h3>
        </div>
        <p className="text-sm text-black dark:text-white opacity-50">
          Все права защищены. Если не указано иное, все материалы сайта доступны
          по лицензии Creative Commons CC-BY-SA 4.0. Прочтите нашу политику
          конфиденциальности и пользовательское соглашение.
        </p>
      </div>
    </footer>
  );
};
