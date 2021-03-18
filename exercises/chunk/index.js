// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// look the screenshot to see the algorithm

function chunk(array, size) {
	// my solution:
	// const chunked = [];
	// for (let element of array) {
	// 	if (
	// 		!chunked[chunked.length - 1] ||
	// 		chunked[chunked.length - 1].length === size
	// 	) {
	// 		chunked.push([element]);
	// 	} else {
	// 		chunked[chunked.length - 1].push(element);
	// 	}
	// }
	// return chunked;
	// the same solution refactored:
	// const chunked = [];
	// for (let element of array) {
	// 	const last = chunked[chunked.length - 1];
	// 	if (!last || last.length === size) {
	// 		chunked.push([element]);
	// 	} else {
	// 		last.push(element);
	// 	}
	// }
	// return chunked;
	// my solution with slice:
	// const chuncked = [];
	// for (let i = 0; i < array.length; i = i + size) {
	// 	const littleChunk = array.slice(i, i + size);
	// 	chuncked.push(littleChunk);
	// }
	// return chuncked;
	// second solution with slice:
	// const chuncked = [];
	// let index = 0;
	// while (index < array.length) {
	// 	const littleChunk = array.slice(index, index + size);
	// 	chuncked.push(littleChunk);
	// 	index = index + size;
	// }
	// return chuncked;
	// refactored:
	// const chuncked = [];
	// let index = 0;
	// while (index < array.length) {
	// 	chuncked.push(array.slice(index, index + size));
	// 	index += size;
	// }
	//REVISION:
	// const chuncked = [];
	// for (let item of array) {
	// 	const last = chuncked[chuncked.length - 1];
	// 	if (!last || last.length === size) {
	// 		chuncked.push([item]);
	// 	} else {
	// 		last.push(item);
	// 	}
	// }
	// const chuncked = [];
	// for (let i = 0; i < array.length; i += size) {
	// 	const chunk = array.slice(i, i + size);
	// 	chuncked.push(chunk);
	// }
	// return chuncked;
	// create result array
	// const resArr = [];
	// // iterate thorugh the input array
	// for (let i = 0; i < array.length; i++) {
	// 	if (i === 0 || i % size === 0) {
	// 		resArr.push([array[i]]);
	// 	} else {
	// 		resArr[resArr.length - 1].push(array[i]);
	// 	}
	// }
	// return resArr;

	// REVISION:

	// newArr = [];

	// for (let num of array) {
	// 	const last = newArr[newArr.length - 1];
	// 	if (!last || last.length === size) {
	// 		newArr.push([num]);
	// 	} else {
	// 		last.push(num);
	// 	}
	// }

	// return newArr;

	//

	// const newArr = [];

	// for (let i = 0; i < array.length; i += size) {
	// 	const chunk = array.slice(i, i + size);
	// 	newArr.push(chunk);
	// }

	// return newArr;

	//

	const newArr = [];

	let index = 0;
	while (index < array.length) {
		newArr.push(array.slice(index, index + size));
		index += size;
	}

	return newArr;
}

module.exports = chunk;
