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

// const arr = [4, 66, -22, 200, 21];
// console.log(findElement(arr, 200));

// our algo will work for arrays of numbers and strings, but keep in mind that, if you had an array of objects, the comparison with an equal operator would not work, but we will get back into that later.

// if we had an array of strings, this approach would work, since strings are primitive values (as numbers), but it would not work for an array of objects. this happens because objects are reference values in js. for example:

const students = [
	{ name: 'jose', age: 33 },
	{ name: 'josh', age: 22 },
];

console.log(findElement(students, { name: 'jose', age: 33 })); // returns undefined, because the object in line 25 is a different object (in a different place in memory) than the one in line 21.

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
			// now we have a very specific comparison (it would also work if we wanted to compare it just by name, or just by age)
		}
		if (item === element) {
			return index;
		}
		index++;
	}
};
// remember: 'typeof null' returns object (mistake in js)

console.log(findElement(students, { name: jose, age: 33 }));

// the example above only works with objects that have name and age keys (and no more key-value properties!). this might be what you need or not. you could make it more flexible as follows (so your findElement function does not have to know in advance what type of object you will have):

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
// BUT AGAIN! the example above only works with objects that have name and age keys (and no more key-value properties! (example of vulnerability: if the element that you pass as an argument has name, age, AND nationality as keys, it will still return the index). that's why my solution is clunkier but better:
function linearSearch(arr, element) {
	if (typeof element === 'object') {
		for (let i = 0; i < arr.length; i++) {
			let count = 0;
			for (let key in element) {
				if (arr[i][key] === element[key]) {
					count++;
				}
			}
			const found =
				count === Object.keys(element).length &&
				count === Object.keys(arr[i]).length;
			if (found) {
				return i;
			}
		}
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === element) {
			return i;
		}
	}
}

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
		console.log('running...'); // if we want to find out how many times this loop runs
		const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

		if (element === sortedArr[middleIndex]) {
			return middleIndex;
		}

		if (sortedArr[middleIndex] < element) {
			startIndex = middleIndex + 1;
		} else {
			endIndex = middleIndex - 1;
		}
	}
};

const arr = [1, 3, 5, 6, 77, 888];
console.log(findElement(arr, 77));

// take into account that you can also use a comparatorFn here (if you work with reference types like objects, etc.), the same way that we did in the linear search algo.

// if you have a sorted array, then the numbers of iterations needed is less than if we use the Linear Search algo (check the console.log above)

// rule of thumb: if you are splitting the problem set into two (or even smaller) with every iteration (eg. divided by 3 or 4), you are then dealing with Logarithmic Time Complexity.

// we implmeneted a loop based solution to the binary search algo, but we can also implement a recursive solution:

// my solution:
const findElement = (sortedArr, element) => {
	const findIt = (subArr, elem) => {
		let startIndex = 0;
		let endIndex = subArr.length - 1;
		const middleIndex = Math.floor((endIndex - startIndex) / 2);

		// this is our base case that will get us out of the recursion:
		if (elem === subArr[middleIndex]) {
			return sortedArr.indexOf(elem);
		}

		if (subArr[middleIndex] < elem) {
			startIndex = middleIndex + 1;
			return findIt(subArr.slice(startIndex), elem);
		} else {
			endIndex = middleIndex;
			return findIt(subArr.slice(startIndex, endIndex), elem);
		}
	};

	return findIt(sortedArr, element);
};

const arr = [1, 3, 5, 6, 77, 888];
console.log(findElement(arr, 77));

// course's solution:
const findElement = (sortedArr, element, offset) => {
	// console.log('running...'); // if we want to find out how many times this loop runs
	// console.log(sortedArr, element) // in the course, we console log the array, but it's even better to use a breakpoint in the dev tools.
	let startIndex = 0;
	let endIndex = sortedArr.length - 1;
	const middleIndex = Math.floor((endIndex - startIndex) / 2);

	if (element === sortedArr[middleIndex]) {
		return middleIndex + offset;
	}

	if (sortedArr[middleIndex] < element) {
		startIndex = middleIndex + 1;
		offset = offset + middleIndex + 1;
	} else {
		endIndex = middleIndex;
	}

	return findElement(
		sortedArr.slice(startIndex, endIndex + 1),
		element,
		offset
	);
};

const arr = [1, 3, 5, 6, 77, 888];
console.log(findElement(arr, 77, 0));

// my solution, even better than the course's (this is the question I asked in the forum that nobody replied! in the course's solution above, we are not splitting the array in the most efficient way):
function binSearchRecursive(sortedArr, element, offset = 0) {
	let startIndex = 0;
	let endIndex = sortedArr.length - 1;
	const midIndex = Math.floor((endIndex - startIndex) / 2);

	if (sortedArr[midIndex] === element) {
		return offset + midIndex;
	}

	if (sortedArr[midIndex] > element) {
		endIndex = midIndex - 1;
	} else {
		startIndex = midIndex + 1;
		offset += midIndex + 1;
	}

	const newArr = sortedArr.slice(startIndex, endIndex + 1);
	return binRec(newArr, element, offset);
}

// since we are halving the array before we call the function again, we also have Logarithmic Time Complexity (we are also calling 'slice', which also costs some performance. however, we will not consider the cost of 'slice', since it would only make a difference compared to the loop solution if we measured performance for very large arrays. the general nature of this algo is not impacted by 'slice')
// this example is quite clear of splitting the problem into half, but if you wanted to derive the time complexity in less clear situations, we have a theorem (a formula) for such recursive calls (ONLY FOR RECURSIVE ALGOS WHERE YOU SPLIT YOUR PROBLEM INTO SMALLER CHUNKS; this formula will not work for other recusive approaches (for example when you call yourself n - 1, as it happenned with the factorial algo)). if you split your n into halves or into thirds, etc. then it would work. In our example above: in order to find out about the runtime of recursion (the recursive step), we only take into account one line (where we call findElement)
// a = 1 (how often we call ourselves, in our example, once)
// b = 2 (we are splitting the problem in half)
// O(n^logb a) => O(n^log2 1) => O(n^0) => O(1). therefore, the recursive step (line 173 alone) has a Constant Runtime. now the question is: does this recusive step do more work, equal work or less work than the rest of this function? since we don't have any other function calls, loops, etc., the rest of the function (from line 158 to line 171) is also O(1) (it doesn't depend on the the length of the array). hence, the time complexity of the recursive step is the same as the part of the function outside of the recursive step (same work inside and outside of recursion). therefore, the overall algorithm time complexity: O(n^logb a * log n) => O(1 * log n) => O(log n)
// if you are able to see on your own that we have O(log n), then you don't need to use the formula, but you can use it when it's not that clear.
