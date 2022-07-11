import { LinkedList } from './linked-lists';

class Stack {
	constructor() {
		this.list = new LinkedList();
	}

	push(value) {
		this.list.prepend(value);
	}

	pop() {
		// we create the 'deleteHead' method in 'linkedList.js':
		return this.list.deleteHead();
	}

	isEmpty() {
		return this.list.toArray().length === 0;
	}

	toArray() {
		return this.list.toArray();
	}
}
