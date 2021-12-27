// LINAR SEARCH ALGO:
const findElement = (arr, element) => {
	let index = 0;
	for (let item of arr) {
		if (item === element) {
			return index;
		}
		index++;
	}
	// you would not need to keep account of the 'index' counter if you used a traditional 'for' or 'while' loop, or the 'forEach' built-in function.
};

const arr = [4, 66, -22, 200, 21];

console.log(findElement(arr, 200));

// our algo will work for arrays of numbers and strings, but keep in mind that, if you had an array of objects, the comparison with an equal operator would not work, but we will get back into that later.

// if we had an array of strings, this approach would work, since strings are primitive values (as numbers), but it would not work for an array of objects. this happens because objects are reference values in js. for example:

const students = [
	{ name: jose, age: 33 },
	{ name: josh, age: 22 },
];

console.log(findElement(students, { name: jose, age: 33 })); // returns undefined, because the object in line 26 is a different object (in a different place in memory) than the one in line 22.

// how can we fix this?
const studentOne = { name: jose, age: 33 };
const students = [studentOne, { name: josh, age: 22 }];

console.log(findElement(students, studentOne)); // returns 0 (now we are dealing with the same object in memory)

// but maybe you don't want this approach. if you are writing a linear search algo that deals with objects, you may want to finetune your comparison logic:

const findElement = (arr, element) => {
	let index = 0;
	for (let item of arr) {
		if (
			typeof element === 'object' &&
			element !== null &&
			element.name === item.name &&
			element.age === item.age
		) {
			return index;
			// now we have a very specific comparison (it would also work if we wantd to compare it just by name)
		}
		if (item === element) {
			return index;
		}
		index++;
	}
};
// remember: 'typeof null' returns object (mistake in js)

console.log(findElement(students, { name: jose, age: 33 }));

// the example above only works with objects that have name and age keys. this might be what you need or not. you could make it more flexible as follows (so your findElement function does not have to know in advance what type of object you will have):

const findElement = (arr, element, comparatorFn) => {
	let index = 0;
	for (let item of arr) {
		if (
			typeof element === 'object' &&
			element !== null &&
			comparatorFn(element, item)
		) {
			return index;
		}
		if (item === element) {
			return index;
		}
		index++;
	}
};

// only the comparatorFn function knows what type of object you will have:
const compareObj = (el, itm) => {
	return el.name === itm.name && el.age === itm.age;
};

console.log(findElement(students, { name: jose, age: 33 }, compareObj));

// the key takeaway from this algo is that you simply have a loop, and you take a look at every item. the way you compare each item with the element that you have as an input, is something that you can implement in a dynamic way (with the comparatorFn), or, if you know that you are only dealing with primitive values, with a simple comparison (item === element)

// regarding time complexity, the average case tends to be O(n): since we don't know in advance, we simplify this to O(n); we assume the worse case and we are probably better off than that in the majority of cases, but since we don't know, we simplify like that.

// btw, in js we already have a built-in method that performs linear search => 'find', and 'findIndex'

// checking every single element is maybe not the best possible approach, but it's also not horrible (O(n) is ok, we can live with it). but we will see if we can do better...

// BINARY SEARCH ALGO:
// even though binary search performs better than linear search, since you need to sort the list first, it may not help that much to improve the overall performance (we will study sorting algos in the next section). the sorting that we need may be ascending or descending, up to you (although typically it's ascending). for the time being, we will assume that we have a sorted list.

// when you are looking for the median, if you have, eg. 6 elements, you go for the first below the theoretical middle.

const findElement = (sortedArr, element) => {
	let startIndex = 0;
	let endIndex = sortedArr.length - 1;
	while (startIndex <= endIndex) {
		const middleIndex = Math.floor((endIndex - startIndex) / 2);

		if (element === sortedArr[middleIndex]) {
			return middleIndex;
		}
	}
};

const arr = [1, 3, 5, 6, 77, 888];
console.log(findElement(arr, 77));

// take into account that you can also use a comparatorFn here, the same way that we did in the linear search algo.
