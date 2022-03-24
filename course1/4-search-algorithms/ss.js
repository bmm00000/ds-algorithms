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

const binarySearchLoop = (sortedArr, element) => {
	let midIndex = Math.floor(sortedArr.length / 2);
	let counter = 0;

	while (element !== sortedArr[midIndex]) {
		if (element < sortedArr[midIndex]) {
			const newArr = sortedArr.slice(0, midIndex);
			midIndex = Math.floor(newArr.length / 2);
		} else {
			const newArr = sortedArr.slice(midIndex);
			counter += midIndex;
			midIndex = counter + Math.floor(newArr.length / 2);
		}
	}

	return midIndex;

	// ONLY THE CASE WHERE WE ARE LOOKING FOR 60 DOESN'T WORK!!!
};

// console.log(binarySearchRecursive([1, 4, 6, 30, 44, 60], 60));
// console.log(binarySearchLoop([1, 4, 6, 30, 44, 60], 60));
