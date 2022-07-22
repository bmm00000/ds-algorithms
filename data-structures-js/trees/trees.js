class Node {
	constructor(value, parentNode = null) {
		this.value = value;
		this.parentNode = parentNode;
		this.children = [];
	}

	addChildNode(value) {
		const newNode = new Node(value, this);
		this.children.push(newNode);
		return { node: newNode, index: this.children.length - 1 };
	}

	deleteChildNode(index) {
		this.children.splice(index, 1);
	}
}

class Tree {
	constructor(rootValue) {
		this.root = new Node(rootValue);
	}
}

const filesystem = new Tree('/');
const documentsData = filesystem.root.addChildNode('/documents');
const gamesData = filesystem.root.addChildNode('/games');
const resultsData = documentsData.node.addChildNode('/results');
const warGameData = gamesData.node.addChildNode('/wargame.exe');

console.log(filesystem);
