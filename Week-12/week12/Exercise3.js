// Iterative Queue based javascript program
// to do level order traversal
// of Binary Tree

// Class to represent Tree node
class Node {
	constructor(val) {
		this.data = val;
		this.left = null;
		this.right = null;
	}
}

// Given a binary tree. Print its nodes
// in level order using array for implementing queue
function printLevelOrder() {
	var queue = [];
	queue.push(root);
	while (queue.length != 0) {
			
		// The shift() method removes
		// the first element from an array
		// and returns that removed element.
		var tempNode = queue.shift();
		console.log(tempNode.data + " ");

		// Enqueue left child
		if (tempNode.left != null) {
			queue.push(tempNode.left);
		}

		// Enqueue right child
		if (tempNode.right != null) {
			queue.push(tempNode.right);
		}
	}
}

// creating a binary tree and entering the nodes
	var root = new Node(3);
	root.left = new Node(9);
	root.right = new Node(20);
	root.right.left = new Node(15);
	root.right.right = new Node(7);
	console.log("Level order traversal of binary tree is - ");
	printLevelOrder();

//output:
// Level order traversal of binary tree is - 
// 3
// 9
// 20
// 15
// 7
//time complexity:o(N)
