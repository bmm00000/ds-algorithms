class Node {
	constructor(value, parentNode = null) {
		this.value = value;
		this.parentNode = parentNode;
		this.children = [];
	}

	addNode(value) {
		const node = new Node(value, this);
		this.children.push(node);
		return { node, index: this.children.length - 1 };
	}

	removeNode(index) {
		this.children.splice(index, 1);
	}
}

class Tree {
	constructor(rootValue) {
		this.root = new Node(rootValue);
	}
}
