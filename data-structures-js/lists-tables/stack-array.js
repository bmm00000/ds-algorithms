class Stack {
	constructor() {
		this.items = [];
	}

	push(value) {
		this.items.push(value);
	}

	pop() {
		return this.items.pop();
	}

	isEmpty() {
		return this.items.length === 0;
	}

	toArray() {
		return this.items.slice();
	}
}

const stack1 = new Stack();
stack1.push('thing to do');
stack1.push('most urgent thing to do');
console.log(stack1.toArray());
console.log(stack1.pop());
console.log(stack1.toArray());
