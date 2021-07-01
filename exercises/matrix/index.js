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
	let startCol = 0;
	let startRow = 0;
	let endCol = n - 1;
	let endRow = n - 1;
	const results = [];
	let counter = 1;

	for (let i = 0; i < n; i++) {
		results.push([]);
	}

	if (startCol <= endCol && startRow <= endRow) {
		while (startCol <= endCol) {
			results[startRow][startCol] = counter;
			counter++;
			startCol++;
		}

		startRow++;
		while (startRow <= endRow) {
			results[startRow][endCol];
			counter++;
			startRow++;
		}

		endCol--;
		while (startCol <= endCol) {
			results[endRow][endCol] = counter;
			counter++;
			endCol--;
		}

		endRow--;
		while (startRow <= endRow) {
			results[endRow][startCol] = counter;
			counter++;
			endRow--;
		}
	}
}

module.exports = matrix;
