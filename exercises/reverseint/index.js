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
	// first solution:
	// const reversedStr = n.toString().split('').reverse().join('');
	// if (n < 0) {
	// 	return parseInt(reversedStr) * -1;
	// }
	// return parseInt(reversedStr);
	// second solution:
	// const reversedStr = n.toString().split('').reverse().join('');
	// return parseInt(reversedStr) * Math.sign(n);
	// 	const revnStr = n.toString().split('').reverse().join('');
	// 	if (n < 0) {
	// 		return parseInt(revnStr) * -1;
	// 	} else {
	// 		return parseInt(revnStr);
	// 	}
	// REVISION:
	// let newNumStr = '';
	// for (let char of n.toString()) {
	// 	if (isNaN(parseInt(char))) {
	// 		continue;
	// 	} else {
	// 		newNumStr = char + newNumStr;
	// 	}
	// }
	// return parseInt(newNumStr) * Math.sign(n);
	// const nStr = n.toString().split('').reverse().join('');
	// return parseInt(nStr) * Math.sign(n);
	// const reversedStr = n.toString().split('').reverse().join('');
	// return parseInt(reversedStr) * Math.sign(n);

	// let reversedStr = '';
	// for (let char of n.toString()) {
	// 	reversedStr = char + reversedStr;
	// }
	// return parseInt(reversedStr) * Math.sign(n);
	//
	//
	//
	// const str = n.toString();
	// let newStr = '';
	// for (let char of str) {
	// 	if (!isNaN(char)) {
	// 		newStr = char + newStr;
	// 	}
	// }
	// return parseInt(newStr) * Math.sign(n);

	return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}

module.exports = reverseInt;
