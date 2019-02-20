// 18 4Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  let rs = [];
  OPT(nums, nums.length, 4, 0, target, [], rs, {});
  console.log(rs);
};

var OPT = function(nums, n, remain, sum, target, tmp, rs, obj) {
  if (sum === target && remain === 0) {
    if (!(tmp.sort() in obj)) {
      rs.push(tmp.sort());
      obj[tmp] = 1;
    }
    return true;
  }
  if (n < remain) {
    return false;
  }
  if (remain === 0 && sum !== target) {
    return false;
  }
  console.log(arguments);
  OPT(
    nums,
    n - 1,
    remain - 1,
    sum + nums[n - 1],
    target,
    tmp.concat(nums[n - 1]),
    rs,
    obj
  );
  OPT(nums, n - 1, remain, sum, target, tmp.slice(), rs, obj);
};

// fourSum([-5, 5, 4, -3, 0, 0, 4, -2], 4);
