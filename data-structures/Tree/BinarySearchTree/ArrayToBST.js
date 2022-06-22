class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

// var root = null;

function sortedArrayToBST(arr, start, end) {
    if(start > end) {
        return null;
    }

    var mid = parseInt((start+end)/2);
    var node = new Node(arr[mid]);
    node.left = sortedArrayToBST(arr, start, mid-1);
    node.right = sortedArrayToBST(arr, mid+1, end);
    return node;
}

function preorder(node) {
    if(node == null) {
        return;
    }

    console.log(node.data);
    preorder(node.left);
    preorder(node.right);
}

var arr = [1,2,3,4,5,6,7];
var n = arr.length;
 var root = sortedArrayToBST(arr, 0, n-1);
console.log("Preorder traversal of constructed BST is  ");
preorder(root);
