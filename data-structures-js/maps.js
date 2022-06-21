const results = new Map();
results.set('spain', 20);
const germany = { name: 'germany', population: 80 };
results.set(germany, 15);
console.log(results);

for (let el of results) {
	console.log(el);
	// every key value pair that is saved in a map is output as an array, where you have two elements per array (the key name and the value)
}
