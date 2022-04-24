function cartesianProduct(setA, setB) {
	// we assume that we always get valid arrays, therefore we won't use 'if' checks to exit the function (return) if the arguments are invalid.

	const product = [];
	for (let setAEl of setA) {
		for (let setBEl of setB) {
			product.push([setAEl, setBEl]);
		}
	}

	return product;
}

const colors = ['blue', 'red'];
const sizes = ['m', 's', 'l'];
console.log(cartesianProduct(colors, sizes));

// limitation of this algo: we only take two input sets. these sets can be of any size, and they don't have to be of the same size, but we cannot take more than two sets as input.

// time complexity: even though we have a nested loop, we don't have quadratic time complexity, because quadratic time complexity is ony the case if our nested loop operates on one input value (eg. we have one array, and we have a nested loop for the elements of that array (you go through the same array in the nested loop)), but in our case, since we have two arrays, we depend on two lengths. therefore our time complexity is O(n*m), where n is the length of the first set, and m is the lenght of the second set.

// space complexity: the 'product' array is only created once. but we have something that grows with the input size: the nested array that we are pushing into the 'product' array for every nested loop iteration. therefore we have space complexity of O(n*m), because we create one new array (for every combination of our two sets) that is stored permanently in the 'product' array for the duration of the algo.

// another way you could look at the time and space complexity of this algo: you don't want to look at the different lengths of the two sets, but instead you only care about the worse case (for whawtever reason, you don't want to look at the length of the two arrays): we assume that the size of the longest array is the size of both arrays. therefore, we would only have one input ('n'), because we assume that both arrays are of the same size. in this case, we would conclude that we have both time complexity and space complexity of O(n^2). of course, this is a simplification, it would only be true if both arrays are of the same length. this approach is useful, if we don't know the lenghts and we want to have a general thesis about the space and time complexity of the cartesian product algo.
