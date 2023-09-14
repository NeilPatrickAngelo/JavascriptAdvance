const date1 = new Date();
const date2 = new Date("12/25/2023");
console.log("Date Today: ",date1);
let daysUntilChristmas = getDaysUntilChristmas(date1, date2);
console.log("The number of days left until Christmas from the current date is: ",daysUntilChristmas);

function getDaysUntilChristmas(date1, date2){
    let days = date2.getTime() - date1.getTime();
    let totalDays = Math.ceil(days / (1000 * 3600 * 24));
    return totalDays;
}