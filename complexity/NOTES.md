RUNTIME COMPLEXITY:

we are comparing/deciding what solution/algorithm to any problem is 'better' than another.

our goal is to identify any given runtime complexity

look at the iterative solution of the reversestring problem: see screenshot:
for each additional character we add in the input, we have to do one more additional step of work: linear runtime (one to one relationship between of input elements into the algo, and the steps of work to process it)

on the other hand, look at the nested loops in the solution to the steps problem (see screenshot): N^2 runtime complexity or quadratic runtime.

look at the screenshot with the different runtime complexities, there are also others (that involve some math to calculate) but these are the most frequent in interview questions.

'constant runtime' is the holy grail, our solutions have to tend to go for it in the scale of complexities, we want to avoid exponential time at all cost. in some interview questions, you will get a problem with a quadratic or exponential runtime 'easy' solution, but also with a potential better solution, you can use the 'easy' solutions as a start point, but have to progress towards the better solutions.

quasilinear time: increasing the input by one increases the amount of time by 1 plus a little bit.

'big O' is another way to refer to runtime complexity.

there are no constants in runtime complexity, we never say n/2 if we are iterating over half an array or something like that, we just say 'n'.

the same argument that we used to determine the runtime complexity of string reversal and steps problems, can also be used to determine the space complexity.

most of the interview questions are about time complexity, and not so much about space complexity
