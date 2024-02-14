// Question 1 - In-Order Traversal

class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

function printInorder(node) {
    if (node === null) {
        return;
    }
    printInorder(node.left);
    console.log(node.data);
    printInorder(node.right);
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log('Inorder traversal ');
printInorder(root);

// Question 2

class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

function identicalTrees(a, b) {
    if (a == null && b == null)
        return true;
    if (a != null && b != null)
        return a.data == b.data && identicalTrees(a.left, b.left) && identicalTrees(a.right, b.right);
    return false;
}

root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);

root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);

if (identicalTrees(root1, root2)) console.log('Both trees are identical');
else console.log('Trees are not identical');

// Questioon 3

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function totalNodes(root) {
    if (root === null) {
        return 0;
    }

    let l = totalNodes(root.left);
    let r = totalNodes(root.right);

    return 1 + l + r;
}

function newNode(data) {
    return new Node(data);
}

let root = newNode(10);
root.left = newNode(11);
root.right = newNode(12);
root.left.left = newNode(13);
root.left.right = newNode(14);
root.right.left = newNode(15);
root.right.right = newNode(16);
console.log(totalNodes(root));


//Question 5


class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let maxLevel = -1;
let res = -1;

function find(root, level) {
    if (root != null) {
        find(root.left, ++level);
        if (level > maxLevel) {
            res = root.data;
            maxLevel = level;
        }
        find(root.right, level);
    }
}

function deepestNode(root) {
    find(root, 0);
    return res;
}

function newNode(data) {
    return new Node(data);
}

let root = newNode(2);
root.left = newNode(1);
root.right = newNode(3);
root.left.left = newNode(4);
root.right.left = newNode(5);
root.right.left.left = newNode(6);
console.log(deepestNode(root))