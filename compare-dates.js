/*
*  Demonstration
*/
var date1 = "1/1/2012";
var date2 = "1/1/2013";

console.log("Calculate the number of days between "+date1+" and "+date2);
var result = getDifferenceAsDays(date1,date2);
console.log("Result: " + result);

/*
*  Algorithm for counting the number
*      of days between two days
*/
function getDifferenceAsDays(DateA,DateB) {
    // Convert strings into date object
    _A = DateA.split("/"); A = {d:_A[0], m:_A[1], yr:_A[2]};
    _B = DateB.split("/"); B = {d:_B[0], m:_B[1], yr:_B[2]};
    
    if(isValidDate(A) && isValidDate(B)) {
        var min = Math.min(A.yr,B.yr);
        return Math.abs(countDaysFrom(B, min) - countDaysFrom(A, min));
    }
      
    else throw "One (or more) of your dates were invalid!";
}

function countDaysFrom(date, year) {
    // A list of the number of days in months (Indexed from 1)
    var daysInMonth = [null,31,28,31,30,31,30,31,31,30,31,30,31];
    var total = date.d; // add days
    
    for(var mo = 1; mo < date.m; mo++) // add months (in # of days)
        total += daysInMonth[mo];
    
    for(var yr = year; yr < date.yr; yr++) // add years (in # of days)
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
