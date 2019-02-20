// 344. 反转字符串

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  let arr = [],
    str = "";
  for (let i = 0; i < s.length; i++) {
    arr.unshift(s[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    str = str.concat(arr[i]);
  }
  return str;
};
