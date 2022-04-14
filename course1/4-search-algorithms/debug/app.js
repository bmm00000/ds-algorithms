const findElement = (sortedArr, element, offset) => {
	// console.log('running...'); // if we want to find out how many times this loop runs
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

// const arr = [1, 3, 5, 6, 77, 888];

//
//
//

function binarySearch(arr, element) {
	let startIndex = 0;
	let endIndex = arr.length - 1;

	while (startIndex <= endIndex) {
		const midIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

		if (arr[midIndex] === element) {
			return midIndex;
		}

		if (arr[midIndex] > element) {
			endIndex = midIndex - 1;
		} else {
			startIndex = midIndex + 1;
		}
	}
}

function binarySearchRec(arr, element, counter = 0) {
	const startIndex = 0;
	const endIndex = arr.length - 1;
	const midIndex = Math.floor((endIndex - startIndex) / 2);

	if (arr[midIndex] === element) {
		return counter + midIndex;
	}

	if (arr[midIndex] > element) {
		const subArr = arr.slice(startIndex, midIndex);
		return binarySearchRec(subArr, element, counter);
	}

	if (arr[midIndex] < element) {
		const subArr = arr.slice(midIndex + 1);
		counter += midIndex + 1;
		return binarySearchRec(subArr, element, counter);
	}
}

const arr1 = [1, 3, 6, 7, 8];
