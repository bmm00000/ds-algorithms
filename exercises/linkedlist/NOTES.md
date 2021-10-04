LINKED LISTS APPEAR VERY FREQUENTLY IN INTERVIEWS!

a linked list is an ordered collection of data: the collection contains a number of different nodes, each node contains some amount of data, and a reference to the next node: a linked list is a list of linked nodes, or a chain of nodes. the order of the nodes will not change, unless we specifically want to change it.

in every linked list there are two special nodes: the head node, and the tail node. the tail node does not have a reference to any other node. the data contained in the node can be of any type (number, string...)

by convention, in JS, we we call the properties of the objects that we use to represent nodes as 'data' and 'next'.

we are going to use JS classes to simulate the behaviour of a node in a linked list.

when you want to run any particular test in test.js, you delete 'skip'

see screenshot: creating methods like 'getFirst', etc. may not be the best idea. Better to create reusable methods and then we customize them with proper arguments. as a result, you will have less methods and achieve the same.
therefore, if your interviewer asks you to create method to get the first node, you can ask: 'are we going to make any other method to retrieve any other elements? if so, we can careate something like 'getAt' and add the required arguments
THIS FORWARD LOOKING THINKING WILL BLOW AWAY YOUR INTERVIEWER!
then, if you need to do a insertFirst method anyways, you can use insertAt inside of it (see screenshot)

VIDEOS ABOUT GENERATORS-ITERATORS: will probably not appear on interviews, but it's a way to completely blow away the interviewer.

Read–eval–print loop
A read–eval–print loop, also termed an interactive toplevel or language shell, is a simple interactive computer programming environment that takes single user inputs, executes them, and returns the result to the user; a program written in a REPL environment is executed piecewise.

WE CAN USE THE GENERATOR OBJECT TO WALK THROUGH SEGMENTS OF THE CODE OF OUR FUNCTION.
when you call the method 'next' of the generator, when the 'yield' statement is found, execution of that function is paused.

practical use of generators:
screenshot: we want to write a function that iterates through the values of the tree, and collects them into a single array, in a depth first search fashion (go as deep as you can, and then continue iterating). Therefore, the result that you want is 1,2,4,3.

another practical use of a generator function:
create of 'for of' loop in the linked list.

REMEMBER:
Generators are iterators, but not all iterators are generators.
An iterator is typically something that has a next method to get the next element from a stream. A generator is an iterator that is tied to a function.
