// 70. Climbing Stairs

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let rs = [];
  rs[1] = 1;
  rs[2] = 2;
  for (let i = 3; i <= n; i++) {
    rs[i] = rs[i - 1] + rs[i - 2];
  }
  return rs[n];
};
