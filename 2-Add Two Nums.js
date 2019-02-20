// 2. 两数相加

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // let l1tmp = l1;
  // let l2tmp = l2;
  // let l1num = 0;
  // let l2num = 0;
  // let digit = 0;
  // while (l1tmp != null) {
  //   l1num += l1tmp.val * Math.pow(10, digit);
  //   digit++;
  //   l1tmp = l1tmp.next;
  // }
  // digit = 0;
  // while (l2tmp != null) {
  //   l2num += l2tmp.val * Math.pow(10, digit);
  //   digit++;
  //   l2tmp = l2tmp.next;
  // }
  // let sum = l1num + l2num;
  // let sumString = sum.toString();
  // let rsListNode = new ListNode(
  //   Number.parseInt(sumString[sumString.length - 1])
  // );
  // let rsTmp = rsListNode;
  // for (let i = sumString.length - 2; i >= 0; i--) {
  //   rsTmp.next = new ListNode(Number.parseInt(sumString[i]));
  //   rsTmp = rsTmp.next;
  // }
  // return rsListNode;
  // 上面是错误解答，通过把链表转成数字进行计算，没有考虑到链表位数超过Int限制的情况

  let l1tmp = l1,
    l2tmp = l2;
  let l3 = new ListNode();
  let tmpl3 = l3;
  let l3val;
  let record = 0;
  while (l1tmp || l2tmp) {
    if (!l1tmp) {
      l3val = l2tmp.val + record;
    } else if (!l2tmp) {
      l3val = l1tmp.val + record;
    } else {
      l3val = l1tmp.val + l2tmp.val + record;
    }
    record = Math.floor(l3val / 10);
    l3val = l3val % 10;
    tmpl3.val = l3val;
    if (l1tmp) {
      l1tmp = l1tmp.next;
    }
    if (l2tmp) {
      l2tmp = l2tmp.next;
    }
    if (l1tmp || l2tmp) {
      tmpl3.next = new ListNode();
      tmpl3 = tmpl3.next;
    }
  }
  if (record) {
    tmpl3.next = new ListNode(1);
  }

  return l3;
};

let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(3);
let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
let rsL = addTwoNumbers(l1, l2);