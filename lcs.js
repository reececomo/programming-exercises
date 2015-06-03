/*
 *  Dynamic Programming:
 *    Longest Common Subsequence problem
 */
function lcs(A,B) {
    var table = new Array();
    
    for(var i = 0; i < A.length; i++) {
        table.add(new Array()); // add a row
        
        for(var j = 0; j < B.length; j++) {
            if(i==0||j==0)
                table[i][j] = 0;
            else
                if(A[i].equals(B[j]))
                    table[i][j] = table[i-1][j-1] + 1;
                else
                    table[i][j] = Math.max(table[i-1][j],table[i][j-1]);
        }
    }
    
    return result;
}
