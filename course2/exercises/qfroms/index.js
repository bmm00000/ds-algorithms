// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2
// THIS IS A VERY USUAL INERVIEW QUESTION INVOLVING QUEUES AND STACKS!!

const Stack = require('./stack');
// class Queue {
// 	constructor() {
// 		this.stack1 = new Stack();
// 		this.stack2 = new Stack();
// 	}

// 	add(record) {
// 		this.stack1.push(record);
// 	}

// 	remove() {
// 		while (this.stack1.peek()) {
// 			this.stack2.push(this.stack1.pop());
// 		}

// 		const removed = this.stack2.pop();

// 		// we want to go back to the initial position:
// 		while (this.stack2.peek()) {
// 			this.stack1.push(this.stack2.pop());
// 		}

// 		return removed;
// 	}

// 	peek() {
// 		while (this.stack1.peek()) {
// 			this.stack2.push(this.stack1.pop());
// 		}

// 		const peeked = this.stack2.peek();

// 		// we want to go back to the initial position:
// 		while (this.stack2.peek()) {
// 			this.stack1.push(this.stack2.pop());
// 		}

// 		return peeked;
// 	}
// }

class Queue {
	constructor() {
		this.s1 = new Stack();
		this.s2 = new Stack();
	}

	add(record) {
		this.s1.push(record);
	}

	remove() {
		while (this.s1.peek()) {
			this.s2.push(this.s1.pop());
		}
		const removed = this.s2.pop();

		while (this.s2.peek()) {
			this.s1.push(this.s2.pop());
		}
		return removed;
	}

	peek() {
		while (this.s1.peek()) {
			this.s2.push(this.s1.pop());
		}

		const peeked = this.s2.peek();

		while (this.s2.peek()) {
			this.s1.push(this.s2.pop());
		}

		return peeked;
	}
}

module.exports = Queue;
