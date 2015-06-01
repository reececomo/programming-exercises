/*
*  Demonstration
*/
var day1 = { d:1, m:1, yr:2012 };
var day2 = { d:1, m:1, yr:2013 };

var day1String = day1.d+"/"+day1.m+"/"+day1.yr;
var day2String = day2.d+"/"+day2.m+"/"+day2.yr;

console.log("Calculate the number of days between "+day1String+" and "+day2String);
var result = getDifferenceAsDays(day1,day2);
console.log("Result: " + result);

/*
*  Algorithm for counting the number
*      of days between two days
*/
function getDifferenceAsDays(A, B) {
    
    if(isValidDate(A) && isValidDate(B)) {
        var minYear = Math.min(A.yr,B.yr);
        return Math.abs(convertToDays(B, minYear) - convertToDays(A, minYear));
    }
      
    else throw "One (or more) of your dates were invalid!";
}

function convertToDays(date, minYear) {
    // A list of the number of days in months (Indexed from 1)
    var daysInMonth = [null,31,28,31,30,31,30,31,31,30,31,30,31];
    
    var total = date.d; // add days
    
    for(var mo = 1; mo < date.m; mo++) // add months (in # of days)
        total += daysInMonth[mo];
    
    for(var yr = minYear; yr < date.yr; yr++) // add years (in # of days)
        total += 365 + leapYear(yr);
    
    if(date.m>2) // EDGE CASE: February 29th in leap year
        total += leapYear(date.yr);
    
    return total;
}

// Helper methods
function isValidDate(date) {
    var daysInMonth = [null,31,28,31,30,31,30,31,31,30,31,30,31];
    
    return date.yr > 0 && date.m > 0 && date.d > 0
                && date.m < 13 && date.d < daysInMonth[date.m];
}

function leapYear(year) {
    return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0) ? 1 : 0;
}
