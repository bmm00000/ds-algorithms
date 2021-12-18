const isPowerOfTwo = (number) => {
	// my solution:
	// if (number < 1) {
	// 	return false;
	// }

	// if (number === 1) {
	// 	return true;
	// }
	// // if number === 1, then it will return true, since since 2 to the power of 0 is 1.

	// let dividedNumber = number;

	// while (dividedNumber % 2 === 0) {
	// 	dividedNumber /= 2;
	// 	if (dividedNumber === 1) {
	// 		return true;
	// 	}
	// }

	// return false;

	// course's solution:
	if (number < 1) {
		return false;
	}
	// if number === 1, then it will return true, since since 2 to the power of 0 is 1.

	let dividedNumber = number;

	while (dividedNumber !== 1) {
		// if (dividedNumber % 2 === 0) {
		// 	dividedNumber /= 2;
		// } else {
		// 	return false;
		// }
		// OR EVEN CLEANER:
		// console.log('Executions counter...')
		if (dividedNumber % 2 !== 0) {
			return false;
		}
		dividedNumber /= 2;
	}

	return true;
};

console.log(8);
console.log(16);
console.log(5);

// (we can use the 'Executions counter' consoleloged to count executions when we try different numbers in the console of the browser):
// best case: number < 1 or number === 1 or number is not divisible by 2 => O(1)
// worst case: number is a large power of two number => O(whatever power 2 has to yield n) => O(log2 n), but we can simplify as O(log n)
// average case: since most numbers are not power of two, but many are divisible by two, chances are you will get into the loop, but the loop will not run so many times until dividedNumber becomes 1 (in the case of a power-of-two number), ie. less than O(log2 n). However, as numbers get larger and larger, the difference between how many times the loop will run in an average case and how many times will run in a worst case, is not so big. also, when it comes to time complexity, we talk about O(log n), not so specific as O(log2 n), therefore we have O(log n)

// if the number of expression executions grows at a much slower pace than the input, then usually we have Logarithmic Time Complexity => O(log n)

// logarithm => the exponent or power to which a base must be raised to yield a given number. Expressed mathematically, x is the logarithm of n to the base b if b to the power of x = n, in which case one writes x = logb n. For example, 2 to the power of 3 = 8; therefore, 3 is the logarithm of 8 to base 2, or log2 8 = 3.

// in js, if you want to find large numbers that are power of 2:
// Math.pow(2, 50)

// way to get a more elegant or shorter solution: we can use some bitwise magic! in js, you can do bitwise calculations and number manipulations. to understand what we are going to do, we have to understand how decimal numbers are reflected in the binary system: if we have unsigned numbers (non-negative numbers), in our example 1, 2, 4, all of which can be calculated as 2 to the power of something, we would represent them in binary form as 1, 10, 100 (you can google 'decimal to binary' to find a converter). for decimals that are 2 to the power of something, the binaries are 1, 10, 100, 1000, etc.

// a bitwise operation operates on a bit string, a bit array or a binary numeral at the level of its individual bits.
// The bitwise AND operator ( & ) compares each bit of the first operand to the corresponding bit of the second operand. If both bits are 1, the corresponding result bit is set to 1. Otherwise, the corresponding result bit is set to 0.
// you use this operator in decimals, for example, if you put this in the console: 4 & 7, then both numbers get converted to binary under the hood, get compared, and you will get the result of converting the binary number to a decimal number, in our example: 4

// there's is this regularity (mathematical trick) that we have in the slide, so we can do the following:

function isPowerOfTwo(number) {
	if (number < 1) {
		return false;
	}

	return (number & (number - 1)) === 0;
}
// O(1). This algorithm is a better alternative than the other one.
// you can google for this type of better solutions if you are optimizing a project. there are often creative solutions based on mathematical tricks, etc.
