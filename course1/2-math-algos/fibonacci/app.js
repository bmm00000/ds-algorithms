// my solution:
function fib(n) {
	const fibNums = [1, 1];
	for (let i = 2; i <= n; i++) {
		const last = fibNums[fibNums.length - 1];
		const secLast = fibNums[fibNums.length - 2];

		fibNums.push(last + secLast);
	}
	return fibNums[n];
}

console.log(fib(3));

// his solution:
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
