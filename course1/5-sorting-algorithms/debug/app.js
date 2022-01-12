const sort = (arr) => {
	const resultArray = [...arr];
	// we do this because we don't want to mutate the original array

	for (let i = 0; i < resultArray.length - 1; i++) {
		for (let q = i + 1; q < resultArray.length; q++) {
			const firstNum = resultArray[i];
			const secondNum = resultArray[q];
			if (firstNum > secondNum) {
				resultArray[i] = secondNum;
				resultArray[q] = firstNum;
			}
		}
	}
	return resultArray;
};

const arr1 = [3, 5, 1, 0, -22, 100, -111];
