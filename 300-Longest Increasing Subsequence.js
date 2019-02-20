/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const dp = [];
  let max;
  for (let i = 0; i < nums.length; i++) {
    max = 0;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        max = dp[j] > max ? dp[j] : max;
      }
    }
    dp[i] = max + 1;
  }
  return dp.length > 0 ? Math.max(...dp) : 0;
};
