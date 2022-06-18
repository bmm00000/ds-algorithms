// for the knapsack problem, we cannot repeat inputs.

// we are going to use a kind of decision tree (see slide)

function knapsack(items, cap) {}

const maxCap = 8;

const items = [
	{ name: 'a', value: 3, weight: 3 },
	{ name: 'b', value: 6, weight: 8 },
	{ name: 'c', value: 10, weight: 3 },
];

const allPermutations = knapsack(items, maxCap);
console.log(allPermutations);
