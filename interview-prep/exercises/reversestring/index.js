// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	// return str.split('').reverse().join('');
	//
	// let reversed = '';
	// for (let char of str) {
	// 	reversed = char + reversed;
	// }
	// return reversed;
	//
	// let reversed = '';
	// for (let i = 0; i < str.length; i++) {
	// 	reversed = str[i] + reversed;
	// }
	// return reversed;
	//
	// let reversed = '';
	// let i = 0;
	// while (i < str.length) {
	// 	reversed = str[i] + reversed;
	// 	debugger;
	// 	i++;
	// }
	// return reversed;
	//
	// return str.split('').reduce((reversed, char) => char + reversed, '');
	//
	//
}

// we have used two approaches: iterative (three kinds of loops), and methods (two options with methods).
// the time complexity of all approaches are O(n)

// reverse('hellothere');
// and then in the CLI you type 'node inspect index.js', then you type 'c' (continue) to execute the function until it pauses in the 'debugger' statement. then you type 'repl' and then you can type to inspect the variables that you are dealing with.

module.exports = reverse;

// to run the tests in jest: 'jest reversestring/test.js --watch', or 'jest reversestring --watch' also works
// when you are running the test, every time you make any changes, it runs the test automatically (you can also do it pressing enter). to exit the running test, press control + C
