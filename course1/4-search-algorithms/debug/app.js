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

//
//
//

function linearSearch(arr, element) {
	if (typeof element === 'object') {
		for (let i = 0; i < arr.length; i++) {
			let count = 0;
			for (let key in element) {
				if (arr[i][key] === element[key]) {
					count++;
				}
			}
			return count === Object.keys(element).length ? i : null;
			// why this refactor doesn't work??
		}
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === element) {
			return i;
		}
	}
}

const arr1 = [
	{ key1: 1, key2: 2 },
	{ key1: 3, key2: 4 },
	{ key1: 5, key2: 6 },
];
const arr2 = [{ key1: 1, key2: 2 }, { key1: 3, key2: 4 }, 33];

const elem1 = { key1: 5, key2: 6 };
const elem2 = 33;
