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

// console.log(findFirstRepLoop('hello'));
// console.log(findFirstRepObj('hey there'));

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
		let index = this.hash(key);

		if (this.buckets[index] === null || this.buckets[index].key === key) {
			this.buckets[index] = { key, val: value };
		} else {
			while (this.buckets[index] !== null) {
				index++;
			}
			this.buckets[index] = { key, val: value };
		}
	}

	get(key) {
		for (let i = 0; i < this.buckets.length; i++) {
			if (!this.buckets[i]) {
				continue;
			}
			if (this.buckets[i].key === key) {
				return this.buckets[i].val;
			}
		}
	}

	showInfo() {
		for (const key in this.buckets) {
			if (this.buckets[key] !== null) {
				console.log(key, this.buckets[key]);
			}
		}
	}
}

function findFirstRepTable(str) {
	const table = new HashTable();

	for (let char of str) {
		if (table.get(char)) {
			return char;
		}

		table.set(char, true);
	}
}

// console.log(findFirstRepTable('hahaha'));

const table1 = new HashTable();

for (const char of 'academiasdfasfasdfasdfasfasfadsnd') {
	table1.set(char, char);
}

table1.showInfo();
