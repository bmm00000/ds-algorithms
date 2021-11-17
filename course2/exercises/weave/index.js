// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions. (WE DO THIS IN ORDER NOT TO ABUSE THE FACT THAT THE CLASS IS WRAPPING AN ARRAY, WE ARE JUST WORKING WITH THE QUEUE, NOT THE ARRAY)
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

// function weave(sourceOne, sourceTwo) {
// 	const finalQ = new Queue();

// 	while (sourceOne.peek() || sourceTwo.peek()) {
// 		if (sourceOne.peek()) {
// 			finalQ.add(sourceOne.remove());
// 			// or:
// 			// finalQ.add(sourceOne.peek())
// 			// sourceOne.remove()
// 		}

// 		if (sourceTwo.peek()) {
// 			finalQ.add(sourceTwo.remove());
// 			// or:
// 			// finalQ.add(sourceTwo.peek())
// 			// sourceTwo.remove()
// 		}
// 	}

// 	return finalQ;
// }

const weave = (q1, q2) => {
	const weavedQ = new Queue();

	while (q1.peek() || q2.peek()) {
		if (q1.peek()) {
			weavedQ.add(q1.remove());
		}

		if (q2.peek()) {
			weavedQ.add(q2.remove());
		}
	}

	return weavedQ;
};

module.exports = weave;
