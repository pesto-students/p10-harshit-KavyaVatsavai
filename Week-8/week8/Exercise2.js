var head;

// Linked list Node
class Node
{
	constructor(val)
	{
		this.data = val;
		this.next = null;
	}
}

function rotate(k)
{
	if (k == 0)
		return;


	var current = head;

	var count = 1;

	while (count < k && current != null)
	{
		current = current.next;
		count++;
	}

	if (current == null)
		return;

	var kthNode = current;

	while (current.next != null)
		current = current.next;

	current.next = head;
	head = kthNode.next;
	kthNode.next = null;
}


	function push(new_data) {


var new_node = new Node(new_data);

new_node.next = head;

head = new_node;
}

function printList()
{
	var temp = head;
	while (temp != null)
	{
		console.log(temp.data + " ");
		temp = temp.next;
	}
	console.log("<br/>");
}

// Driver code
// Create a list
let arr = [2, 4, 7, 8, 9];
for (i = arr.length-1; i >= 0; i -= 1)
	push(arr[i]);
    

console.log("Given list<br/>");
printList();

rotate(3);

console.log("Rotated Linked List<br/>");
printList();

