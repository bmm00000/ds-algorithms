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
//

// const binarySearchLoop = (sortedArr, element) => {
// 	let midIndex = Math.floor(sortedArr.length / 2);
// 	let counter = 0;
// 	let newArrLength = sortedArr.length;

// 	while (element !== sortedArr[midIndex]) {
// 		if (element < sortedArr[midIndex]) {
// 			const newArr = sortedArr.slice(0, midIndex);
// 			newArrLength = newArr.length;
// 			midIndex = Math.floor(newArr.length / 2);
// 		} else {
// 			const newArr = sortedArr.slice(midIndex, newArrLength + counter);
// 			newArrLength = newArr.length;
// 			counter += midIndex;
// 			midIndex = counter + Math.floor(newArr.length / 2);
// 		}
// 	}

// 	return midIndex;

// 	// ONLY THE CASE WHERE WE ARE LOOKING FOR 60 DOESN'T WORK!!!
// 	// sill have an infinite loop when looking for 60.
// };

// console.log(binarySearchRecursive([1, 4, 6, 30, 44, 60], 60));
// console.log(binarySearchLoop([1, 4, 6, 30, 44, 60], 60));

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
