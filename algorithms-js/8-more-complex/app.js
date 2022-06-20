// for the knapsack problem, we cannot repeat inputs (we should ask for this sort of clarifications for every problem we face).

// we are going to use a kind of decision tree (see slide)

function knapsackFn(items, cap, itemIndex) {
	if (cap === 0 || itemIndex < 0) {
		return { items: [], value: 0, weight: 0 };
	}

	if (cap < items[itemIndex].weight) {
		return knapsackFn(items, cap, itemIndex - 1);
	}

	const sackWithItem = knapsackFn(
		items,
		cap - items[itemIndex].weight,
		itemIndex - 1
	);

	const sackWithoutItem = knapsackFn(items, cap, itemIndex - 1);

	const valueWithItem = sackWithItem.value + items[itemIndex].value;
	const valueWithoutItem = sackWithoutItem.value;

	if (valueWithItem > valueWithoutItem) {
		const updatedSack = {
			items: sackWithItem.items.concat(items[itemIndex]),
			value: sackWithItem.value + items[itemIndex].value,
			weight: sackWithItem.weight + items[itemIndex].weight,
		};
		return updatedSack;
	} else {
		return sackWithoutItem;
	}
}

// even though we could implement a solution with loops, we prefer a solution with recursion, because whenever we have a situation like this one (we have an array of items, and for every item we want to have combinations with all other items), recursion is usually easier to write and to understand

const maxCap = 8;

const items = [
	{ name: 'a', value: 3, weight: 3 },
	{ name: 'b', value: 6, weight: 8 },
	{ name: 'c', value: 10, weight: 3 },
];

const sack = knapsackFn(items, maxCap, items.length - 1);
console.log(sack);

// watch again video 'A Working Knapsack Solution'

// what about time complexity?
// watch again 'An Improved Knapsack Algorithm'

// we apply memoization:
function knapsack(items, cap, index) {
	const mem = knapsackFn(items, cap, index);
}
