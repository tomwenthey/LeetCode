// 5. 最长回文子串

var longestPalindrome = function(s) {
  let max = 1,
    maxStart = 0,
    maxEnd = 0,
    u,
    v;
  if (s.length === 1 || (s.length === 2 && s[0] === s[1])) {
    return s;
  }
  for (let i = 0; i <= s.length - 2; i++) {
    if (s[i] === s[i + 2]) {
      max = max < 3 ? 3 : max;
      if (max === 3) {
        maxStart = i;
        maxEnd = i + 2;
      }
      u = i - 1;
      v = i + 3;
      while (u >= 0 && v < s.length) {
        if (s[u] === s[v]) {
          if (v - u + 1 > max) {
            maxStart = u;
            maxEnd = v;
            max = maxEnd - maxStart + 1;
          }
          u--;
          v++;
        } else {
          break;
        }
      }
    }
    if (s[i] === s[i + 1]) {
      max = max < 2 ? 2 : max;
      if (max === 2) {
        maxStart = i;
        maxEnd = i + 1;
      }
      u = i - 1;
      v = i + 2;
      while (u >= 0 && v < s.length) {
        if (s[u] === s[v]) {
          if (v - u + 1 > max) {
            maxStart = u;
            maxEnd = v;
            max = maxEnd - maxStart + 1;
          }
          u--;
          v++;
        } else {
          break;
        }
      }
    }
  }
  return s.slice(maxStart, maxEnd + 1);
};