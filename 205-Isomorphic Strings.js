// 205. 同构字符串

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let m1 = new Map();
  let m2 = new Map();
  if (s.length !== t.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (m1.has(s[i])) {
      if (m1.get(s[i]) !== t[i]) {
        return false;
      }
    } else {
      m1.set(s[i], t[i]);
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (m2.has(t[i])) {
      if (m2.get(t[i]) !== s[i]) {
        return false;
      }
    } else {
      m2.set(t[i], s[i]);
    }
  }
  return true;
};
