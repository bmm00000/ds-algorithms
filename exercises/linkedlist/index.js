// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

// by convention, for the last node in a chain, we always set 'next' as 'null' (unlinke 'undefined', when we set something to 'null', we explicitely set it to nothingness, not something that has not been defined yet).
class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

// the LinkedList class is going to have a bunch of methods, but only a property (head). Therefore, the LinkedList class has no idea about how many nodes belong to the linked list, or what data exist in a the linked list; the LinkedList class only knows about the first node, and if it wants to answer any questions about the linked list itself, it will have to crawl over the linked list starting from the first node, so it will find out what it's looking for (that's what we have the methods for). therefore, the way we will operate is first instantiate the linkedlist, and then associate nodes with it:
// const list = new LinkedList()
// list.head = new Node('hello') (but we will have an 'insertFirst' method, so we don't need to do that)

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		// const oldHead = this.head;
		// this.head = new Node(data, oldHead);
		// or:
		// const node = new Node(data, this.head);
		// this.head = node;
		// or:
		this.head = new Node(data, this.head);
	}

	size() {
		let counter = 0;
		let node = this.head;
		while (node) {
			counter++;
			node = node.next;
		}
		return counter;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		// let last = this.head;

		// while (last) {
		// 	if (!last.next) {
		// 		return last;
		// 	}
		// 	last = last.next;
		// }
		// // we need to do this just in case there is no head:
		// return last;

		// or:
		// if (!this.head) {
		// 	return null;
		// }

		// let node = this.head;

		// while (node) {
		// 	if (!node.next) {
		// 		return node;
		// 	}
		// 	node = node.next;
		// }

		// or:
		let lastNode = this.head;

		while (lastNode.next) {
			lastNode = lastNode.next;
		}

		return lastNode;

		// WATCH OUT! : while(lastNode){(if you don't return here, it will be an infinite loop)}
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		// if (this.head) {
		// 	this.head = this.head.next;
		// }
		// or:
		if (!this.head) {
			return;
		}
		this.head = this.head.next;
	}

	removeLast() {
		if (!this.head) {
			return;
		}

		if (!this.head.next) {
			return (this.head = null);
		}

		let previous = this.head;
		let node = this.head.next;

		while (node.next) {
			previous = node;
			node = node.next;
		}
		previous.next = null;
	}

	insertLast(data) {
		// const node = new Node(data);

		// we take into account the possibility that there are no nodes:
		// if (!this.head) {
		// 	return (this.head = node);
		// }

		// this.getLast().next = node;
		// //
		// or:
		// //
		const last = this.getLast();
		const node = new Node(data);

		if (last) {
			// there are some nodes in our chain:
			last.next = node;
		} else {
			// the chain is empty:
			this.head = node;
		}
	}

	getAt(index) {
		// the following if statement is unnecessary, because we are covering this situation at the end:
		// if (!this.head) {
		// 	return null;
		// }

		let counter = 0;
		let node = this.head;

		while (node) {
			if (counter === index) {
				return node;
			}
			counter++;
			node = node.next;
			// if the index is larger than our list, at some point node will be null, and it will exit the loop, so we have this corner case covered.
		}

		return null; // this is in case the index is larger than our list.
	}

	removeAt(index) {
		let counter = 0;
		let node = this.head;
		let nextNode = node.next;

		while (node && nextNode) {
			if (counter === index) {
				node.next = nextNode.next;
			} else {
				counter++;
				node = node.next;
				nextNode = node.next;
			}
		}
		return;
	}
}

module.exports = { Node, LinkedList };
