
/**
Implement a function pipe() that takes several functions as arguments and returns a new function
that will pass its argument to the first function, then pass the result to the second, then pass the result of
the second to the third, and so on, finally returning the output of the last function. In other words,
calling pipe(foo, bar, baz)(1, 2, 3) would be equivalent to calling baz(bar(foo(1,2,3))).
*/
