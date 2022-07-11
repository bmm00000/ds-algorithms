export class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	append(value) {
		const newNode = { value: value, next: null };

		if (this.tail) {
			this.tail.next = newNode;
		}
		this.tail = newNode;

		if (!this.head) {
			this.head = newNode;
		}
	}

	prepend(value) {
		const newNode = { value: value, next: this.head };

		this.head = newNode;

		if (!this.tail) {
			this.tail = newNode;
		}
	}

	insertAfter(value, afterValue) {
		const existingValue = this.find(afterValue);

		if (existingValue) {
			const newNode = { value: value, next: existingValue.next };
			existingValue.next = newNode;
		}
	}

	find(value) {
		if (!this.head) {
			return null;
		}

		let curNode = this.head;

		while (curNode) {
			if (curNode.value === value) {
				return curNode;
			}
			curNode = curNode.next;
		}
		return null;
	}

	delete(value) {
		if (!this.head) {
			return;
		}

		while (this.head && this.head.value === value) {
			this.head = this.head.next;
		}

		let curNode = this.head;
		while (curNode.next) {
			if (curNode.next.value === value) {
				curNode.next = curNode.next.next;
				// if we get here, the node with the value will be disconnected, and eventually garbage collected.
			} else {
				curNode = curNode.next;
			}
		}

		if (this.tail.value === value) {
			this.tail = curNode;
		}
	}

	deleteHead() {
		if (!this.head) {
			return null;
		}

		const deletedItem = this.head;

		if (this.head.next) {
			this.head = this.head.next;
		} else {
			this.head = null;
			this.tail = null;
		}

		return deletedItem;
	}

	toArray() {
		const elements = [];
		let curNode = this.head;

		while (curNode) {
			elements.push(curNode);
			curNode = curNode.next;
		}

		return elements;
	}
}
