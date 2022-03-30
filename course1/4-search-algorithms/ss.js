// function findElement(sortedArr, element) {
// 	let startIndex = 0;
// 	let endIndex = sortedArr.length - 1;

// 	while (startIndex <= endIndex) {
// 		let midIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

// 		if (element === sortedArr[midIndex]) {
// 			return midIndex;
// 		}

// 		if (sortedArr[midIndex] < element) {
// 			startIndex = midIndex + 1;
// 		} else {
// 			endIndex = midIndex - 1;
// 		}
// 	}
// }

// // console.log(findElement([1, 4, 6, 30, 44, 60], 60));

// function binarySearch1(sortedArr, element) {
// 	let startIndex = 0;
// 	let endIndex = sortedArr.length - 1;

// 	while (startIndex <= endIndex) {
// 		let midIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

// 		if (element === sortedArr[midIndex]) {
// 			return midIndex;
// 		}

// 		if (element < sortedArr[midIndex]) {
// 			endIndex = midIndex - 1;
// 		} else {
// 			startIndex = midIndex + 1;
// 		}
// 	}
// }

// // console.log(binarySearch1([1, 4, 6, 30, 44, 60], 60));

// function binarySearchss(sortedArr, element) {
// 	let startIndex = 0;
// 	let endIndex = sortedArr.length - 1;

// 	while (startIndex <= endIndex) {
// 		const midIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

// 		if (element === sortedArr[midIndex]) {
// 			return midIndex;
// 		}

// 		if (element < sortedArr[midIndex]) {
// 			endIndex = midIndex - 1;
// 		} else {
// 			startIndex = midIndex + 1;
// 		}
// 	}
// }

// let counter = 0;
// function binaryRec(sortedArr, element) {
// 	let startIndex = 0;
// 	let endIndex = sortedArr.length - 1;
// 	let midIndex = Math.floor((endIndex - startIndex) / 2);

// 	if (element === sortedArr[midIndex]) {
// 		return counter + midIndex;
// 	}

// 	if (element < sortedArr[midIndex]) {
// 		const newArr = sortedArr.slice(0, midIndex);
// 		return binaryRec(newArr, element);
// 	} else {
// 		const newArr = sortedArr.slice(midIndex + 1);
// 		counter++;
// 		return binaryRec(newArr, element);
// 	}
// }

// let counter = 0;
// function binRec(sortedArr, element) {
// 	const midIndex = Math.floor(sortedArr.length / 2);

// 	if (element === sortedArr[midIndex]) {
// 		return counter + midIndex;
// 	}

// 	if (element < sortedArr[midIndex]) {
// 		const newArr = sortedArr.slice(0, midIndex);
// 		return binRec(newArr, element);
// 	} else {
// 		const newArr = sortedArr.slice(midIndex + 1);
// 		counter = sortedArr.length - newArr.length;
// 		return binRec(newArr, element);
// 	}
// }

let counter = 0;
function binarySearchRec(sortedArr, element) {
	const midIndex = Math.floor(sortedArr.length / 2);

	if (element === sortedArr[midIndex]) {
		const finalIndex = counter + midIndex;
		counter = 0;
		return finalIndex;
	}

	if (element < sortedArr[midIndex]) {
		const newArr = sortedArr.slice(0, midIndex);
		return binarySearchRec(newArr, element);
	}

	if (element > sortedArr[midIndex]) {
		const newArr = sortedArr.slice(midIndex + 1);
		counter += midIndex + 1;
		return binarySearchRec(newArr, element);
	}
}
