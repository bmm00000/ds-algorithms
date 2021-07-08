// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
// for (let i = 0; i < n; i++) {
// 	let str = '';
// 	for (let j = 0; j <= i; j++) {
// 		str += '#';
// 	}
// 	const spaces = n - i - 1;
// 	for (let z = 0; z < spaces; z++) {
// 		str += ' ';
// 	}
// 	console.log(str);
// }
//
//
//
// for (let row = 0; row < n; row++) {
// 	let str = '';
// 	for (let column = 0; column < n; column++) {
// 		if (column > row) {
// 			str += ' ';
// 		} else {
// 			str += '#';
// 		}
// 	}
// 	console.log(str);
// }
//
//
//
// for (let row = 0; row < n; row++) {
// 	let str = '';
// 	for (let column = 0; column < n; column++) {
// 		if (column <= row) {
// 			str += '#';
// 		} else {
// 			str += ' ';
// 		}
// 	}
// 	console.log(str);
// }
// }
//
//
//
// function steps(n, row = 0, stair = '') {
// 	if (n === row) {
// 		return;
// 	}

// 	if (n === stair.length) {
// 		console.log(stair);
// 		return steps(n, row + 1);
// 		// it would be the same if you placed 'return' in this line
// 	}

// 	// if (stair.length <= row) {
// 	// 	stair += '#';
// 	// } else {
// 	// 	stair += ' ';
// 	// }
// 	// steps(n, row, stair);
// 	// we can refactor the above to a ternary expression:
// 	const add = stair.length <= row ? '#' : ' ';
// 	steps(n, row, stair + add);
// }
//
//
//
// function steps(n, row = 0, level = '') {
// 	if (row === n) {
// 		return;
// 	}

// 	if (level.length === n) {
// 		console.log(level);
// 		return steps(n, row + 1);
// 	}

// 	let add = '';
// 	if (level.length <= row) {
// 		add = '#';
// 	} else {
// 		add = ' ';
// 	}
// 	steps(n, row, level + add);
// }
//
//
//

module.exports = steps;

// in an interview, try to write the solution first in pseudo-code in the whiteboard before you code it, since your interviewer will be able to help you find errors.

// here we have an iterative solution, and a recursive solution. if asked to provide a recursive solution in an interview, do the iterative solution first, and then refactor to recursive.

// in a recursive problem, the first step is to find out about the base case, that's the case when we don't have anything else to do and we can return and stop the recursive process. we do this before anything else, since we want to avoid infinite recursion (see screenshots)
