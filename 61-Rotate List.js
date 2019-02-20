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
