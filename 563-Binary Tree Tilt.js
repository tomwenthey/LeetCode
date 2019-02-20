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
