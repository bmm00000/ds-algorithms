// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	// let count = 0;
	// for (let char of str.toLowerCase()) {
	// 	if (
	// 		char === 'a' ||
	// 		char === 'e' ||
	// 		char === 'i' ||
	// 		char === 'o' ||
	// 		char === 'u'
	// 	) {
	// 		count += 1;
	// 	}
	// }
	// return count;
	//
	//
	//
	let count = 0;
	// const checker = 'aeiou';
	// an array would be clearer here for other developers, and it would also allow us to include other patterns apart from single vowels (for example, const checker = ['a', 'e', 'i', 'o', 'u', 'abc']):
	// const checker = ['a', 'e', 'i', 'o', 'u'];
	// for (let char of str.toLowerCase()) {
	// 	if (checker.includes(char)) {
	// 		count++;
	// 	}
	// }
	// return count;
	// includes() applies both to arrays and strings
	//
	//
	//
	// const regex = /[aeiou]/gi;
	// const result = str.toLowerCase().match(regex);
	// return result ? result.length : 0;
	// WATCH OUT! if you just return lowStr.match(regex).length, it will return null if there are no matches, and you want 0, not null!
	//
	// we are using 2 iterative solutions and a regex solution.
	//
	//
	//
}

module.exports = vowels;
