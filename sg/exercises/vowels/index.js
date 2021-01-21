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

	const matches = str.match(/[aeiou]/gi);
	return matches ? matches.length : 0;
}

module.exports = vowels;
