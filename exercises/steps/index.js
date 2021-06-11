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

function steps(n) {
	// for (let row = 0; row < n; row++) {
	// 	let string = '';
	// 	for (let column = 0; column < n; column++) {
	// 		if (row >= column) {
	// 			string += '#';
	// 		} else {
	// 			string += ' ';
	// 		}
	// 	}
	// 	console.log(string);
	// }
	//
	//
	//
	//
	//
	//
	//
	// for (let i = 0; i < n; i++) {
	// 	let consoleThis = '';
	// 	for (let j = 0; j <= i; j++) {
	// 		consoleThis += '#';
	// 	}
	// 	const spaces = n - i - 1;
	// 	for (let z = 0; z < spaces; z++) {
	// 		consoleThis += ' ';
	// 	}
	// 	console.log(consoleThis);
	// }
	//
	//
	for (let row = 0; row < n; row++) {
		let string = '';

		for (let column = 0; column < n; column++) {
			if (column > row) {
				string += ' ';
			} else {
				string += '#';
			}
		}

		console.log(string);
	}
}

module.exports = steps;

// in an interview, try to write the solution first in pseudo-code in the whiteboard before you code it, since your interviewer will be able to help you find errors.
