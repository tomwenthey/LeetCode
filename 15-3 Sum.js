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
