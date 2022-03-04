var head, left;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function printlist(head) {
  while (head != null) {
    console.log(head.data + " ");
    head = head.next;
  }
}

function push(new_data) {
  var new_node = new Node(new_data);
  new_node.next = head;
  head = new_node;
}

function ispalindrome(head) {
  var result = ispalindromeUtil(head);
  return result;
}

function ispalindromeUtil(right) {
  left = head;

  if (right == null) {
    return true;
  }

  var isP = ispalindromeUtil(right.next);

  if ((isP = false)) {
    return false;
  }

  var isP1 = right.data == left.data;

  left = left.next;

  return isP1;
}

var str = ["a", "b", "a", "c", "a", "b", "a"];
for (var i = 0; i < 7; i++) {
  push(str[i]);
  printlist(head);

  if (ispalindrome(head)) {
    console.log("Is Palindrome");
  } else {
    console.log("Not Palindrome");
  }
}
