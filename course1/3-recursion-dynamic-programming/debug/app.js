// let count = 0;
// const memo = {};
// const fibRecursive = (n) => {
// 	if (n < 0) {
// 		return;
// 	}

// 	count++;

// 	if (memo[n]) {
// 		return memo[n];
// 	}

// 	if (n === 0 || n === 1) {
// 		memo[n] = 1;
// 		return memo[n];
// 	}

// 	memo[n] = fibRecursive(n - 1) + fibRecursive(n - 2);
// 	return memo[n];
// };

// fibRecursive(10);
// console.log(memo);
// console.log(count);

//
//

let count = 0;
const fibRecReusable = (n, memo = {}) => {
	if (n < 0) {
		return;
	}

	count++;

	if (memo[n]) {
		return memo[n];
	}

	if (n === 0 || n === 1) {
		memo[n] = 1;
		return memo[n];
	}

	memo[n] = fibRecReusable(n - 1, memo) + fibRecReusable(n - 2, memo);
	return memo[n];
};
