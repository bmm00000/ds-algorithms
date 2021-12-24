const findElement = (arr, element) => {
	let index = 0;
	for (let item of arr) {
		if (item === element) {
			return index;
		}
		index++;
	}
	// you would not need to keep account of the 'index' counter if you used a traditional 'for' loop, or the 'forEach' built-in function.
};

const arr = [4, 66, -22, 200, 21];

console.log(findElement(arr, 200));

// our algo will work for arrays of numbers and strings, but keep in mind that, if you had an array of objects, the comparison with an equal operator would not work, but we will get back into that later.

// if we had an array of strings, this approach would work, since strings are primitive values (as numbers), but it would not work for an array of objects
