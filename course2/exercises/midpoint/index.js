// in this exercise we are going to look at a problem solving strategy that we can use in MANY linked lists questions:
// we assign both varibles 'slow' and 'fast' to the first node, and then with each step of the iteration, you advance 'slow' by one, and 'fast' by two. After you advance 'fast', you check if the next two nodes exist. if these two exist, we can continue the iteration. Otherwise, it means that 'fast' must be at the end of the linked list, and therefore we can consider 'slow' to be at the midpoint (because it's moving half as quickly as 'fast' is) (given the specifications of our problem, the same strategy applies if we have an even number of nodes)

// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
	if (!list.head) {
		return null;
	}

	let slow = list.head;
	let fast = list.head;
	// or:
	// let slow = list.getFirst();
	// let fast = list.getFirst();

	while (fast.next && fast.next.next) {
		// why it doesn't work with just 'fast.next.next'???
		slow = slow.next;
		fast = fast.next.next;
	}

	return slow;
}

module.exports = midpoint;
