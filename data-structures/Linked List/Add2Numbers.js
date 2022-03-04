var head1, head2;

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

function addTwoLists(first, second) {
    var res = null;
    var prev = null;
    var temp = null;
    var carry = 0, sum;

    while(first != null || second != null) {
        sum = carry + (first != null ? first.data: 0) +
            (second != null? second.data: 0);

        carry = (sum>=10)? 1: 0;

        sum = sum%10;

        temp = new Node(sum);

        if(res == null) {
            res = temp;
        } else {
            prev.next = temp;
        }

        prev = temp;

        if(first != null) {
            first = first.next;
        }

        if(second != null) {
            second = second.next;
        }
    }

    if(carry>0) {
        temp.next = new Node(carry);
    }

    return res;
}

function printList(head) {
    while(head != null) {
        console.log(head.data + " ");
        head = head.next;
    }
}

head1 = new Node(7);
head1.next = new Node(5);
head1.next.next = new Node(9);
head1.next.next.next = new Node(4);
head1.next.next.next.next = new Node(6);
console.log("First List is ");
printList(head1);

// creating second list
head2 = new Node(8);
head2.next = new Node(4);
console.log("Second List is ");
printList(head2);

// add the two lists and see the result
rs = addTwoLists(head1, head2);
console.log("Resultant List is ");
printList(rs);