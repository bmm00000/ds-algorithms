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

const arr = [1, 3, 5, 6, 77, 888];
