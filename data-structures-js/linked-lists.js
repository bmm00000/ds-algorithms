class LinkedList {
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
		const newNode = { value: value, next: null };

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
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

const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append('Hello');
linkedList1.append(2);
linkedList1.append(true);
console.log(linkedList1.toArray());
