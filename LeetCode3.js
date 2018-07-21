/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  let res = [];
  this.nums.map(
    item => (getRandomInt(2) === 1 ? res.push(item) : res.unshift(item))
  );
  return res;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

// 148. Sort List

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 这里用归并排序
var sortList = function(head) {
  if (head === null || head.next === null) {
    return head;
  }
  let fast = head,
    slow = head;
  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  fast = slow;
  slow = slow.next;
  fast.next = null;
  fast = sortList(head);
  slow = sortList(slow);
  return merge(fast, slow);
};

var merge = function(head1, head2) {
  if (head1 === null) return head2;
  if (head2 === null) return head1;
  let res, p;
  if (head1.val < head2.val) {
    res = head1;
    head1 = head1.next;
  } else {
    res = head2;
    head2 = head2.next;
  }
  p = res;

  while (head1 !== null && head2 !== null) {
    if (head1.val < head2.val) {
      p.next = head1;
      head1 = head1.next;
    } else {
      p.next = head2;
      head2 = head2.next;
    }
    p = p.next;
  }
  if (head1 !== null) {
    p.next = head1;
  } else if (head2 !== null) {
    p.next = head2;
  }
  return res;
};
let head = new ListNode(-1);
head.next = new ListNode(5);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(0);

let p = sortList(head);
while (p !== null) {
  console.log(p.val);
  p = p.next;
}