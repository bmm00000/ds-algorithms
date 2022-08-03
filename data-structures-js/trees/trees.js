// class Node {
// 	constructor(value, parentNode = null) {
// 		this.value = value;
// 		this.parentNode = parentNode;
// 		this.children = [];
// 	}

// 	addChildNode(value) {
// 		const newNode = new Node(value, this);
// 		this.children.push(newNode);
// 		return { node: newNode, index: this.children.length - 1 };
// 	}

// 	deleteChildNode(index) {
// 		this.children.splice(index, 1);
// 	}
// }

// class Tree {
// 	constructor(rootValue) {
// 		this.root = new Node(rootValue);
// 	}
// }

// const filesystem = new Tree('/');
// const documentsData = filesystem.root.addChildNode('/documents');
// const gamesData = filesystem.root.addChildNode('/games');
// const resultsData = documentsData.node.addChildNode('/results');
// const warGameData = gamesData.node.addChildNode('/wargame.exe');

// console.log(filesystem);

//

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
			existingChildNode.addNode(segments.slice(1).join('/'));
		} else {
			const node = new Node(segments[0], this);
			node.addNode(segments.slice(1).join('/'));
			this.children.push(node);
			return { node, index: this.children.length - 1 };
		}
	}

	removeNode(index) {
		this.children.splice(index, 1);
	}
}

class Tree {
	constructor(rootValue) {
		this.root = new Node(rootValue);
	}

	add(path) {
		this.root.addNode(path);
	}

	remove(path) {}
}

const filesystem = new Tree('/');
filesystem.add('documents/taxes/my-taxes.txt');
filesystem.add('games/war-games/cod.exe');
filesystem.add('games/war-games/cod2.exe');
console.log(filesystem);
