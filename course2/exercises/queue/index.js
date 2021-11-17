// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// class Queue {
// 	constructor() {
// 		this.data = [];
// 	}
// 	add(record) {
// 		this.data.unshift(record);
// 	}
// 	remove() {
// 		return this.data.pop();
// 	}
// }
class Queue {
	constructor() {
		this.data = [];
	}

	add(record) {
		this.data.unshift(record);
	}

	remove() {
		return this.data.pop();
	}
}

module.exports = Queue;

// if we were working with a lower level language, to make a queue would be more complicated, but with JS is very straightforward, since JS, as a higher level language, is doing the heavy lifting, and we already have built-in methods to do the basic functionality of a queue.
