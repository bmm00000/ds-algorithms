import { LinkedList } from './linked-lists.js';

class Queue {
	constructor() {
		this.list = new LinkedList();
	}

	enqueue(value) {
		this.list.append(value);
	}

	dequeue() {
		return this.list.deleteHead();
	}

	isEmpty() {
		return !this.list.head;
	}

	toArray() {
		return this.list.toArray();
	}
}

const queue1 = new Queue();
console.log(queue1.isEmpty());
queue1.enqueue(1);
console.log(queue1.isEmpty());
queue1.enqueue(2);
console.log(queue1.toArray());
console.log(queue1.dequeue());
console.log(queue1.toArray());
