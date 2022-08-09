class Node {
	constructor(value, parentNode = null) {
		this.value = value;
		this.parentNode = parentNode;
		this.children = [];
	}

	addNode(value) {
		const segments = value.split('/');

		if (segments.length === 0) {
			return;
		}

		if (segments.length === 1) {
			const node = new Node(segments[0], this);
			this.children.push(node);
			return { node, index: this.children.length - 1 };
		}

		const existingChildNode = this.children.find(
			(child) => child.value === segments[0]
		);

		if (existingChildNode) {
			existingChildNode.addNode(segments.splice(1).join('/'));
		} else {
			const node = new Node(segments[0], this);
			node.addNode(segments.slice(1).join('/'));
			this.children.push(node);
			return { node, index: this.children.length - 1 };
		}
	}
}

class Tree {
	constructor(rootValue) {
		this.root = new Node(rootValue);
	}

	add(path) {
		this.root.addNode(path);
	}
}
