// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
// 	// const columns = n * 2 - 1;
// 	// const midColumn = Math.floor(columns / 2);
// 	// for (let row = 0; row < n; row++) {
// 	// 	const pounds = row * 2 + 1;
// 	// 	const sidePounds = Math.floor(pounds / 2);
// 	// 	let level = '';
// 	// 	for (let column = 0; column < columns; column++) {
// 	// 		if (
// 	// 			column === midColumn ||
// 	// 			(column < midColumn && column >= midColumn - sidePounds) ||
// 	// 			(column > midColumn && column <= midColumn + sidePounds)
// 	// 		) {
// 	// 			level += '#';
// 	// 		} else {
// 	// 			level += ' ';
// 	// 		}
// 	// 	}
// 	// 	console.log(level);
// 	// }
// 	//
// 	//
// 	//
// }
//
// turns out that 'sidePounds' coincides with 'row', so you can use 'row' instead of 'sidePounds' if you want (so you don't need to define 'pounds' and 'sidePounds'):
// function pyramid(n) {
// 	const midPoint = Math.floor((n * 2 - 1) / 2);

// 	for (let row = 0; row < n; row++) {
// 		let level = '';

// 		for (let column = 0; column < n * 2 - 1; column++) {
// 			if (midPoint - row <= column && midPoint + row >= column) {
// 				level += '#';
// 			} else {
// 				level += ' ';
// 			}
// 		}

// 		console.log(level);
// 	}
// }
//
//
//
// function pyramid(n, row = 0, sidePounds = 0, level = '') {
// 	const columns = n * 2 - 1;
// 	const midColumn = Math.floor(columns / 2);

// 	if (n === row) {
// 		return;
// 	}

// 	if (columns === level.length) {
// 		console.log(level);
// 		return pyramid(n, row + 1, sidePounds + 1);
// 	}

// 	if (
// 		midColumn === level.length ||
// 		(midColumn > level.length && level.length >= midColumn - sidePounds) ||
// 		(midColumn < level.length && level.length <= midColumn + sidePounds)
// 	) {
// 		level += '#';
// 	} else {
// 		level += ' ';
// 	}
// 	pyramid(n, row, sidePounds, level);
// }
//
//
//
// function pyramid(n, row = 0, level = '') {
// 	if (row === n) {
// 		return;
// 	}

// 	if (level.length === n * 2 - 1) {
// 		console.log(level);
// 		return pyramid(n, row + 1);
// 	}

// 	const midPoint = Math.floor((n * 2 - 1) / 2);
// 	let add;
// 	if (level.length >= midPoint - row && level.length <= midPoint + row) {
// 		add = '#';
// 	} else {
// 		add = ' ';
// 	}
// 	pyramid(n, row, level + add);
// }
//
//
//
// BEST WAY TO PUT BOTH ITERATIVE AND RECURSIVE SOLUTIONS:
//
// const pyramid = (n) => {
// 	const columns = n * 2 - 1;
// 	const midIndex = Math.floor(columns / 2);

// 	for (let row = 0; row < n; row++) {
// 		let level = '';
// 		const sidePounds = row;

// 		for (let col = 0; col < columns; col++) {
// 			if (col >= midIndex - sidePounds && col <= midIndex + sidePounds) {
// 				level += '#';
// 			} else {
// 				level += ' ';
// 			}
// 		}

// 		console.log(level);
// 	}
// };
//
//
//
// const pyramid = (n, row = 0, level = '') => {
// 	if (row === n) {
// 		return;
// 	}

// 	const columns = n * 2 - 1;
// 	if (level.length === columns) {
// 		console.log(level);
// 		return pyramid(n, row + 1);
// 	}

// 	const midIndex = Math.floor(columns / 2);
// 	const sidePounds = row;
// 	if (
// 		level.length >= midIndex - sidePounds &&
// 		level.length <= midIndex + sidePounds
// 	) {
// 		level += '#';
// 	} else {
// 		level += ' ';
// 	}
// 	pyramid(n, row, level);
// };
//
//
//
// as in the 'steps' exercise, we also have two kinds of solutions: iterative and recursive.
//
//
//

module.exports = pyramid;
