import { LinkedList } from './linked-lists.js';
// unlike in react, you should add .js in the imported file!! otherwise it won't work

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
		return !this.list.head;
	}

	toArray() {
		return this.list.toArray();
	}
}

const stack1 = new Stack();
console.log(stack1.isEmpty());
stack1.push('first value');
console.log(stack1.isEmpty());
stack1.push('second value');
stack1.push('third value');
console.log(stack1.toArray());
console.log(stack1.pop());
console.log(stack1.toArray());
