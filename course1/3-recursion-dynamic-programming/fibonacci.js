// my initial solution:
const fibIterative = (n) => {
	const fibSeries = [1, 1];

	if (n < 0) {
		return;
	}

	for (let i = 2; i <= n; i++) {
		fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
	}

	return fibSeries[n];
};

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

// btw, this algorithm follows a bottom up approach: we are building our solutions from the bottom until where we need it, and then we return it. now let's see how we can do this with recursion (as usual, add base case, and recursive step) :

const fib = (n) => {
	if (n === 0 || n === 1) {
		return 1;
	}
	return fib(n - 1) + fib(n - 2);
};

// what's wrong with this approach? when we call it, we build such a tree of nested function calls. moreover, you can see that we also have repeated function calls in different branches of the recursive tree (see slide). all and all, for every single increase in n, we more or less double the amount of executions (check the numbers, this kind of growth is not quadratic (simulate quadratic growth with some examples), BUT EXPONENTIAL!)

// how can you determine that what we have is exponential time complexity? you can test it for bigger numbers and see how many operations you are getting, but you can also check the function: for each function execution, you start two new function executions, this is the pattern with exponential growth (it will eventually crash your browser). THEREFORE =>   O(2^n)

// therefore, THIS IS A HORRIBLE SOLUTION FOR A PROBLEM THAT WE SOLVED BEFORE WITH A LINEAR TIME COMPLEXITY (OUR FIRST SOLUTION: BOTTOM UP APPROACH WITH A LOOP). THIS IS AN EXAMPLE OF A RECURSIVE APPROACH THAT IS NOT BETTER THAN THE LOOP SOLUTION, IT MIGHT LOOK ELEGANT, BUT IT'S WAY WORSE.

// how do we know that certain approach is exponential, and not quadratic or cubic? you can test it like this:

let counter = 0;
const fib = (n) => {
	counter++;
	if (n === 0 || n === 1) {
		return 1;
	}
	return fib(n - 1) + fib(n - 2);
};

fib(5);
console.log(counter);
counter = 0;

fib(10);
console.log(counter);
counter = 0;

fib(20);
console.log(counter);
counter = 0;

fib(30);
console.log(counter);
counter = 0;

// see the results and comparison with quadratic and cubic growth in screenshot: for relatively small increases in n, our number of operations grows way quicker than it would for quadratic or cubic time. you can even continue testing for n to the power of 4 or more (see screenshot), but n to the power of anything doesn't work, only 2^n yields results that explains such big jumps.

// we tested in the screenshot for 2^n, and it gives us a larger number, so in reality we might be a bit better than 2^n, but since we care about the general trend, we are definitely closer to 2^n (especially if we test this for bigger and bigger n) than we are to cubic, quadratic, etc. With experience, you will see this and you won't need to do this testing.

// we found that our loop solution was better than our recursive solution, but can we still make recursion work for this problem as well? yes, we can use a technique called dynamic programming => we are going to combine recursion with memoization (memoization essentially means that we are going to store some data (intermediate results) for the execution of a function or some other process, in our case, we will use this stored data to optimize the recursion process). so we are going to combine recursion with some data that is stored. therefore dynamic programming = recursion + memoization

// in order to implement memoization, we could set up a global storage object, outside of the function, and we could add key value pairs to that object with each iteration, like this:

const memo = {};

function fib(n) {}

fib(4);
fib(5);

// the problem with this approach is that we have one object, and if we call 'fib' multiple times, then we will be reusing this object. this would be great if what we want in subsequent calls is to take advange of the values that we already have in 'memo' from former calls. however, if you have a function, where the input produces totally different values for 'memo', then you would get incorrect values in your next function executions.

// in order to make our approach reusable, we will pass a second argument ('memo'), so we have a different storage object every time we call the function. for example, fib(4) and fib(5) will use different storages. this storage object is passed as an argument every time we call the function, ie, is passed into into every recursive process (every fibonacci number we are trying to retreive) and is only used for this recursive tree:

let counter; // we add this counter to count expression executions, and see our improvement compared to the former approach.
function fib(n, memo) {
	counter++;
	let result;
	if (memo[n]) {
		return memo[n];
	}
	if (n === 0 || n === 1) {
		result = 1;
	} else {
		result = fib(n - 1, memo) + fib(n - 2, memo);
	}
	memo[n] = result;
	return result;
	// this is the same that we did before, only that now we use the 'result' variable. we do that so that we can store the results in our intermediate storage object.
}

fib(5, {});
console.log(counter);
counter = 0;

fib(6, {});
console.log(counter);
counter = 0;

fib(20, {});
console.log(counter);
counter = 0;

fib(50, {});
console.log(counter);
counter = 0;
// see the 'counter's consoled log in the screenshot, and compare with what we had before.

// so what is the time complexity now?
// see screenshot, and you can also try more examples in the console: if you double the input, you more or less double the counter (and the relationship between the input and the counter is more or less 2n). therefore, we have O(n) now, WHICH IS A HUGE IMPROVEMENT from what we had before (exponential time complexity)

// if we want to see how the storage object looks like (see screenshot):
const memo = {};
fib(5, memo);
console.log(counter);
console.log(memo);
counter = 0;
// we see in the storage object that we end up with the fibonacci sequence until the position that we want to retrieve. therefore, what we are doing in this recursive approach is not that different to what we did earlier with the loop based solution (the BOTTOM-UP APPROACH) (we are building all the data we need up to the end that we need, and then we get that value and finish the function execution. the bottom up approach sometimes is an alternative to the recursive solution (in our case, you can either use the dynamic programming solution or the bottom up approach, since both have the same time complexity). however, as we will see, in other problems, recursion will give us the most elegant solution, or it's the only solution (in the fibonacci problem that's not the case, as we have seen; the only solution to the fibonacci problem that you want to avoid is the recursive solution without memoization)
