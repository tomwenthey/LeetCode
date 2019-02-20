// 39. 组合总和

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// var combinationSum = function(candidates, target) {
//   let rs = [];
//   let result = [];
//   recursion(candidates.length - 1, target, candidates, rs, false, result);
//   return result;
// };

// function recursion(i, target, candidates, rs, isChoose = false, result) {
//   if (isChoose) {
//     rs = [...rs];
//     rs.push(candidates[i]);
//   }
//   if (target === 0) {
//     result.push(rs);
//     return true;
//   }
//   if (target < 0 || i < 0) {
//     return false;
//   }
//   recursion(i, target - candidates[i], candidates, rs, true, result);
//   recursion(i - 1, target, candidates, rs, false, result);
// }
// 第一次使用递归解答，答案正确但超时了

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  candidates.sort((a, b) => {
    return a - b;
  });

  let res = [],
    len = candidates.length;

  let calc = (arr, sum, lastIndex) => {
    for (let i = lastIndex; i < len; i++) {
      let num = candidates[i];
      let newSum = sum + num;
      if (newSum < target) {
        calc(arr.concat(num), newSum, i);
      } else if (newSum === target) {
        res.push(arr.concat(num));
        return;
      } else {
        return;
      }
    }
  };

  for (let i = 0; i < len; i++) {
    let num = candidates[i];
    if (num > target) return res;
    if (num === target) {
      res.push([num]);
    } else {
      calc([num], num, i);
    }
  }

  return res;
};