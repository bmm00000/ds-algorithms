// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
	// const results = [];
	// for (let i = 0; i < n; i++) {
	// 	results.push([]);
	// }
	// let counter = 1;
	// let startCol = 0;
	// let endCol = n - 1;
	// let startRow = 0;
	// let endRow = n - 1;
	// while (startCol <= endCol && startRow <= endRow) {
	// 	// top row:
	// 	for (let i = startCol; i <= endCol; i++) {
	// 		results[startRow][i] = counter;
	// 		counter++;
	// 	}
	// 	startRow++;
	// 	// right column:
	// 	for (let i = startRow; i <= endRow; i++) {
	// 		results[i][endCol] = counter;
	// 		counter++;
	// 	}
	// 	endCol--;
	// 	// bottom row:
	// 	for (let i = endCol; i >= startCol; i--) {
	// 		results[endRow][i] = counter;
	// 		counter++;
	// 	}
	// 	endRow--;
	// 	// start column:
	// 	for (let i = endRow; i >= startRow; i--) {
	// 		results[i][startCol] = counter;
	// 		counter++;
	// 	}
	// 	startCol++;
	// }
	// return results;
	//
	//
	//
	const result = [];
	for (let i = 0; i < n; i++) {
		result.push([]);
	}

	let counter = 1;
	let startRow = 0;
	let endRow = n - 1;
	let startCol = 0;
	let endCol = n - 1;

	while (startRow <= endRow && startCol <= endCol) {
		for (let i = startCol; i <= endCol; i++) {
			result[startRow][i] = counter;
			counter++;
		}
		startRow++;

		for (let i = startRow; i <= endRow; i++) {
			result[i][endCol] = counter;
			counter++;
		}
		endCol--;

		for (let i = endCol; i >= startCol; i--) {
			result[endRow][i] = counter;
			counter++;
		}
		endRow--;

		for (let i = endRow; i >= startRow; i--) {
			result[i][startCol] = counter;
			counter++;
		}
		startCol++;
	}

	return result;
}

module.exports = matrix;
