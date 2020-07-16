var year = 1700;

// if(year %= 400 == 0){
//     console.log("this year is leap-year");
// } else if (year %4 == 0 && year %100 != 0){
//     console.log("this year is a leap-year");
// } else {
//     console.log("this year is not a leap-year");
// }

function isLeapYear(year){
    if(year %= 400 == 0){
        return "this year is leap-year";
    } else if (year %4 == 0 && year %100 != 0){
        return "this year is a leap-year";
    } else {
        return "this year is not a leap-year";
    }
}
var result = isLeapYear(1700);
console.log(result);