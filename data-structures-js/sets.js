// const ids = new Set([]);
// you can pass an array of values to the constructor, and these values will be the initial values in the set (if this array contained repeated values, only one of the repeated values would be added to the set)
// btw, you can have any type of data (and mixed types of data) in sets.

const ids = new Set();

ids.add('abc');
ids.add(1);
ids.add('cbc');
ids.add(1);
ids.delete('cbc');

for (let el of ids) {
	console.log(el);
	// there will be only one '1' consoled.
}

// if you want to check if there's a specific value in the set:
console.log(ids.has('abc')); // true
// you have to think about sets differently: you don't retreive a value from there, you just check whether or not the value exists in the set.

// watch out, when you console.log a set, in the console of the browser there will be an index for each value of the set (as it happens with arrays), but this order is not guaranteed.

// therefore, sets are a great choice if you need lists of data but you don't want to duplicate values and you don't care much about the order or the position. eg. if you manage something like ids, when you only care if an id is already stored or not, then sets might be a great choice.
