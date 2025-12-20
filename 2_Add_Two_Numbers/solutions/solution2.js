class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

var solution2 = function (l1, l2) {
  let str = '';
  let str2 = '';
  while (l1 !== null) {
    str = str + l1.val;
    l1 = l1.next;
  }
  while (l2 !== null) {
    str2 = str2 + l2.val;
    l2 = l2.next;
  }
  str = str.split('').reverse().join('');
  str2 = str2.split('').reverse().join('');

  let sum = String(Number(str) + Number(str2));
  sum = sum.split('').reverse().join('');

  let dummy = new ListNode(0);
  let current = dummy;

  for (let i = 0; i < sum.length; i++) {
    let digit = Number(sum[i]); // convert char to number
    current.next = new ListNode(digit);
    current = current.next;
  }
  return dummy.next;
};

console.log(solution2(l1, l2));
