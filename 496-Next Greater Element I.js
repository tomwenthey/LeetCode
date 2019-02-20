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
