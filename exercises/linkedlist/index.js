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

// the LinkedList class is going to have a bunch of methods, but only a property (head). Therefore, the LinkedList class has no idea about how many nodes belong to the linked list, or what data exist in a the linked list; the LinkedList class only knows about the first node, and if it wants to answer any questions about the linked list itself, it will have to crawl over the linked list starting from the first node, so it will find out what it's looking for. therefore, the way we will operate is first instantiate the linkedlist, and then associate nodes with it:
// const list = new LinkedList()
// list.head = new Node('hello')

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
		let last = this.head;

		while (last) {
			if (!last.next) {
				return;
			}
			last = last.next;
		}

		return last;
	}
}

module.exports = { Node, LinkedList };
