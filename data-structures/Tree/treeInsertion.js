class Node {
    constructor(val) {
        this.key = val;
        this.left = null;
        this.right = null;
    }
}

var temp;

function inorder(temp) {
    if(temp == null)
    return;

    inorder(temp.left);
    console.log(temp.key + " ");
    inorder(temp.right);

    var q = [];
    q.push(temp);

    while(q.length != 0) {
        temp = q.pop();

        
    }
}

