// my solution:
function fib(n) {
	const fibNums = [1, 1]; // 1
	// let count
	for (let i = 2; i <= n; i++) {
		// 1
		// console.log('running'); // if you are not sure how many times something inside a block is run, you can add a console.log and execute in the browser, so you can count.
		// or, you can also declare a 'count' variable before the loop, and sum 1 every time the loop is run, as follows:
		// count++
		const last = fibNums[fibNums.length - 1]; // n - 1
		const secLast = fibNums[fibNums.length - 2]; // n - 1

		fibNums.push(last + secLast); // n - 1
	}
	// console.log(count) // we do this to find how many times the loop is run.
	return fibNums[n]; // 1
}
// O(n) => Linear Time Complexity

console.log(fib(3));

// course's solution:
function fib(n) {
	const numbers = [1, 1];
	for (let i = 2; i < n + 1; i++) {
		numbers.push(numbers[i - 2] + numbers[i - 1]);
	}
	// console.log(numbers);
	return numbers[n];
}
console.log(fib(4));
console.log(fib(5));

// time complexity:
function fib(n) {
	const numbers = [1, 1]; // 1
	for (let i = 2; i < n + 1; i++) {
		// 1
		console.log('Running'); // n - 1
		numbers.push(numbers[i - 2] + numbers[i - 1]); // n - 1
	}
	// console.log(numbers);
	return numbers[n]; // 1
}
// T = 1 + 1 + 1 + 2 * (n - 1) = 3 + 2n - 2 = 1 + 2n = 2n = n
// => O(n) => Linear Time Complexity

console.log(fib(4));
// console.log(fib(5));
