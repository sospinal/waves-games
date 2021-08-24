//Base url
const base_url = "https://api.rawg.io/api/";

//Get Date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return String(month);
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return String(day);
  }
};

const currentYear = new Date().getFullYear;
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const previousYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;

//Popular games
const popularGames = `games?key=${process.env.REACT_APP_RAWG_API_KEY}&date=${previousYear},${currentDate}&ordering=-rating&page_size=12`;

export const popularGamesUrl = () => {
  return `${base_url}${popularGames}`;
};
