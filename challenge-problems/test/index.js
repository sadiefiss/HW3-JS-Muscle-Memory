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
  decomposition
} = require("..");

const {  isPrime : getPrime, firstNPrimes, sumOfNPrimes } = decomposition

describe("challenge 1 - Tripler", function () {
    const testCase1 = [1,2,3]
    const testOutput = tripler(testCase1)
    it("should return an array", function(){
      expect(testOutput, 'no return value provided').is.not.undefined
      expect(testOutput, 'return value is not an array').to.be.an('array')
    })
    it("should have matching input and output sizes", function(){
      expect(testOutput).to.have.lengthOf(testCase1.length)
    })
    it("should have correct output elements [1,2,3]=>[3,6,9]", function(){
        expect(testOutput).to.deep.equal([3,6,9])
    })
});

describe("challenge 2 - oddRange", function () {

  it("should return an array", function(){
    expect(oddRange(13),'no return value provided').is.not.undefined
    expect(oddRange(6),'return value is not an array').to.be.an('array')
    expect(oddRange(), 'no argument should return empty array').to.deep.equal([])
  })
  it("should only contain odd numbers", function(){
    expect(oddRange(6).every(n=>n %2 !=0)).to.be.true
    expect(oddRange(13).every(n=>n %2 !=0)).to.be.true
    expect(oddRange().every(n=>n %2 !=0)).to.be.true
  })
  it(`should return [1,3] for input (3)`, function(){
      expect(oddRange(3)).to.deep.equal([1,3])
  })
});

describe("challenge 3 - isPrime", function () {
  it("should return an boolean", function(){
    expect(isPrime(10)).to.be.false
    expect(isPrime(2017)).to.be.true
    expect(isPrime()).to.be.false
  })

  it("should correctly identify prime values", function(){
    expect(isPrime(2)).equals(true)
    expect(isPrime(10)).equals(false)
    expect(isPrime(11)).equals(true)
    expect(isPrime(9)).equals(false)
    expect(isPrime(2017)).equals(true)
  })

  it(`should return false for negative values or non-integer numbers`, function(){
    expect(isPrime(3.14), `error for decimal 3.14`).to.be.false
    expect(isPrime(7.0), `error for decimal 7.0`).to.be.true
    expect(isPrime(7.2), `error for decimal 7.2`).to.be.false
    expect(isPrime(-37)).to.be.false
    expect(isPrime(NaN)).to.be.false
  })

});

describe("challenge 4 - catBuilder", function () {
  const testcase = catBuilder("Garfield", "golden", [
    "scratching-post",
    "yarn",
  ]);

  it("should return an object", function () {
    expect(testcase).to.be.an("object");
  });

  it("should include object keys name, color, and toys", function () {
    expect(testcase).to.have.all.keys("color", "toys", "name");
    expect(testcase).to.not.have.keys("pizza", "cat");
  });

  it("should include a 'toys' key storing an array", function () {
    expect(testcase.toys).to.be.an("array");
  });

  it(`should return correct key/value pairs`, function () {
    expect(
      catBuilder("Garfield", "golden", ["scratching-post", "yarn"])
    ).to.deep.equal({
      name: "Garfield",
      color: "golden",
      toys: ["scratching-post", "yarn"],
    });

    expect(catBuilder("Whiskers", "rainbow", ["poptarts"])).to.deep.equal({
      name: "Whiskers",
      color: "rainbow",
      toys: ["poptarts"],
    });
  });
});

describe("challenge 5 - valuePairs", function () {
  const object1 = { name: "One", location: "Remote", age: 1 };
  const object2 = { name: "Two", location: "San Francisco" };
  const testOutput = valuePairs(object1, object2, "location");
  it("should return an array", function () {
    expect(testOutput).to.be.an("array");
    expect(testOutput).to.have.property("length").eq(2);
  });
  it("should return correct elements, if found in source objects", function () {
    expect(testOutput).to.have.ordered.members(["Remote", "San Francisco"]);
    expect(testOutput).to.have.members(["San Francisco", "Remote"]);
  });
  it(`valuePairs({ b: true, a: false }, { a: true, c: true, b: false }, "a") =>[false, true]`, function () {
    expect(
      valuePairs({ b: true, a: false }, { a: true, c: true, b: false }, "a")
    ).to.have.members([false, true]);
  });
  it(` valuePairs({ cat: "sprinkles" }, { cats: "Pharoah", dog: "Fido" }, "cat") => ["sprinkles", undefined]`, function () {
    expect(
      valuePairs({ cat: "sprinkles" }, { cats: "Pharoah", dog: "Fido" }, "cat")
    ).to.have.ordered.members(["sprinkles", undefined]);
  });
  it(`valuePairs({}, {}, "dog") => [ undefined, undefined]`, function () {
    expect(valuePairs({}, {}, "dog")).to.have.ordered.members([
      undefined,
      undefined,
    ]);
  });
  it(`valuePairs({ toppings: "cheese" }, { toppings: "olives" }, "toppings") => ["cheese", "olives"]`, function () {
    expect(
      valuePairs({ toppings: "cheese" }, { toppings: "olives" }, "toppings")
    ).to.have.ordered.members(["cheese", "olives"]);
  });
});

describe("challenge 6 - doesKeyExist", function () {
  const obj1 = {
    company: "General Assembly",
    course: "Software Engineering Immersive",
  };
  const test1 = doesKeyExist(obj1, "company"); // => true
  const test2 = doesKeyExist(obj1, "name"); // => false
  const test3 = doesKeyExist({ test: undefined, Test: true }, "test"); // => true

  it("should return a boolean value", function () {
    expect(test1).to.be.a("boolean");
  });
  it('should return the correct value: \n\t doesKeyExist({ company: "General Assembly", course: "Software Engineering Immersive",}, "name") => false', function () {
    expect(test2).to.eq(false);
  });
  it('should return the correct value: \n\t doesKeyExist({test: undefined, Test: true}, "test" => true', function () {
    expect(test3).to.eq(true);
  });
});

describe("challenge 7 - adults", function () {
  const testCase = [
    { name: "Khalid Robinson", age: 22 },
    { name: "Ariel Winter", age: 20 },
    { name: "Post Malone", age: 25 },
    { name: "Willow Smith", age: 17 },
  ];
  it("should return an array", function () {
    expect(adults(testCase)).to.be.an("array");
  });
  it(`should return correct elements: \n
  [
    {name: 'Khalid Robinson', age: 22},
    {name: 'Ariel Winter', age: 20},
    {name: 'Post Malone', age: 25},
    {name: 'Willow Smith', age: 17}
  ] => [
    "Khalid Robinson",
    "Ariel Winter",
    "Post Malone",
  ]
  `, function () {
    expect(adults(testCase)).to.have.ordered.members([
      "Khalid Robinson",
      "Ariel Winter",
      "Post Malone",
    ]);
  });
  it(" should return correct elements: \n", function () {
    expect(
      adults([
        { name: "a", age: 16 },
        { name: "b", age: 21 },
        { name: "c", age: 36 },
        { name: "d", age: -21 },
      ])
    ).to.have.ordered.members(["b", "c"]);
  });
});

describe("challenge 8 - countScores", function () {
  const testcase1 = [
    { name: "Pete", score: 2 },
    { name: "Dexter", score: 2 },
    { name: "Mike", score: 2 },
    { name: "Dexter", score: 2 },
    { name: "Mike", score: 2 },
    { name: "Pete", score: 2 },
    { name: "Dexter", score: 2 },
  ];
  const testcase2 = [
    { name: "Pete", score: 10 },
    { name: "Mike", score: 10 },
    { name: "Pete", score: -8 },
    { name: "Dexter", score: 12 },
  ];
  const testcase3 = [
    { name: "asdf", score: 22 },
    { name: "jkl", score: -20 },
    { name: "asdf", score: 25 },
    { name: "qwerty", score: 17 },
  ];

  it("should return an object", function () {
    expect(countScores(testcase1)).to.be.an("object");
  });
  it(`should return correct elements: \n
  [
    { name: "Pete", score: 2 },
    { name: "Dexter", score: 2 },
    { name: "Mike", score: 2 },
    { name: "Dexter", score: 2 },
    { name: "Mike", score: 2 },
    { name: "Pete", score: 2 },
    { name: "Dexter", score: 2 },
  ] => { Pete: 2, Mike: 10, Dexter: 12 }
  `, function () {
    expect(countScores(testcase2)).to.have.keys(["Pete", "Mike", "Dexter"]);
  });
  it(` should return correct scores:\n[
    { name: "asdf", score: 22 },
    { name: "jkl", score: -20 },
    { name: "asdf", score: 25 },
    { name: "qwerty", score: 17 }]
    => [47, -20, 17]`, function () {
    const output = Object.values(countScores(testcase3));
    expect(output).to.have.members([47, -20, 17]);
  });
});

describe("challenge 9 - decomposition", function () {
  it("should use isPrime helper function", function (){
    expect(getPrime).to.exist
    expect(getPrime(4)).to.equal(false)
    expect(getPrime(7)).to.equal(true)
  });
  it("should use firstNPrimes helper function", function (){
    expect(firstNPrimes).to.exist
    expect(firstNPrimes(4)).to.deep.equal([2,3,5,7])

  });
  it("isPrime should return a boolean", function (){
    expect(getPrime(37)).to.equal(true)
    expect(getPrime()).to.throw
    expect(getPrime(7)).to.be.a('boolean')
  });
  it("firstNPrimes should return an array", function (){
    expect(firstNPrimes(2)).to.be.an('array')
    expect(firstNPrimes(7)).to.deep.equal([2,3,5,7,11,13,17])
  });
  it("sumOfNPrimes should return a number", function (){
    expect(sumOfNPrimes(3)).to.be.a('number')
  });
  it("sumOfNPrimes should return correct values", function (){
    expect(sumOfNPrimes(7)).to.equal(58)
  });
});
