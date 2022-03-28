// let counter = 0;

// const binarySearchRecursive = (sortedArr, element) => {
// 	const midIndex = Math.floor(sortedArr.length / 2);

// 	if (element === sortedArr[midIndex]) {
// 		const index = midIndex + counter;
// 		counter = 0;
// 		return index;
// 	}

// 	let newArr;
// 	if (element < sortedArr[midIndex]) {
// 		newArr = sortedArr.slice(0, midIndex);
// 	} else {
// 		newArr = sortedArr.slice(midIndex);
// 		counter += midIndex;
// 	}

// 	return binarySearch(newArr, element);
// };

//

function findElement(sortedArr, element) {
	let startIndex = 0;
	let endIndex = sortedArr.length - 1;

	while (startIndex <= endIndex) {
		let midIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

		if (element === sortedArr[midIndex]) {
			return midIndex;
		}

		if (sortedArr[midIndex] < element) {
			startIndex = midIndex + 1;
		} else {
			endIndex = midIndex - 1;
		}
	}
}

// console.log(findElement([1, 4, 6, 30, 44, 60], 60));

function binarySearch1(sortedArr, element) {
	let startIndex = 0;
	let endIndex = sortedArr.length - 1;

	while (startIndex <= endIndex) {
		let midIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

		if (element === sortedArr[midIndex]) {
			return midIndex;
		}

		if (element < sortedArr[midIndex]) {
			endIndex = midIndex - 1;
		} else {
			startIndex = midIndex + 1;
		}
	}
}

// console.log(binarySearch1([1, 4, 6, 30, 44, 60], 60));
