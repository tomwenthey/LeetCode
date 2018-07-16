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

// 61. Rotate List

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (k === 0) return head;
  let tmp = head,
    end,
    newHead;
  let len = 0,
    move = 0;
  while (tmp) {
    len++;
    tmp = tmp.next;
  }
  if (k === len || !head || k % len === 0) return head;
  tmp = head;
  k = k % len;
  move = len - k - 1;
  while (move > 0) {
    tmp = tmp.next;
    move--;
  }
  end = tmp.next;
  newHead = end;
  tmp.next = null;
  while (end && end.next) {
    end = end.next;
  }
  end.next = head;
  return newHead;
};

let a = new ListNode(1);
// a.next = new ListNode(2);
// a.next.next = new ListNode(3);
// a.next.next.next = new ListNode(4);
// a.next.next.next.next = new ListNode(5);

let rs = rotateRight(a, 99);

while (rs) {
  rs = rs.next;
}

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

// 200. Number of Islands

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        dfs(grid, i, j);
        count++;
      }
    }
  }
  return count;
};

let dfs = function(grid, i, j) {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[0].length ||
    grid[i][j] !== "1"
  ) {
    return;
  }
  grid[i][j] = "#";
  dfs(grid, i - 1, j);
  dfs(grid, i + 1, j);
  dfs(grid, i, j - 1);
  dfs(grid, i, j + 1);
};

let landArray = new Array(1);
landArray[0] = ["1", "1", "0", "1", "0"];
// landArray[1] = ["1", "1", "0", "0", "0"];
// landArray[2] = ["0", "0", "1", "0", "0"];
// landArray[3] = ["0", "0", "0", "1", "1"];
console.log(numIslands(landArray));

// 202 Happy Number

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let sum = n;
  while (sum !== 0) {
    str = sum.toString();
    sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += parseInt(str[i]) * parseInt(str[i]);
    }
    if (sum === 1) {
      return true;
    }
    if (sum === 4) {
      return false;
    }
  }
};

// 563. 二叉树的坡度

//Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
  let [sum, tilt] = sumAndTilt(root);
  return tilt;
};

function sumAndTilt(root) {
  let leftSum, rightSum, leftTilt, rightTilt;
  if (!root) {
    return [0, 0];
  }
  [leftSum, leftTilt] = sumAndTilt(root.left);
  [rightSum, rightTilt] = sumAndTilt(root.right);
  return [
    leftSum + rightSum + root.val,
    leftTilt + rightTilt + Math.abs(leftSum - rightSum)
  ];
}

let tree1 = new TreeNode(1);
let tree2 = new TreeNode(2);
let tree3 = new TreeNode(3);
tree1.left = tree2;
tree1.right = tree3;
