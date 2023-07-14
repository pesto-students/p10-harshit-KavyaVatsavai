// Definition for a binary tree node.
class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

function isValidBST(root) {
	let curr = root;
	let prev = null;
	
	while (curr != null) {
		if (curr.left == null) { // case 1: no left child
			// process the current node
			if (prev != null && prev.val >= curr.val)
				return false;
			prev = curr;
			curr = curr.right;
		}
		else { // case 2: has a left child
			// find the inorder predecessor
			let pred = curr.left;
			while (pred.right != null && pred.right != curr)
				pred = pred.right;
			
			if (pred.right == null) { // make threaded link
				pred.right = curr;
				curr = curr.left;
			}
			else { // remove threaded link
				pred.right = null;
				// process the current node
				if (prev != null && prev.val >= curr.val)
					return false;
				prev = curr;
				curr = curr.right;
			}
		}
	}
	
	return true; // binary tree is a valid BST
}

// Driver Code
let root = new TreeNode(5);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.right.left = new TreeNode(3);
root.right.right = new TreeNode(6);

if (isValidBST(root))
	console.log("true");
else
	console.log("false");

    //output :false
    //o(N)