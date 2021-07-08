// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
	// const fibArr = [];
	// let fibNum = 0;
	// for (let i = 0; i <= n; i++) {
	// 	if (fibNum === 0) {
	// 		fibArr.push(fibNum);
	// 		fibNum = 1;
	// 		fibArr.push(fibNum);
	// 	} else {
	// 		const last = fibArr[fibArr.length - 1];
	// 		const secLast = fibArr[fibArr.length - 2];
	// 		fibNum = secLast + last;
	// 		fibArr.push(fibNum);
	// 	}
	// }
	// return fibArr[n];
	//
	//
	//
	const fibArr = [0, 1];
	for (let i = 2; i <= n; i++) {
		const last = fibArr[fibArr.length - 1];
		const secLast = fibArr[fibArr.length - 2];
		const fibNum = secLast + last;
		fibArr.push(fibNum);
	}
	return fibArr[n];
}

module.exports = fib;
