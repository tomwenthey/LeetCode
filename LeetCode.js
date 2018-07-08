// 1. Two Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let rs = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        rs = [i, j];
        return rs;
      }
    }
  }
  return rs;
};

// 2. 两数相加

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // let l1tmp = l1;
  // let l2tmp = l2;
  // let l1num = 0;
  // let l2num = 0;
  // let digit = 0;
  // while (l1tmp != null) {
  //   l1num += l1tmp.val * Math.pow(10, digit);
  //   digit++;
  //   l1tmp = l1tmp.next;
  // }
  // digit = 0;
  // while (l2tmp != null) {
  //   l2num += l2tmp.val * Math.pow(10, digit);
  //   digit++;
  //   l2tmp = l2tmp.next;
  // }
  // let sum = l1num + l2num;
  // let sumString = sum.toString();
  // let rsListNode = new ListNode(
  //   Number.parseInt(sumString[sumString.length - 1])
  // );
  // let rsTmp = rsListNode;
  // for (let i = sumString.length - 2; i >= 0; i--) {
  //   rsTmp.next = new ListNode(Number.parseInt(sumString[i]));
  //   rsTmp = rsTmp.next;
  // }
  // return rsListNode;
  // 上面是错误解答，通过把链表转成数字进行计算，没有考虑到链表位数超过Int限制的情况
};

let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
let rsL = addTwoNumbers(l1, l2);

while (rsL != null) {
  rsL = rsL.next;
}

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

// 11. 盛最多水的容器
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let i = 0,
    j = height.length - 1;
  let rs = 0;
  while (i < j) {
    rs = getArea(i, j, height) > rs ? getArea(i, j, height) : rs;
    height[i] < height[j] ? i++ : j--;
  }
  return rs;
};

function getArea(i, j, height) {
  return Math.min(height[i], height[j]) * (j - i);
}

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

// 496. 下一个更大元素
/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
  let flag;
  let rs = [];
  for (let i = 0; i < findNums.length; i++) {
    flag = 0;
    for (let j = 0; j < nums.length; j++) {
      if (findNums[i] === nums[j]) {
        flag = 1;
      } else if (flag && nums[j] > findNums[i]) {
        rs.push(nums[j]);
        break;
      }
      if (j === nums.length - 1) {
        rs.push(-1);
      }
    }
  }
  return rs;
};

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
