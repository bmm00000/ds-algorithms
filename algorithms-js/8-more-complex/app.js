// for the knapsack problem, we cannot repeat inputs (we should ask for this sort of clarifications for every problem we face).

// we are going to use a kind of decision tree (see slide)

function knapsack(items, cap) {}

// even though we could implement a solution with loops, we prefer a solution with recursion, because whenever we have a situation like this one (we have an array of items, and for every item we want to have combinations with all other items, recursion is usually easier to write and to understand)

const maxCap = 8;

const items = [
	{ name: 'a', value: 3, weight: 3 },
	{ name: 'b', value: 6, weight: 8 },
	{ name: 'c', value: 10, weight: 3 },
];

const sack = knapsack(items, maxCap);
console.log(sack);

// watch again video 'A Working Knapsack Solution'
