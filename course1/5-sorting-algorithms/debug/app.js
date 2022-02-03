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

const sortedArray = sort([-3, 10, -3, -15]);
// const sortedArray = sort([3, 2, 1]);
console.log(sortedArray);
