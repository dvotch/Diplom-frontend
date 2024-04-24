export const getYears = () => {
  const date = new Date();
  const returnDate = [];
  for (let i = 0; i < 3; i++) returnDate.push(date.getFullYear() - i);
  return returnDate;
};

export const years = getYears();
