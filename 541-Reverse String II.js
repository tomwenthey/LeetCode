// 541. 反转字符串 II

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let arr = [];
  let str = "";
  str = str.concat(s[0]);
  let i;
  for (i = 1; i < s.length; i++) {
    if (i % k === 0) {
      arr.push(str);
      str = "";
    }
    str = str.concat(s[i]);
  }
  while (i < s.length) {
    str = str.concat(s[i]);
    i++;
  }
  arr.push(str);
  for (let j = 0; j < arr.length; j++) {
    if (j % 2 === 0) {
      arr[j] = reverseString(arr[j]);
    }
  }
  str = "";
  for (let j = 0; j < arr.length; j++) {
    str = str.concat(arr[j]);
  }
  return str;
};
