// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

// JS implementation of a stack (we use an array to hold the data):
class Stack {
	constructor() {
		this.data = [];
	}

	push(num) {
		this.data.push(num);
	}

	pop() {
		return this.data.pop();
	}

	peek() {
		return this.data[this.data.length - 1];
	}
}

module.exports = Stack;

// STACK DATA STRUCTURE
// it's similar to a queue with some differences: we are going to deal with a list of records. the difference between a stack and queue is the order in which items are removed: with stacks we have FILO. Also, we talk about 'push' and 'pop' records in and out of the stack.
// you don't have to do just this in an interview question, what usually happens is that you are told to do something using a queue, or a stack, etc.
