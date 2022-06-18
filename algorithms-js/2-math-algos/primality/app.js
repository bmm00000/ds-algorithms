const isPrime = (n) => {
	for (let i = 2; i < n; i++) {
		// 1 at most (if n === 1 or n === 2, then we won't even get into the loop)
		if (n % i === 0) {
			// n - 2
			return false; // 1 at most (it may not be run, but if it's run, then we are done)
		}
	}
	return true; // 1 at most (it may not be run, but if it's run, then we are done)
};

console.log(isPrime(5));
console.log(isPrime(9));

// T = n + 1
// O(n) => Linear Time Complexity
// but we also have these cases:
// Best case: n === 1 or n === 2, then O(1) => Constant Time Complexity.
// Worst case: n is a very large prime number, therefore, the loop will take a longer time to complete (since we never exit it earlier, because will never get into the if block), then O(n) => Linear Time Complexity.
// Average case: in most cases, n is not 1 or 2, but it's not necessarily a big prime number either. Time complexity would also be O(n): even though the number of iterations will not be as large as the number (as it happens with big prime numbers), the relationship betwen input and time will be linear in most cases (we have a tendency/approximation to get as long as the number that we are feeding in).
// as you can see, for this problem, it gets a bit more complex: we may have different cases with different time complexities. Let's use the 'sorting array items' example to get the idea (see slide).
//what we typically do when we check time complexity is: we might take a look at the best and the worst cases, but what we care the most is the average case. in interviews, you may be asked to specify for best and worse cases time complexities, and in some problems you are working on you may also care about best and worse case time complexities becuase maybe you have part of the application that you can optimize to get the best case more often than in other parts of the app. but in most cases, you will care about the average case, because you cannot predict which other case is more likely to happen.
// you will often see that for the average case you have the same time complexity as for the worse case (that's the case for some algorithms: if you can't predict what inputs you get, you will end up with the worse case authomatically). but in addition, it's also hard to quantify the average case: it's hard to determine the average case and how an algorithm performs in that case. therefore, when we judge algorithms, we tend to focus mostly on the worse case, and often the average case is derived from the worse case, and only in some scenarios we are able to identify a separate average case, which we then can judge. therefore, for the majority of the course examples you will see that the average case is pretty much the same the worst case. another advantage of focusing on the worse case is that we are prepared for the worst (we can judge how bad our solution might be in the worst case), and if the reality is better that would be great, but we can't assume that's going to be the case (so we plan for the worst and hope for the best). the most important take away is that you will sometimes have different cases with different time complexities. (depending whether or not you enter loops, if blocks, etc.)

// IMPROVED VERSION:
function isPrime(number) {
	for (let i = 2; i <= Math.sqrt(number); i++) {
		// 1
		console.log('Running');
		if (number % i === 0) {
			// n
			return false; // 1
		}
	}
	return true; // 1
}

// Best Case: number = 1 OR number = 2 => O(1)
// Average Case: O(n) (Improved: O(sqrt(n)))
// Worst Case: number = 27,277 => O(n) (Improved: O(sqrt(n)))

console.log(isPrime(27277));
// console.log(isPrime(2));
// console.log(isPrime(9));

// this type of optimization may not come up to your mind. if you are working on a project that needs optimization, you can google for this kind of mathematical solutions, alternatives, math rules, etc.

// you can still optimize more this algorithm, for example:
// https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/primality-test/trialDivision.js
// however, it would not impact the time complexity (in some cases you would be faster, but in the worse case you wouldn't be faster, and since the average case is driven by the worse case, the average case would not improve). therefore, it would still be O(sqrt(n))

// PRACTICE:
const getMin = (numbers) => {
	// checking if the array is empty:
	if (numbers.length === 0) {
		// 1 at most
		return;
	}
	let currentMin = numbers[0]; // 1
	for (let num of numbers) {
		// 1
		if (num < currentMin) {
			// n
			currentMin = num; // n - 1 in worst case (numbers are in descending order), 0 in best case (numbers[0] is the min)
		}
	}
	return currentMin; // 1
};
// best case: numbers[0] is the min => O(n)
// worst case: numbers are in descending order => O(n)
// average case: O(n)
// even better of best case: if array is empty: O(1) (this case is not included in the course)

const isEven = (number) => {
	// if (number % 2 === 0) {
	// 	return true;
	// }
	// return false;

	return number % 2 === 0;
};
// only one case: O(1)

//
//

// DETERMINING THE NATURE OF AN ALGORITHM:
// if you find multiple loops (not nested) it's still O(n).
// with O(n), it doesn't matter how steep the line is (for example, O(2n)), what matters is that it is a line, so we always call it O(n)
// we have also seen O(sqrt(n)), but if we say is similar to O(n) it would be ok, just a bit more specific. it is worth it to take a look at what's going on in the loop (check how the iterator changes with each iteration, and what your exit/runtime condition is (in our example, i < Math.sqrt(number)); if you are incrementing the iterator by more than one, or if the exit condition doens't run through all the cases (in our example, i < Math.sqrt(number)), then probably you are decreasing the number of iterations, so you are doing a bit better than O(n))
