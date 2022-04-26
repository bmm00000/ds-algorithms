// cartesian product algo for just two sets:

function cartesianTwoSets(setA, setB) {
	// we assume that we always get valid arrays, therefore we won't use 'if' checks to exit the function (return) if the arguments are invalid.

	const product = [];
	for (let setAEl of setA) {
		// we want to check if setAEl is not an array (we do this to avoid problems when we use tempProduct for the  first time in the 'cartesian' function below (the spread operator could behave badly with strings, numbers, etc.)):
		if (!Array.isArray(setAEl)) {
			setAEl = [setAEl];
		}
		for (let setBEl of setB) {
			product.push([...setAEl, setBEl]);
			// we use the spread operator in setAEl to avoid combinations of arrays with non-arrays in the 'cartesian' function below
		}
	}

	return product;
}

// const colors = ['blue', 'red'];
// const sizes = ['m', 's', 'l'];
// console.log(cartesianTwoSets(colors, sizes));

// limitation of this algo: we only take two input sets. these sets can be of any size, and they don't have to be of the same size, but we cannot take more than two sets as input.

// time complexity: even though we have a nested loop, we don't have quadratic time complexity, because quadratic time complexity is ony the case if our nested loop operates on one input value (eg. we have one array, and we have a nested loop for the elements of that array (you go through the same array in the nested loop)), but in our case, since we have two arrays, we depend on two lengths. therefore our time complexity is O(n*m), where n is the length of the first set, and m is the lenght of the second set.

// space complexity: the 'product' array is only created once. but we have something that grows with the input size: the nested array that we are pushing into the 'product' array for every nested loop iteration. therefore we have space complexity of O(n*m), because we create one new array (for every combination of our two sets) that is stored permanently in the 'product' array for the duration of the algo.

// another way you could look at the time and space complexity of this algo: you don't want to look at the different lengths of the two sets, but instead you only care about the worse case (for whawtever reason, you don't want to look at the length of the two arrays): we assume that the size of the longest array is the size of both arrays. therefore, we would only have one input ('n'), because we assume that both arrays are of the same size. in this case, we would conclude that we have both time complexity and space complexity of O(n^2). of course, this is a simplification, it would only be true if both arrays are of the same length. this approach is useful, if we don't know the lenghts and we want to have a general thesis about the space and time complexity of the cartesian product algo.

// cartesian product algo without limits (we will use the function 'cartesianTwoSets' above (the function we came up with, for just two sets)):
function cartesian(...sets) {
	let tempProduct = sets[0];
	// 'const' doesn't work above, why not??

	for (let i = 1; i < sets.length; i++) {
		tempProduct = cartesianTwoSets(tempProduct, sets[i]);
	}
	// we use a traditional for loop, and not 'for... of' because we don't want to iterate through the same set that we assign to tempProduct: we want to start with index 1.

	return tempProduct;
}

// this is the bottom up approach: we first build a small cartesian product for the first two input sets, and then we take this product and combine it with the next set in line.

const colors = ['blue', 'red'];
const sizes = ['m', 's', 'l', 'xl'];
const styles = ['vneck', 'roundneck'];

console.log(cartesian(colors, sizes, styles));

// time complexity of cartesian product algo without limits: we will need the generalization approach we mentioned before, since now we have an unlimited amount of sets => O(n*m*q*...). therefore, we will assume that the length of the longest array is the length of all arrays. if we knew the number of sets in advance (for example, 3), then O(n^3). But since we don't know: O(n^x), where x is the number of input sets, and n is our worst case length (the length of the longest set). for example, in our case above, n = 4, x = 3, therefore we will have 4^3 theoretical execution steps (assuming the worst case scenario, although in reality we will probably have less execution steps).
// It's the same for the space complexity: O(n^x)

// permutations without repetitions:

function getPermutations(options) {}

const todoListItems = [
	'Walk the dog',
	'Clean the toilet',
	'Buy groceries',
	'Order food',
];

console.log(getPermutations(todoListItems));
