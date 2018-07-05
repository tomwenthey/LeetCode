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

// 15. 三数之和

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let rs = [];
  let i, j, target;
  nums.sort(function(a, b) {
    return a > b ? 1 : -1;
  });
  console.log(nums);
  for (let count = 0; count < nums.length - 2; count++) {
    if (nums[count] > 0) {
      break;
    }
    if (count > 0 && nums[count] === nums[count - 1]) {
      continue;
    }
    target = 0 - nums[count];
    i = count + 1;
    j = nums.length - 1;
    while (i < j) {
      if (nums[i] + nums[j] === target) {
        rs.push([nums[count], nums[i], nums[j]]);
        while (i < j && nums[i] === nums[i + 1]) {
          i++;
        }
        while (i < j && nums[j] === nums[j - 1]) {
          j--;
        }
        i++;
        j--;
      } else if (nums[i] + nums[j] < target) {
        i++;
      } else if (nums[i] + nums[j] > target) {
        j--;
      }
    }
  }
  return rs;
};

console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));

// 20. 有效的括号

var isValid = function(s) {
  let arr = [];
  if (s === "") {
    return true;
  }
  arr.push(s[0]);
  for (let i = 1; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      arr.push(s[i]);
    } else {
      switch (s[i]) {
        case ")":
          if (arr[arr.length - 1] === "(") {
            arr.pop();
          } else {
            return false;
          }
          break;
        case "]":
          if (arr[arr.length - 1] === "[") {
            arr.pop();
          } else {
            return false;
          }
          break;
        case "}":
          if (arr[arr.length - 1] === "{") {
            arr.pop();
          } else {
            return false;
          }
          break;
        default:
          return false;
      }
    }
  }

  if (arr.length) {
    return false;
  } else {
    return true;
  }
};
