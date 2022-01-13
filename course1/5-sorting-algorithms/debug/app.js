const sort = (arr) => {
	const resultArray = [...arr];
	// we do this because we don't want to mutate the original array. you could also do the following:
	// const resultArray = arr.slice()

	for (let outer = 0; outer < resultArray.length; outer++) {
		let outerEl = resultArray[outer];
		for (let inner = outer + 1; inner < resultArray.length; inner++) {
			let innerEl = resultArray[inner];
			if (outerEl > innerEl) {
				resultArray[outer] = innerEl;
				resultArray[inner] = outerEl;
				outerEl = resultArray[outer];
				innerEl = resultArray[inner]; // we don't need to do this?
			}
		}
	}
	return resultArray;
};

const arr1 = [3, 5, 1, 0, -22, 100, -111];
