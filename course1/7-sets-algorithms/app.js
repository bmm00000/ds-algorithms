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
