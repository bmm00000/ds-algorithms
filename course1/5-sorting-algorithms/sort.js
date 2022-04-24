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
	// QUESTION: WHY DO WE NEED TO CLONE 'arr'? I HAVE TRIED MUTATING IT (SOLUTION BELOW), AND IT WORKS.

	if (copiedArray.length <= 1) {
		return copiedArray;
	}

	const smallerElementsArray = [];
	const biggerElementsArray = [];
	const pivotElement = copiedArray.shift();
	// shift() returns the first element and mutates copiedArray, which is what we want
	const centerElementsArray = [pivotElement];

	// we use a while loop because we are going to be mutating the array that we are going to be iterating through:
	while (copiedArray.length) {
		// same as: while (copiedArr.length >= 1)
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

// MY SOLUTION:
function quickSort(arr) {
	const pivot = arr[0];
	const smaller = [];
	const larger = [];
	const equal = [];

	for (let num of arr) {
		if (num === pivot) {
			equal.push(num);
		} else if (num < pivot) {
			smaller.push(num);
		} else if (num > pivot) {
			larger.push(num);
		}
		// we use 'else if', because, if we use just 'if' statements, we will have unnecessary line executions.
	}

	if (smaller.length <= 1 && larger.length <= 1) {
		return [...smaller, ...equal, ...larger];
		// or:
		// return smaller.concat(equal, larger);
	}

	return [...quickSort(smaller), ...equal, ...quickSort(larger)];
	// or:
	// return quickSort(smaller).concat(equal, quickSort(larger));
}

// MY REFACTOR OF THE COURSE'S SOLUTION:
function quickSortCourse(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	const pivot = arr.shift();
	const equal = [pivot];
	const smaller = [];
	const larger = [];

	while (arr.length) {
		const next = arr.shift();
		if (next === pivot) {
			equal.push(next);
		} else if (next < pivot) {
			smaller.push(next);
		} else if (next > pivot) {
			larger.push(next);
		}
	}

	return [...quickSortCourse(smaller), ...equal, ...quickSortCourse(larger)];
}

// look at time complexity of quick sort algo: since we are splitting the problem into pieces, it tends to be logarithmic time complexity, but the worse case scenario is that elements are already sorted (ascending or descending order): for example, if the order is ascending, the 'smaller' array will be empty, and the 'larger' array will contain the rest of the elements, so you won't split the problem into pieces, but you will rather iterate through all the elements, and with each iteration, you will have a nested iteration starting again. rule of thumb: if you call yourself inside of a function (ie. you have a recursive function), you typically have linear time complexity, but if inside that recursive function you then have a loop so you go through the entire array again, it's the same as having a nested loop in a loop, and that's quadratic time complexity.
// in the best case scenario, we split the problem in chunks that are pretty much the same size, so we end up with logarithmic time complexity (we are roughly splitting the problem in half).
// on average, we don't have a sorted array (if we knew the array was already sorted, we wouldn't need a sorting algo in the first place), so we can assume that the problem will be split into pretty much equal sub parts. we use the master theorem in this case again:
// Recursive step runtime: O(n^logb(a)) => O(n^log2(2)) => O(n)
// a (number of sub-problems, ie. how many calls we are making) => 2, because we are calling ourselves twice (see line 176).
// b => in a random array, not sorted, it will be, roughly, also 2
// Runtime outside of the recursion: the main thing we have is the while loop: O(n)
// in this case, the same work is being done inside and outside of the recursion. therefore the algo runtime is O(n * log(n))

// therefore, the quick sort algo, is an improvement of the bubble sort algo, in terms of performance. however, we still have quadratic time complexity in the worse case of the quick sort algo. so maybe we can do better than that:

// MERGE SORT ALGO:
// after we split the array into arrays of two elements, we have two steps: sort the arrays of two elements, and then sort them again when we merge them. therefore, in this algo, we split things up, then we sort them, and then we sort them again when we merge things together.

function mergeSort(arr) {
	if (arr.length < 2) {
		return arr;
	}

	if (arr.length === 2) {
		return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
	}

	const middle = Math.floor(arr.length / 2);
	const leftArr = arr.slice(0, middle);
	const rightArr = arr.slice(middle);

	const leftSortedArr = mergeSort(leftArr);
	const rightSortedArr = mergeSort(rightArr);

	const mergedArr = [];
	let leftArrIndex = 0;
	let rightArrIndex = 0;

	// we are using a while loop because we want to change both arrays at the same time in one loop. if we wanted to change just one array, we could have used a for loop.
	while (
		leftArrIndex < leftSortedArr.length ||
		rightArrIndex < rightSortedArr.length
	) {
		if (
			// keep in mind that if we have split arrays of unequal amount of items, the left array will be the shorter one. therefore, the left array will be the one that will be exhausted first, in which case we know that we have push the remaining rightSortedArr item in the mergedArr:
			leftArrIndex >= leftSortedArr.length ||
			leftSortedArr[leftArrIndex] > rightSortedArr[rightArrIndex]
		) {
			mergedArr.push(rightSortedArr[rightArrIndex]);
			rightArrIndex++;
		} else {
			mergedArr.push(leftSortedArr[leftArrIndex]);
			leftArrIndex++;
		}
	}

	return mergedArr;
}

// time complexity: apply master theorem:
// recursive step time complexity: O(n^logb(a)) => O(n^log2(2)) => O(n^1) => O(n)
// outside of recursion time complexity: before the loop, we have constant time complexity. then, with the loop, we have O(n).
// therefore, we have the same work inside and outside of the recursion. therefore, merge sort algo time complexity: O(n^logb(a) * log(n)) => O(n * log(n))

// therefore, in terms of performance, the merge sort beats the other sort algos we have seen. although it's worth pointing out that the merge sort algo also contains a lot much code (and it's more complex to write). therefore, for shorter arrays, if we measure exeuction time in milliseconds (as oppposed to how we are measuring it, ie. only theoretically), merge sort might take longer (maybe the bubble sort algo might be better in shorter arrays). therefore, the merge sort algo might not be the best tool for every sorting task that you have (it might be overkill: the theoretical performance advantage in terms of time complexity might not be the factor that would matter the most). also, merge sort would take a bit more of memory than, say bubble sort, since we are creating intermediate temporary arrays (see space complexity notes).
