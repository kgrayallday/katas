// Array.prototype.sort
// Default behavior is to sort lexicographically (like alphabetically) 
// [ 6, 10, 300, 2000 ] becomes [ 10, 2000, 300, 6 ]
// sort comes with optional function for comparing each element

const myArray = [6, 10, 300, 2000]

myArray.sort()

console.log('regular sort:', myArray)
// returns [10, 2000, 300, 6]

myArray.sort(function(a,b) {
  return a - b
})

console.log('optional sort(numerical):', myArray);
// returns [6, 10, 300, 2000]