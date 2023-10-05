// Writing tests for console output: https://stackoverflow.com/questions/30625404/how-to-unit-test-console-output-with-mocha-on-nodejs

const expect = require("chai").expect;

const {
  tripler,
  oddRange,
  isPrime,
  catBuilder,
  valuePairs,
  doesKeyExist,
  adults,
  countScores,
  decomposition,
} = require("..");

// describe("challenge 1 - Tripler", function () {
//     const testCase1 = [1,2,3]
//     const testOutput = tripler(testCase1)
//     it("should return an array", function(){
//       expect(testOutput, 'no return value provided').is.not.undefined
//       expect(testOutput, 'return value is not an array').to.be.an('array')
//     })
//     it("Output array length should match input array length", function(){
//       expect(testOutput).to.have.lengthOf(testCase1.length)
//     })
//     it("Each value in input should be tripled in output", function(){
//         expect(testOutput).to.deep.equal([3,6,9])
//     })
// });

// describe("challenge 2 - oddRange", function () {

//   it("should return an array", function(){
//     expect(oddRange(13),'no return value provided').is.not.undefined
//     expect(oddRange(6),'return value is not an array').to.be.an('array')
//     expect(oddRange(), 'no argument should return empty array').to.deep.equal([])
//   })
//   it("output should only contain odd numbers", function(){
//     expect(oddRange(6).every(n=>n %2 !=0)).to.be.true
//     expect(oddRange(13).every(n=>n %2 !=0)).to.be.true
//     expect(oddRange().every(n=>n %2 !=0)).to.be.true
//   })
//   it(`oddRange(3) should return [1,3]`, function(){
//       expect(oddRange(3)).to.deep.equal([1,3])
//   })
// });



// describe("challenge 3 - isPrime", function () {
//   it("should return an boolean", function(){
//     expect(isPrime(10),'10').to.be.false
//     expect(isPrime(2017),'2017').to.be.true
//     expect(isPrime(),'null').to.be.false
//   })
//   it("should correctly identify prime values", function(){
//     expect(isPrime(2)).equals(true)
//     expect(isPrime(10)).equals(false)
//     expect(isPrime(11)).equals(true)
//     expect(isPrime(9)).equals(false)
//     expect(isPrime(2017)).equals(true)
//   })
//   it(`should return false for negative values or non-integer numbers`, function(){
//     expect(isPrime(3.14), `error for decimal 3.14`).to.be.false
//     expect(isPrime(7.0), `error for decimal 7.0`).to.be.true 
//     expect(isPrime(7.2), `error for decimal 7.2`).to.be.false
//     expect(isPrime(-37)).to.be.false
//     expect(isPrime(NaN)).to.be.false
//   })

// });

// describe("challenge 3 - isPrime", function () {
//   it("should return an boolean", function(){
//     expect(isPrime(10),'10').to.be.false
//     expect(isPrime(2017),'2017').to.be.true
//     expect(isPrime(),'null').to.be.false
//   })
//   it("should correctly identify prime values", function(){
//     expect(isPrime(2)).equals(true)
//     expect(isPrime(10)).equals(false)
//     expect(isPrime(11)).equals(true)
//     expect(isPrime(9)).equals(false)
//     expect(isPrime(2017)).equals(true)
//   })
//   it(`should return false for negative values or non-integer numbers`, function(){
//     expect(isPrime(3.14), `error for decimal 3.14`).to.be.false
//     expect(isPrime(7.0), `error for decimal 7.0`).to.be.true 
//     expect(isPrime(7.2), `error for decimal 7.2`).to.be.false
//     expect(isPrime(-37)).to.be.false
//     expect(isPrime(NaN)).to.be.false
//   })

// });