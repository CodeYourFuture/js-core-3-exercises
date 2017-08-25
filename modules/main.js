/*
Instructions:
- Import the function "findNeedle" defined in `findNeedle.js`.
- Use it with the `haystack` array and print the result!
*/

var haystack1 = ['pony', 'water', 'keyboard', 'needle', 'cactus', 'needle'];
function findNeedle(haystack) {
  for(var i = 0; i < haystack.length; i++) {
    if(haystack[i] === "needle") {
      return i;
    }
  }
}