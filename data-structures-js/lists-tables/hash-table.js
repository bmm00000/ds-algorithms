function findFirstRepLoop(str) {
	for (let i = 0; i < str.length; i++) {
		for (let j = i + 1; j < str.length; j++) {
			if (str[i] === str[j]) {
				return str[i];
			}
		}
	}
}
// O(n^2)

function findFirstRepObj(str) {
	const obj = {};

	for (let char of str) {
		if (obj[char]) {
			return char;
		}

		obj[char] = true;
	}
}
// O(n)

console.log(findFirstRepLoop('hello'));
console.log(findFirstRepObj('hey there'));

class HashTable {
	constructor() {
		this.size = 1000;
		this.buckets = Array(1000).fill(null);
	}

	hash(key) {
		let hashing = 0;

		for (let char of key) {
			hashing += char.charCodeAt(0);
		}

		const hashedKey = hashing % this.size;
		return hashedKey;
	}

	set(key, value) {
		const index = this.hash(key);
		this.buckets[index] = value;
	}

	get(key) {
		const index = this.hash(key);
		return this.buckets[index];
	}
}
