LINKED LISTS APPEAR VERY FREQUENTLY IN INTERVIEWS!

a linked list is an ordered collection of data: the collection contains a number of different nodes, each node contains some amount of data, and a reference to the next node: a linked list is a list of linked nodes, or a chain or nodes. the order of the nodes will not change, unless we specifically want to change it.

in every linked list there are two special nodes: the head node, and the tail node. the tail node does not have a reference to any other node. the data contained in the node can be of any type (number, string...)

by convention, in JS, we we call the properties of the objects that we use to represent nodes as 'data' and 'next'.

we are going to use JS classes to simulate the behaviour of a node in a linked list.

when you want to run any particular test in test.js, you delete 'skip'
