/**
 * @param {number} N
 * @param {number} F
 * @param {number[]} P
 * @return {number}
 */

function getSecondsRequired(N, F, P) {
    // Write your code here
    P.sort((a,b) => a-b)
    let min = N - P[0]
    return min;
  }