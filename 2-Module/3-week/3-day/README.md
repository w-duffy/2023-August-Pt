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
