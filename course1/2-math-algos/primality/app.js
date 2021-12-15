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
// T = 2n - 2
// O(n) => Linear Time Complexity
// but we also have this cases:
// Best case: n === 1 or n === 2, then O(1) => Constant Time Complexity.
// Worst case: n is a very large prime number, therefore, the loop will take a longer time to complete (since we never exit it earlier, because will never get into the if block), then O(n) => Linear Time Complexity.
// Average case: in most cases, n is not 1 or 2, but it's not necessarily a big prime number either. Time complexity would also be O(n): even though the number of iterations will not be as large as the number (as it happens with big prime numbers), the relationship betwen input and time will be linear in most cases (we have a tendency/approximation to get as long as the number that we are feeding in).
// as you can see, for this problem, it gets a bit more complex: we may have different cases with different time complexities. Let's use the 'sorting array items' example to get the idea (see slide).
//what we typically do when we check time complexity is: we might take a look at the best and the worst cases, but what we care the most is the average case. in interviews, you may be asked to specify for best and worse cases time complexities, and in some problems you are working on you may also care about best and worse case time complexities becuase maybe you have part of the application that you can optimize to get the best case more often in other parts of the app. but in most cases, you will care about the average case, because you cannot predict which other case is more likely.
// you will often se that for the average case you have the same time complexity as for the worse case (that's the case for some algorithms: if you can't predict what inputs you get, you will end up with the worse case authomatically). but in addition, it's also hard to quantify the average case: it's hard to determine the average case and how an algorithm performs in that case. therefore, when we judge algorithms, we tend to focus mostly on the worse case, and often the average case is derived from the worse case, and only in some scenarios we are able to identify a separate average case, which we then can judge. therefore, for the majority of the course examples you will see that the average case is pretty much the same the worst case. another advantage of focusing on the worse case is that we are prepared for the worst (we can judge how bad our solution might be in the worst case), and if the reality is better that would be great, but we can't assume that's going to be the case (so we plan for the worst and hope for the best). the most important take away is that you will sometimes have different cases with different time complexities. (depending whether or not you enter loops, if blocks, etc.)

console.log(isPrime(5));
console.log(isPrime(9));
