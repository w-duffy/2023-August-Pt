# Array practice

Identify the time complexity of each of these functions with a 1 sentence
justification for your answer. Assume `arr` is an array of length _n_.

## `arr.push()`

Time complexity: O(1)
Space complexity: O(1)
Justification: Adding to the end of the Arra, by utilizing the .length propertty this happens IN PLACE.

Worst case scenario, we have O(n) time and space but ONLY in the instance where we resize

[push on MDN][push]


## `arr.pop()`

Time complexity: O(1)
Space complexity: O(1)
Justification: Because we do not need to shift any indices on removal, the time complexity remains constant. And we are not taking additional space to resize so space complexity is constant

[pop on MDN][pop]

## `arr.shift()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Because we have to account for indices on shift, when we remove the first item from an array we have to move all other indices to the left by one therefore this process does a loop under the hood which takes O(n) time. No additional space is needed because we are not taking more space (no growth) on removal of elements

[shift on MDN][shift]

## `arr.unshift()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Because we need to move elements over to account for indices, this would ususally be O(n) unless we resize. For space, we already have the free space (ususally) so no additional space is needed, unless in the worst case we ask for more space

[unshift on MDN][unshift]

## `arr.splice()`

Time complexity: O(n)
Space complexity: O(n) **could be O(1) in some cases
Justification: Splice will allow us to delete, or insert (or both). And this can then cause resizing, and shifting. Which could be O(n) time complexity to account for indicies. and can be O(n) space to account for new arrays being created.

[splice on MDN][splice]

## `arr.slice()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Because we have to make a shallow copy, this takes up additional space (we dont know how big that new space is going to be). We haev to iterate over all the things we want to copy into the new shallow array. O(n) time and space

[slice on MDN][slice]

## `arr.indexOf()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Because we have to iterate over every element in order to find the item we are looking for. And then return the index of that item. O(n) time. But because we do not take any additional spac, O(1) space

[indexOf on MDN][indexOf]


## `arr.map()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Map returns a new array with elements that are contingent on some condition from the OG array. Because we have to create a new space in memory for a new array, O(n) space complexity. And beacuse we have iterate over every element in the OG array to apply the evaluation to it, O(N) time complexity.

[map on MDN][map]

## `arr.filter()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Filter returns a new array of elements that met the condition from the call back. Because we createa new unknown in size array, O(n) space. And because we have to iterate through the entire length of an unknown size OG array O(n) time complexity

[filter on MDN][filter]

## `arr.reduce()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Because the accumulator is a variable that is just being reassined after each iteration, there is no growth O(1) space. But we have to iterate over every element in the arr, therefore O(N) time complexity.

[reduce on MDN][reduce]

## `arr.reverse()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Because we are doing this IN PLACE, no additional memory is taken up so O(1) space. But we haev to iterate over these elements so O(n) time

[reverse on MDN][reverse]

## `[...arr]`

Time complexity: O(n)
Space complexity: O(n)
Justification: Because we are iterating from the child array and placing it into the parent array, this can take additional space because we need to retain space in memory for the child (remember what is int here) and also place it in the parent which may cause a resizing

[spread on MDN][spread]

[push]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
[pop]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
[shift]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
[unshift]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
[splice]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
[slice]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
[indexOf]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
[map]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[filter]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[reduce]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
[reverse]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
[spread]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
