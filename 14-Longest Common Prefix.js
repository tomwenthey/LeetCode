// 14. 最长公共前缀
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let LCP = "";
  if (strs.length) {
    for (let i = 0; i < strs[0].length; i++) {
      for (let j = 1; j < strs.length; j++) {
        if (strs[0][i] !== strs[j][i]) {
          return LCP;
        }
      }
      LCP = LCP.concat(strs[0][i]);
    }
  }
  return LCP;
};
