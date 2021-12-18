const fact = (number) => {
	// my solution:
	// let result = 1;
	// for (let i = number; i >= 1; i--) {
	// 	result *= i;
	// }
	// return result;

	// solution from the course:
	let result = 1;
	for (let i = 2; i <= number; i++) {
		// 1
		result *= i;
	}
	return result;
};
// Linear Time Complexity => O(n)

console.log(fact(3));
console.log(fact(4));
console.log(fact(5));
