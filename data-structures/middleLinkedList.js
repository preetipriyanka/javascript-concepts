var head;

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

function printMiddle() {
    var slow_ptr = head;
    var fast_ptr = head;
    if(head != null) {
        while(fast_ptr != null && fast_ptr.next != null) {
            fast_ptr = fast_ptr.next.next;
            slow_ptr = slow_ptr.next;
        }

        console.log("the middle element " + slow_ptr.data);
    }
}

function push(new_data) {
    /*
     * 1 & 2: Allocate the Node & Put in the data
     */
    var new_node = new Node(new_data);

    /* 3. Make next of new Node as head */
    new_node.next = head;

    /* 4. Move the head to point to new Node */
    head = new_node;
}

/*
 * This function prints contents of linked
 list starting from the given node
 */
 function printList() {
 var tnode = head;
    while (tnode != null) {
        console.log(tnode.data);
        tnode = tnode.next;
    }
}

 
    for (i = 5; i > 0; --i) {
        push(i);
        // printList();
        printMiddle();
    }