let year = 1968;

function isLeapYear (year) {
  if (year % 400 == 0) {
    return year + " is a leap year.";
  } else if (year % 100 == 0) {
    return year + " is not a leap year.";
  } else if (year % 4 == 0) {
    return year + " is a leap year.";
  }
}

const result = isLeapYear(year);

console.log(result);