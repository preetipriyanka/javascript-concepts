class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

let prev;

function isBSTUtil(root) {
    if(root != null) {
        if(!isBSTUtil(root.left)) {
            return false
        }
        if(prev != null && root.data <= prev.data) {
            return false;
        }
        prev = root;

        return isBSTUtil(root.right)
    }
    return true;
}

function isBST(root) {
    return isBSTUtil(root);
}

let root = new Node(3);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(1);
root.left.right = new Node(4);

if(isBST(root)) {
    console.log("It is a binary tree");
} else {
    console.log("not a Binary Tree");
}