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

const filesystem = new Tree('/');
const documentsNodeInfo = filesystem.root.addNode('/documents');
const gamesNodeInfo = filesystem.root.addNode('/games');

documentsNodeInfo.node.addNode('/results.txt');
gamesNodeInfo.node.addNode('game.exe');

console.log(filesystem);
