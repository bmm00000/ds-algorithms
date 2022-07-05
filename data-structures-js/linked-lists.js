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
		const newNode = { value: value, next: this.head };

		this.head = newNode;
		// when we override the head, we are not removing the old head object from memory (it just means it's not stored in a property of the linked list): it still exists in memory. but if we don't use the old head (as we do above in line 21) the js garbage collector will get rid of it.

		if (!this.tail) {
			this.tail = newNode;
		}
	}

	delete(value) {
		if (!this.head) {
			return;
		}

		if (this.head.value === value) {
			this.head = this.head.next;
		}

		let curNode = this.head;
		while (curNode.next) {
			if (curNode.next.value === value) {
				curNode.next = curNode.next.next;
				if (curNode.next.value === value) {
					curNode.next = curNode.next.next;
				}
			}
			curNode = curNode.next;
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
linkedList1.prepend('first value');
linkedList1.delete('Hello');
linkedList1.delete(1);
linkedList1.delete('first value');
console.log(linkedList1.toArray());
