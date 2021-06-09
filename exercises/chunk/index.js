// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	// const chunked = [];
	// array.forEach((num) => {
	// 	const last = chunked[chunked.length - 1];
	// 	if (!last || last.length === size) {
	// 		chunked.push([num]);
	// 	} else {
	// 		last.push(num);
	// 	}
	// });
	// return chunked;
	//
	//
	//
	// const chunked = [];
	// for (let i = 0; i < array.length; i += size) {
	// 	const chunk = array.slice(i, i + size);
	// 	chunked.push(chunk);
	// }
	// return chunked;
	//
	//
	//
	// const chunked = [];
	// let i = 0;
	// while (i < array.length) {
	// 	const chunk = array.slice(i, i + size);
	// 	chunked.push(chunk);
	// 	i += size;
	// }
	// return chunked;
}

module.exports = chunk;

// look the screenshot to see the algorithm
