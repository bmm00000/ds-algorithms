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

function pyramid(n) {
	const totalColumns = n * 2 - 1;
	const midIndex = Math.floor(totalColumns / 2);

	for (let row = 0; row < n; row++) {
		let level = '';
		const totalPounds = row * 2 + 1;

		for (let column = 0; column < totalColumns; column++) {
			if (
				column === midIndex ||
				(midIndex < column &&
					column <= midIndex + Math.floor(totalPounds / 2)) ||
				(midIndex > column && column >= midIndex - Math.floor(totalPounds / 2))
			) {
				level += '#';
			} else {
				level += ' ';
			}
		}

		console.log(level);
	}
}

// as in the 'steps' exercise, we also have two kinds of solutions: iterative and recursive.

module.exports = pyramid;
