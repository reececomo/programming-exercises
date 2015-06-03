/*
 *  Dynamic Programming:
 *    Longest Common Subsequence problem
 *
 *  For some strings A and B, with lengths n and m:
 *
 *  Create a table (of size n*m) where each row and column
 *  represents (in-order) a letter in each string A and B.
 *  Each cell (table[i][j]) in the table represents the cur-
 *  rent length of the longest subsequence for the combined
 *  index of "i" in A, and "j" in B.
 *
 *  Therefore the cell at table[n][m] is the length of the
 *  longest common substring. The backtrack function recon-
 *  structs the (or one of many) longest common subsequence.
 *  
 */
function lcs(A,B) {
    var table = new Array();
    for(var i = 0; i <= A.length; i++) {
        table.push(new Array());
        for(var j = 0; j <= B.length; j++) {
            if(i == 0 || j == 0) // First row + column
                table[i][j] = 0; //   fill with zeroes
            else if(A[i-1] === B[j-1])              // If character is match
                table[i][j] = table[i-1][j-1] + 1;  // Increment the count
            else
                // If not a match, then choose the bigger from LEFT or UP
                table[i][j] = Math.max(table[i-1][j],table[i][j-1]);
        }
    }
    // Retrieve the LCS by calling the backtrack method
    return backtrack(table, A, B, A.length-1, B.length-1);
}

/*
 *  Backtrack recursive algorithm
 *    Returns a string from position in table
 *
 *  Takes a table reference, the strings and some pair of
 *  indices ("i" and "j") that denote the current cell.
 *  If the characters for A and B that correspond to this
 *  cell are equal, add the character to the string.
 *  Otherwise keep looking for the next character in the
 *  lcs by moving to the cell above or left (whichever is
 *  the biggest).
 *  
 *  If either i or j is not an index into some substr-
 *  ing (-1) then return an empty string (As the algorithm
 *  returns the solution bottom-up).
 *
 */
function backtrack(table, A, B, i, j) {
    // If either index is before the string
    // start the string (bottom-up)
    if(i == -1 || j == -1)
        return "";
    else if(A[i] === B[j])                              // Backtrack to previous char
        return backtrack(table, A, B, i-1, j-1) + A[i]; // in both A and B after match
    else if(table[i-1][j] >= table[i][j-1])
            return backtrack(table, A, B, i-1, j); // Backtrack LEFT
        else
            // Return the backtrack of the cell UP
            return backtrack(table, A, B, i, j-1);
}
