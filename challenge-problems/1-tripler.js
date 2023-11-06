/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.

Examples:

tripler([1,2,3]); // => [ 3, 6, 9 ]
tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/
//MY C0DE
function tripler(array) {
 return array.map(elm => elm * 3);
}
console.log(tripler([5,2,3]));
console.log(tripler(4,3,5));

module.exports = tripler