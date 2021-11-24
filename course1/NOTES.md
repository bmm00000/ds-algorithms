we are not going to solve the knapsack problem yet by writing a program, but we will.

remember, SHIFT + ENTER adds a new line in the console without executing the code.

the ‘best possible solution’ dep ends on your circumstances, but generally speaking is the best performance, so it takes the least amount of time. therefore, how do we measure performance?

in JS there’s a ‘performance’ object in which we can call the ‘now’ method, which gives us the current time stamp

to copy again the same in the console, you can use the up arrow key.

you try the same function with different arguments, and see how time changes.

when you use hard numbers (different numbers as inputs), a lot of factors (that have nothing to do with the algorithm) influence the amount of time it takes (new or old computer, how many processors running in the background, or in the browser, etc. also the browser does some optimizations behind the scene (it caches the function, values, etc.)), so the output may vary, even using the same inputs. therefore, measuring time like this is not a great idea, specially for low values. but still, if you use bigger and bigger numbers, you will start to see a trend (see screenshot)

therefore, we shouldn’t care much about the specific numbers (since these depend a lot on the environment, especially the low numbers), but we should care about the general trend (especially for the large numbers)

in our example, time increases in a linear way: the factor by which we increase the input (n), is the factor by which the time the function takes increases (also n).

this is how we judge performance when we talk about algorithms: we don’t care about the specific numbers but about the function of time (the trend) (generally speaking, the time it takes in relation to the inputs). we also call this ‘time complexity’. in our example, our algorithm has linear time complexity.

remember, you often have more than one way of solving a problem, ie. different algorithms that you can use to solve the problem (if we wouldn’t have different ways to solve a problem, then we wouldn’t need to measure and compare the performance of different algorithms)

constant time: the number of inputs doesn’t have any influence on the time that the algorithm takes. for example, the mathematical formula to solve our problem (see screenshot): there is no loop. if you measure the time the algorithm takes with different inputs, you will see that it's basically the same time. therefore, the performance of this algorithm is much better!

you could say: this algorithm has linear time complexity, or constant time complexity, etc., but we also use something called the big O notation, which makes it easier for us to express the time complexity of a given algorithm to other developers. Big O notation looks like this: O(n), O(1), etc. You can use the big O notation to add annotations in your code, or answer your interviewer, etc. Big O notation is the standard way to compare performance between algorithms.
