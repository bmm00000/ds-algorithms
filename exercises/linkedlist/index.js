// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

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
		if (!this.head) {
			return null;
		}

		const node = this.getAt(integer);
		const previousNode = this.getAt(integer - 1);
		const nextNode = this.getAt(integer + 1);

		if (node === this.head) {
			this.head = null;
			return;
		}

		previousNode.next = nextNode;
	}
}

module.exports = { Node, LinkedList };
