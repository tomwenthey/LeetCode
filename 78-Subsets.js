// 78. 子集

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  if (nums.length === 0 || nums === null) return [];
  let returnArr = [];
  returnArr.push([]);
  nums.forEach(z => {
    let len = returnArr.length;
    let i = 0;
    while (i < len) {
      let temp = returnArr[i].slice();
      temp.push(z);
      returnArr.push(temp);
      i++;
    }
  });

  return returnArr;
};
