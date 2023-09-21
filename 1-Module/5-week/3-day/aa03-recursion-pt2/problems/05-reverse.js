/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/


function reverse(str) {
  // Your code here
  //base case
  if(!str.length) return str

  //recursive case -- when we should make the recursive call
  //recursive step to get us closer to that base case
  let sliced = str.slice(1)
  console.log("1", sliced)
  console.log("2", str[0])
  return reverse(sliced) + str[0]

}
// console.log(reverse("house")); // "esuoh"
console.log(reverse("dog")); // "god"
// console.log(reverse("atom")); // "mota"
// console.log(reverse("q")); // "q"
// console.log(reverse("id")); // "di"
// console.log(reverse("")); // ""

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
