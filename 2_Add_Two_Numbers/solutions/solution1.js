class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

var solution1 = function (l1, l2) {
  let l3 = new ListNode();
  let current = l3;
  let carry = 0;
  let digit = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    let sum = l1.val + l2.val + carry;
    carry = Math.floor(sum / 10);
    digit = sum % 10;

    let newNode = new ListNode(digit);
    current.next = newNode;
    current = newNode;

    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  return l3.next;
};

console.log(solution1(l1, l2));
