function mergeSort(arr) {
	if (arr.length < 2) {
		return arr;
	}

	if (arr.length === 2) {
		return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
	}

	const middle = Math.floor(arr.length / 2);
	const leftArr = arr.slice(0, middle);
	const rightArr = arr.slice(middle);

	const leftSortedArr = mergeSort(leftArr);
	const rightSortedArr = mergeSort(rightArr);

	let leftArrIndex = 0;
	let rightArrIndex = 0;
	const mergedArr = [];

	// we are using a while loop because we want to change both arrays at the same time in one loop. if we wanted to change just one array, we could have used a for loop.
	while (
		leftArrIndex < leftSortedArr.length ||
		rightArrIndex < rightSortedArr.length
	) {
		if (
			// keep in mind that if we have split arrays of unequal amount of items, the left array will be the shorter one. therefore, the left array will be the one that will be exhausted first, in which case we know that we have push the remaining rightSortedArr item in the mergedArr:
			leftArrIndex >= leftSortedArr.length ||
			leftSortedArr[leftArrIndex] > rightSortedArr[rightArrIndex]
		) {
			mergedArr.push(rightSortedArr[rightArrIndex]);
			rightArrIndex++;
		} else {
			mergedArr.push(leftSortedArr[leftArrIndex]);
			leftArrIndex++;
		}
	}

	return mergedArr;
}
