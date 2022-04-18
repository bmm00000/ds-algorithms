// BUBBLE SORT ALGO:

// my solution:
const sort = (arr) => {
	const resultArray = [...arr];
	// we do this because we don't want to mutate the original array. you could also do the following:
	// const resultArray = arr.slice()

	for (let outer = 0; outer < resultArray.length - 1; outer++) {
		let outerEl = resultArray[outer];
		for (let inner = outer + 1; inner < resultArray.length; inner++) {
			let innerEl = resultArray[inner];
			if (outerEl > innerEl) {
				resultArray[outer] = innerEl;
				resultArray[inner] = outerEl;
				outerEl = resultArray[outer];
				innerEl = resultArray[inner]; // we don't need to do this?
			}
		}
	}
	return resultArray;
};

const sortedArray = sort([3, 5, 1, 0, -22, 100, -111]);
console.log(sortedArray);

// course's solution:
const sort = (arr) => {
	const resultArray = [...arr];
	// we do this because we don't want to mutate the original array. you could also do the following:
	// const resultArray = arr.slice()

	for (let outer = 0; outer < resultArray.length; outer++) {
		let outerEl = resultArray[outer];
		for (let inner = outer + 1; inner < resultArray.length; inner++) {
			let innerEl = resultArray[inner];
			if (outerEl > innerEl) {
				resultArray[outer] = innerEl;
				resultArray[inner] = outerEl;
				outerEl = resultArray[outer];
				innerEl = resultArray[inner]; // we don't need to do this?
			}
		}
	}
	return resultArray;
};

const sortedArray = sort([3, 5, 1, 0, -22, 100, -111]);
console.log(sortedArray);

// if you want to make it descending, you only have to change if (outerEl < innerEl)

// MY iterative SOLUTION improving the course's:
// (we don't need to avoid mutating the array we get as an argument; the outer loop doesn't have to go until the end, but arr.length - 1; you only need to inintialize variables after comparison):
function bubbleSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[i]) {
				const max = arr[i];
				const min = arr[j];
				arr[i] = min;
				arr[j] = max;
			}
		}
	}
	return arr; // 1
}

// TIME COMPLEXITY OF BUBBLE SORT:
// best case (numbers are already sorted): even though we have a nested loop, we do practically nothing in the inner loop (since we never get into the if statement), therefore O(n)
// worst case (numbers are in reverse order): O(n^2) (Quadratic Time Complexity)
// RULE OF THUMB: one loop: linear time complexity; two nested loops: quadratic time complexity; three nested loops: cubic time complexity, etc. (unless you are splitting the array into smaller chunks or similar, in that case it would be different time complexity)
// quadratic time complexity is not that good at all, maybe we can do better:

// QUICKSORT ALGORITHM:

// note that, if there are several elements with the same value as the pivot element, all of them will go to the Equal (Center) Chunk.

// in the diagram, in the second iteration, we pick the next pivot element in the Large array becuase the other two arrays have only one element, meaning that they are already sorted (respective to each other). but keep in mind that we do this for every array that has more than one element.

// at the end, we will end up with a bunch of elements, each one in a different array, and we will concatenate all these arrays together

const sort = (arr) => {
	const copiedArray = [...arr];

	if (copiedArray.length <= 1) {
		return copiedArray;
	}

	const smallerElementsArray = [];
	const biggerElementsArray = [];
	const pivotElement = copiedArray.shift();
	// shift() returns the first element and mutates copiedArray, which is what we want
	const centerElementsArray = [pivotElement];

	while (copiedArray.length) {
		const currentElement = copiedArray.shift();
		// shift() returns the first element and mutates copiedArray, which is what we want

		if (currentElement === pivotElement) {
			centerElementsArray.push(currentElement);
		} else if (currentElement < pivotElement) {
			smallerElementsArray.push(currentElement);
		} else {
			biggerElementsArray.push(currentElement);
		}
	}

	// we will need to repeat this process only twice (for the smaller and bigger elements arrays), since the centerElementsArray is already sorted:
	const smallerElementsSortedArray = sort(smallerElementsArray);
	const biggerElementsSortedArray = sort(biggerElementsArray);

	return smallerElementsSortedArray.concat(
		centerElementsArray,
		biggerElementsSortedArray
	);
};

const sortedArray = sort([-3, 10, -3, -15]);
console.log(sortedArr);
