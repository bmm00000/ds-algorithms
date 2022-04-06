const fact = (number) => {
	if (number <= 1) {
		return 1;
	}
	return number * fact(number - 1);
};

console.log(fact(3));

// recursion: a function calls itself from inside the function (you can think of it as a chain of function calls, so to speak, the final result 'bubbles up' and comes back to the initial function call).

// in order not to create infinite loops, you combine recursion with a base case (exit condition)

// what about the time complexity of our recursive solution?

const fact = (number) => {
	if (number <= 1) {
		// 1
		return 1; // 1
	}
	return number * fact(number - 1); // 1, but we also have to count the function called here (n - 1).
};

// T = O(n). Better explanation:

// In every function call: O(1)
// But we trigger multiple function calls: n function calls
// T = O(1) * n => O(n), or the same idea expressed in a different way:
// T = 1 * n => n => O(n)

// this is the same time complexity as we got for the loop solution, so our recursive solution is not faster but it takes less code, and that could be a decision factor as well.

// however, sometimes we would have a hard time counting function calls in recursive algorithms. we will find a better way to determine time complexity. however, for a lot of algorithms, the former approach will work just fine.

// my initial iterative solution:
const factIterative = (n) => {
	let result = 1;
	for (let i = 1; i <= n; i++) {
		result *= i;
	}
	return result;
};
// O(n)

// my initial recursive solution:
const factRecursive = (n) => {
	if (n < 1) {
		return;
	}

	if (n === 1) {
		return 1;
	}

	return n * factRecursive(n - 1);
};
// O(n)
