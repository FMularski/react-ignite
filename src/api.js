const baseUrl = "https://api.rawg.io/api";
const key = process.env.REACT_APP_API_KEY;

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) return `0${month}`;
    return month;
}

const getCurrentDay = () => {
    const day = new Date().getDay();
    if (day < 10) return `0${day}`;
    return day;
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popularGames = `/games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10&key=${key}`;
const upcomingGames = `/games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10&key=${key}`;
const newGames = `/games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10&key=${key}`;

export const popularGamesUrl = () => `${baseUrl}${popularGames}`;
export const upcomingGamesUrl = () => `${baseUrl}${upcomingGames}`;
export const newGamesUrl = () => `${baseUrl}${newGames}`;