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
