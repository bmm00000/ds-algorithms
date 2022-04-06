let count = 0;
const fibRecursive = (n) => {
	if (n < 0) {
		return;
	}

	if (n === 0 || n === 1) {
		return 1;
	}
	count++;
	return fibRecursive(n - 1) + fibRecursive(n - 2);
};

// fibRecursive(11);
// console.log(count);
