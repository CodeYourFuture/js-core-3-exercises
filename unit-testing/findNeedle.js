function equals(got, expected) {
  if (got === expected) {
    console.log("✔︎ Passed");
    console.log();
  } else {
    console.log("𝙭 Failed");
    console.log("    Expected: " + expected);
    console.log("    But got:  " + got);
    console.log();
  }
}

var haystack1 = ['pony', 'water', 'keyboard', 'needle', 'cactus'];
var haystack2 = ['glass', 'needle',]

/*
Instructions:

Turn the below "find needle" code into a function
that returns the index of "needle" in the given haystack
*/
function getNeedle(newstack) {
  for (var i = 0; i < newstack.length; i++) {
    if (newstack[i] === 'needle') {
      console.log("Found needle at position " + i);
      return i
    }
  }

}
test ("i expect needle to be position 3",function(){
  expect(position).tobe(3);

})


equals(getNeedle(haystack1))
console.log(getNeedle(haystack2))