function sum(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', function() {
  expect(sum(1, 2)).toBe(3);
});

test("I expect 2+2 to equal 4", function() {
  var result = sum(2,2);
  
  expect(result).toBe(9);
});

