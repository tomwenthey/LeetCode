// 202 Happy Number

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let sum = n;
  while (sum !== 0) {
    str = sum.toString();
    sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += parseInt(str[i]) * parseInt(str[i]);
    }
    if (sum === 1) {
      return true;
    }
    if (sum === 4) {
      return false;
    }
  }
};
