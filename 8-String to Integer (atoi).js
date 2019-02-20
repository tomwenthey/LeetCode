// 8. 字符串转整数 (atoi)

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let rs = 0;
  let flag = 0;
  let pointer = 0;
  let isNegative = false;
  let tmpRs = [];
  while (pointer < str.length) {
    if (str[pointer] === " ") {
      pointer++;
    } else {
      break;
    }
  }
  if (str[pointer] === "-" || str[pointer] === "+") {
    if (str[pointer] === "-") {
      isNegative = true;
    }
    pointer++;
  }

  while (pointer < str.length) {
    if (str[pointer] === " " || isNaN(str[pointer])) {
      break;
    } else {
      tmpRs.unshift(str[pointer]);
      pointer++;
    }
  }
  for (let i = 0; i < tmpRs.length; i++) {
    rs += tmpRs[i] * Math.pow(10, i);
  }
  if (isNegative) {
    rs = 0 - rs;
  }
  if (rs > 2147483647) return 2147483647;
  if (rs < -2147483648) return -2147483648;

  return rs;
};
