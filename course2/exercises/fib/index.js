// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

const memoize = (fn) => {
	const valStore = {};
	return function (...args) {
		// rest syntax
		// how do the arguments pass from fn to this function?
		if (valStore[args]) {
			return valStore[args];
		}
		const value = fn(...args); // spread syntax
		valStore[args] = value;
		return value;
	};
};

// watch out, you will need to use the old function syntax as follows, or you won't be able to reassign 'fib'
function fib(n) {
	if (n < 2) {
		return n;
	}
	return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

// function fib(n) {
// 	// const result = [0, 1];
// 	// for (let i = 2; i <= n; i++) {
// 	// 	const a = result[i - 1];
// 	// 	// or:
// 	// 	// const a = result[result.length - 1];
// 	// 	const b = result[i - 2];
// 	// 	// or:
// 	// 	// const b = result[result.length - 2];
// 	// 	result.push(a + b);
// 	// }
// 	// return result[n];
// 	// // or:
// 	// // return result[result.length - 1]
// 	// this iterative solution is O(n)
// 	//
// 	//
// 	//
// 	// for this problem, we also have a recursive solution, as follows:
// 	if (n < 2) {
// 		return n;
// 	}
// 	return fib(n - 1) + fib(n - 2);
// }
// 	// if you are asked about the recursive solution for the fibonacci problem, the only thing that the interviewer wants to check out is that you have seen the problem before, ie. that you have the same common knowledge as anybody else in the company. For this kind of problems, it's all about memorization.
// 	// however, there's an interesting discussion about time complexity for this recursive solution:
// 	// in the tests, if it takes more than 1ms to run the test, the time appears (see screenshot). for the test of n=15, it takes more than 1000 times more to run the test. why? just compare the number of times that the fib function is called for n = 5 and n = 6 in the diagrams: this is exponential runtime (in our notes, it says that in exponential runtime, the processing power required doubles for each additional unit of input, well, it's not exactly double, but the same idea applies: for every additional unit of input, we get a dramatic increase in the operations required to calculate the value that we are trying to determine): THIS IS A VERY BAD SOLUTION!!
// 	// then the next question the interviewer will ask is: is there anything we can do to improve this solution, so we don't have exponential runtime? then you can use the iterative solution (linear runtime). But if the interviewer asks you to improve the recursive solution, then: in that case the interviewer wants you to say something very particular: as we can see in the diagrams, the fib function is being called with the same arguments many times. if we can avoid the extra function calls (calls in grey in the screenshot), then we will improve performance DRAMATICALLY: MEMOIZATION! in our case, fib(4) is the first call whose result will be stored, so then we can avoid running again fib(4) and all the calls that derive from it. THIS PATTERN OF MEMOIZATION APPLIES TO MANY PROBLEMS. IT'S A GREAT TOOL TO IMPROVE PERFORMANCE to many problems (when you are asked: hey this funtion looks really slow, how can you speed it up/improve performance?). in order to do that, we use a memoizer function. this is a generic function that can be used in almost any problem (see screenshot). This is how to do it:
// function memoize(fn) {
// 	const cache = {};
// 	// since we are building this 'memoize' function as a generic one to be applied to any suitable problem, we don't know how many parameters the return function will have. Therefore, we use ES6: ...args (this is kind of 'defensive coding' (I don't know how many arguments, therefore we protect ourselves))
// 	return function (...args) {
// 		// have we called this function with this particular set of arguments before and therefore stored the results in the cache object? if we have, then return it and don't do any other work (especially don't call the original function):
// 		if (cache[args]) {
// 			return cache[args];
// 		}

// 		// if we have never called the function with these set of arguments before, then call the function, take the result and cache it inside the cache object (when you use 'apply', you use the args as an array):
// 		const result = fn.apply(this, args);
// 		cache[args] = result;

// 		return result;
// 	};
// }

// function slowFib(n) {
// 	if (n < 2) {
// 		return n;
// 	}
// 	// but now we call the fast function (ie. the slow function memoized. if we called 'slowFib' in the following line, it would end up calling the slow function recursively, which defeats the purpose of the memoizing function):
// 	return fib(n - 1) + fib(n - 2);
// // remember!! fib(n - 1) will have to be calculated before we move to fib(n - 2). that's the beauty of it!! (when it gets to fib(n - 2) everything is calculated)
// }

// const fib = memoize(slowFib);
// // // or we can reassign fib, this way we also make sure we call the faster function inside our slow original function:
// // function fib(n) {
// // 	if (n < 2) {
// // 		return n;
// // 	}

// // 	return fib(n - 1) + fib(n - 2);
// // }

// // // now we reasign 'fib'
// // fib = memoize(fib);

module.exports = fib;
