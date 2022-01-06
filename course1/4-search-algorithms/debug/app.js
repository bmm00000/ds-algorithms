const findElement = (sortedArr, element) => {
	const originalArr = [...sortedArr];

	const findIt = (sortedArr, element) => {
		let startIndex = 0;
		let endIndex = sortedArr.length - 1;
		const middleIndex = Math.floor((endIndex - startIndex) / 2);

		// this is our base case that will get us out of the recursion:
		if (element === sortedArr[middleIndex]) {
			return originalArr.indexOf(element);
		}

		if (sortedArr[middleIndex] < element) {
			startIndex = middleIndex + 1;
			return findIt(sortedArr.slice(startIndex), element);
		} else {
			endIndex = middleIndex;
			return findIt(sortedArr.slice(startIndex, endIndex), element);
		}
	};

	findIt(sortedArr, element);
};

const arr = [1, 3, 5, 6, 77, 888];
