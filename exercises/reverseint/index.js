// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	// const str = n.toString();
	// let newStr = '';
	// for (let char of str) {
	// 	if (!isNaN(char)) {
	// 		newStr = char + newStr;
	// 	}
	// }
	// return parseInt(newStr) * Math.sign(n);
	//
	// const reversed = n.toString().split('').reverse().join('');
	// return parseInt(reversed) * Math.sign(n);
	// you can also do the following, instead of using Math.sign():
	// if (n < 0) {
	// 	return parseInt(reversed) * -1;
	// }
	// return parseInt(reversed);
	//
	//
	//
}

module.exports = reverseInt;
