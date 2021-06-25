// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	// let num = 0;
	// for (let letter of str) {
	// 	const lowLetter = letter.toLowerCase();
	// 	if (
	// 		lowLetter === 'a' ||
	// 		lowLetter === 'e' ||
	// 		lowLetter === 'i' ||
	// 		lowLetter === 'o' ||
	// 		lowLetter === 'u'
	// 	) {
	// 		num++;
	// 	}
	// }
	// return num;

	// let num = 0;
	// const checker = ['a', 'e', 'i', 'o', 'u'];
	// for (let letter of str.toLowerCase()) {
	// 	if (checker.includes(letter)) {
	// 		num++;
	// 	}
	// }
	// return num;

	// const matches = str.match(/[aeiou]/gi);
	// return matches ? matches.length : 0;
	//
	//
	//
	//
	//
	//
	//
	// const lowStr = str.toLowerCase();
	// let num = 0;
	// for (let char of lowStr) {
	// 	if (
	// 		char === 'a' ||
	// 		char === 'e' ||
	// 		char === 'i' ||
	// 		char === 'o' ||
	// 		char === 'u'
	// 	) {
	// 		num += 1;
	// 	}
	// }
	// return num;
	//
	//
	//
	const lowStr = str.toLowerCase();
	const regex = /[aeiou]/gi;
	const matches = lowStr.match(regex);
	return matches ? matches.length : 0;
	// WATCH OUT! if you just return lowStr.match(regex).length, it will return null if there are no matches, and you want 0, not null!
	//
	// we are using an iterative solution and a regex solution.
}

module.exports = vowels;
