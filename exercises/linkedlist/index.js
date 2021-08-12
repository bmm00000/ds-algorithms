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
		// if (!this.head) {
		// 	return null;
		// }

		// let node = this.head;

		// while (node) {
		// 	if (node.next) {
		// 		node = node.next;
		// 	} else {
		// 		return node;
		// 	}
		// }

		if (!this.head) {
			return null;
		}

		let node = this.head;

		while (node) {
			if (!node.next) {
				return node;
			}
			node = node.next;
		}
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
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
			this.head = null;
			return;
		}

		let previous = this.head;
		let node = this.head.next;

		// while (node) {
		// 	if (!node.next) {
		// 		previous.next = null;
		// 		return;
		// 	} else {
		// 		previous = node;
		// 		node = node.next;
		// 	}
		// }

		while (node.next) {
			previous = node;
			node = node.next;
		}
		previous.next = null;
	}

	insertLast(data) {
		// if (!this.head) {
		// 	this.head = new Node(data);
		// 	return;
		// }

		// const lastNode = this.getLast();
		// lastNode.next = new Node(data);
		// return;

		const lastNode = this.getLast();

		if (lastNode) {
			lastNode.next = new Node(data);
		} else {
			this.head = new Node(data);
		}
	}

	getAt(integer) {
		// if (!this.head) {
		// 	return null;
		// }

		// const size = this.size();

		// if (integer >= size) {
		// 	return null;
		// }

		// let node = this.head;
		// let counter = 0;

		// while (node) {
		// 	if (integer === counter) {
		// 		return node;
		// 	}

		// 	counter++;
		// 	node = node.next;
		// }

		// a more efficient solution:
		let node = this.head;
		let counter = 0;

		while (node) {
			if (integer === counter) {
				return node;
			}

			counter++;
			node = node.next;
		}
		return null;
	}

	removeAt(integer) {
		// if (!this.head) {
		// 	return;
		// }

		// const node = this.getAt(integer);
		// const previousNode = this.getAt(integer - 1);
		// const nextNode = this.getAt(integer + 1);

		// if (node === this.head) {
		// 	this.head = this.head.next;
		// 	return;
		// }

		// previousNode.next = nextNode;

		if (!this.head) {
			return;
		}

		if (integer === 0) {
			this.head = this.head.next;
			return;
		}

		const previous = this.getAt(integer - 1);

		if (!previous || !previous.next) {
			return;
		}
		previous.next = previous.next.next;
	}

	insertAt(data, integer) {
		// const newNode = new Node(data);

		// if (!this.head) {
		// 	this.head = newNode;
		// 	return;
		// }

		// const previousNode = this.getAt(integer - 1);
		// const nextNode = this.getAt(integer);

		// if (!previousNode) {
		// 	this.head = newNode;
		// 	newNode.next = nextNode;
		// 	return;
		// }

		// if (!nextNode) {
		// 	const lastNode = this.getLast();
		// 	lastNode.next = newNode;
		// 	return;
		// }

		// previousNode.next = newNode;
		// newNode.next = nextNode;

		if (!this.head) {
			this.head = new Node(data);
			return;
		}

		if (integer === 0) {
			this.head = new Node(data, this.head);
			return;
		}

		const previous = this.getAt(integer - 1) || this.getLast();
		const node = new Node(data, previous.next);
		previous.next = node;
		return;
	}

	forEach(func) {
		for (let i = 0; i < this.size(); i++) {
			const node = this.getAt(i);
			func(node, i);
		}
	}
}

module.exports = { Node, LinkedList };
