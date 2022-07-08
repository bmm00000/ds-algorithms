const results = new Map();
results.set('spain', 20);
const germany = { name: 'germany', population: 80 };
results.set(germany, 15);
console.log(results);

for (let el of results) {
	console.log(el);
	// every key value pair that is saved in a map is output as an array, where you have two elements per array (the key name and the value)
}

// with maps, you can access values or keys with its respective methods, as follows:
console.log(results.keys());
console.log(results.values());

// you can use the 'get' method to retreive a value by key:
console.log(results.get('spain'));
// because we cannot access values using the same notation as we did with objects:
console.log(results['spain']); // we get 'undefined', not an error, because 'results' is also an object (everything in js in an object in the end), but it's not in the map object where the data is in, instead it's the map object in the sense of a construct in our code. the map data store only gives us access to our data with its built-in methods, like 'get', etc.

// the 'delete' method allows us to delete an element by key:
results.delete('spain');
console.log(results);

// watch out, when you are trying to delete a reference value, point to the exact reference value that we have in the map:
// results.delete(germany); // this is ok
// results.delete({ name: 'germany', population: 80 }); // this won't delete the 'germany' object, because we are specifying a different object, since we are dealing with a reference value.
