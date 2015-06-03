/*
 *  Dynamic Programming:
 *    Longest Common Subsequence problem
 */
function lcs(A,B) {
    var table = new Array(); // Create table with 0 rows
    
    for(var i = 0; i <= A.length; i++) {
        table.push(new Array()); // Add new row in table
        
        for(var j = 0; j <= B.length; j++) {
            if(i==0||j==0)
                table[i][j] = 0; // If first row/column, flood with 0s
                
            else if(A[i-1] === B[j-1])
                table[i][j] = table[i-1][j-1] + 1; // Increment diagnoal
            else
                table[i][j] = Math.max(table[i-1][j],table[i][j-1]); // Choose the bigger of UP or LEFT
        }
    }
    
    return backtrack(table, A, B, A.length-1, B.length-1);
}

// Recursive backtracking algorithm
//  Returns a string
function backtrack(table, A, B, i, j) {
    if(i == -1 || j == -1)
        return ""; // For the table return zeroes
        
    else if(A[i] === B[j])
        return backtrack(table, A, B, i-1, j-1) + A[i]; // Add the character
    else
        if(table[i][j-1] > table[i-1][j])
            return backtrack(table, A, B, i, j-1); // Go up
        else
            return backtrack(table, A, B, i-1, j); // Go left
}
