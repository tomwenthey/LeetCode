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
  p = p.next;
}
