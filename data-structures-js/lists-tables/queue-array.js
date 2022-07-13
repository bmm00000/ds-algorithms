// my solution:
// class Queue {
// 	constructor() {
// 		this.items = [];
// 	}

// 	enqueue(value) {
// 		this.items.push(value);
// 	}

// 	// my first dequeue:
// 	// dequeue() {
// 	// 	const dequeuedItem = this.items[0];
// 	// 	this.items = this.items.splice(0, 1);
// 	// 	return dequeuedItem;
// 	// }

// 	// my second dequeue:
// 	dequeue() {
// 		return this.items.shift();
// 	}
// }

class Queue {
	constructor() {
		this.items = [];
	}

	queue(value) {
		this.items.unshift(value);
	}

	unqueue() {
		return this.items.pop();
	}

	isEmpty() {
		return this.items.length === 0;
	}

	toArray() {
		return this.items.slice();
		// we use 'slice' to create a shallow copy, so we can return it.
	}
}

const queue1 = new Queue();
console.log(queue1.isEmpty());
queue1.queue(1);
console.log(queue1.isEmpty());
queue1.queue(2);
console.log(queue1.toArray());
console.log(queue1.unqueue());
console.log(queue1.toArray());
