class Queue {
	constructor() {
		this.items = [];
	}

	enqueue(value) {
		this.items.push(value);
	}

	dequeue() {
		const dequeuedItem = this.items[0];
		this.items = this.items.splice(0, 1);
		return dequeuedItem;
	}
}
