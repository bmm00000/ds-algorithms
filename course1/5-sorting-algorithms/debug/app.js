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

	// we will need to repeat this process only twice (for the smaller and bigger elements arrays), since the centerElementsArray only has elements with the same value, so it's already sorted:
	const smallerElementsSortedArray = sort(smallerElementsArray);
	const biggerElementsSortedArray = sort(biggerElementsArray);

	return smallerElementsSortedArray.concat(
		centerElementsArray,
		biggerElementsSortedArray
	);
};

// const sortedArray = sort([-3, 10, -3, -15]);
// // const sortedArray = sort([3, 2, 1]);
// console.log(sortedArray);
//
//
//
//

// my solution, I'VE MADE IT!!!!:
function quickSort(arr) {
	const pivot = arr[0];
	const smaller = [];
	const equal = [];
	const larger = [];

	for (let num of arr) {
		if (num < pivot) {
			smaller.push(num);
		}

		if (num === pivot) {
			equal.push(num);
		}

		if (num > pivot) {
			larger.push(num);
		}
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

const arr1 = [2, 1, 2];
