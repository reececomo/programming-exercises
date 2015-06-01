/*
*  Test Case
*/
var day1 = {    d:1,
                m:1,
                yr:2012 };

var day2 = {    d:1,
                m:1,
                yr:2013 };

console.log("Calculate the number of days between "+day1.d+"/"+day1.m+"/"+day1.yr+" and "+day2.d+"/"+day2.m+"/"+day2.yr);

var result = getDifferenceAsDays(day1,day2);
console.log("Result: " + result);


/*
*  Algorithm for counting the number
*      of days between two days
*/

function getDifferenceAsDays(A, B) {
    if(!isValidDate(A) || !isValidDate(B))
        return "One (or more) of your dates were invalid!";
    
    var minYear = Math.min(A.yr,B.yr);
    return Math.abs(convertToDays(B, minYear) - convertToDays(A, minYear));
}

function convertToDays(date, minYear) {
    var daysInMonth = [null,31,28,31,30,31,
                            30,31,31,30,31,30,31];
    
    var total = date.d; // Days
    
    for(var mo = 1; mo < date.m; mo++) // Months
        total += daysInMonth[mo];
    
    for(var yr = minYear; yr < date.yr; yr++) // Years
        total += 365 + leapYear(yr);
    
    if(date.m>2) // EDGE CASE: February 29th in leap year
        total += leapYear(date.yr);
    
    return total;
}

// Helper methods
function isValidDate(date) {
    var daysInMonth = [null,31,28,31,30,31,
                            30,31,31,30,31,30,31];
    
    return date.yr > 0 && date.m > 0 && date.d > 0
                && date.m < 13 && date.d < daysInMonth[date.m];
}

function leapYear(year) {
    return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0) ? 1 : 0;
}
