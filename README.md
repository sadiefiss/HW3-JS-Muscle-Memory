
## JS Muscle Memory
This problem set will test your understanding of how JavaScript is evaluated.
Check your answers by running the lines code in your browser console. 

Suggestions: 
- Type out these expressions and avoid copy & paste. 
- Get used to typing JavaScript! Some of these answers are obvious but run the code anyway to get familiar with the workflow for running JavaScript.

### Task 1
- Goal: Predict what the following JavaScript expressions will evaluate to. 
- Task: Complete all of the expressions below inside of the Chrome DevTools.
- Note: If a method or output is unexpected put a note as a comment in the app.js file for task 1. 


```js
4 + 4 / 2
(2 + -7) * 3
101 % 10
12 - 4 % 3
true && false
true && !(false || false)
!true && !(false || false)
'cat' + 'dog'
2 + 'pizza'
2.5 * 'fish'
5 >= 11
5 === 5.0
7 !== 7.1
5 + 5 > 8
6 + 6 !== 12
2 > 1 || false
'true' === true
10 % 2 === 0
21 % 2 === 0
21 % 2 !== 0
21 % 2 === 1
12 % 3 === 0
9 % 3 === 0
14 % 3 === 0
'new york'[0]
'new york'[1]
'san francisco'[2 * 3]
'engineering'[3].toUpperCase()
'engineering'.indexOf('G')
'engineering'.indexOf('neer')
'engineering'.indexOf('r') > -1
'science'.indexOf('x') === -1
```

### Task 2
- Goal: Practice predicting what the `console.log` lines will print out. 
- Task: Test your work by writing these code snippets to `app.js` files and running them in the browser. 
- Note: If you have 'NodeJS' installed on your machine, you can run the command `node app.js` and it will execute the js in that environment (instead of requiring a browser).
```js
// 1
let idx = 'abcde'.indexOf('D');
idx = idx + 11;
console.log(idx); // ?
idx * 2;
console.log(idx); // ?
```
```js
// 2
let num = 33;
let isEven = num % 2 === 0;
console.log(isEven); // ?
console.log(!isEven); // ?
```
```js
// 3
let str1 = 'marker';
let num = 'whiteboard'.length - str1.length;
console.log(num); // ?
let str2 = 'bootcamp';
console.log(str2[num].toUpperCase()); // ?
let char = str2[num].toLowerCase(); // ?
console.log(char + '!'); // ?
```
```js
// 4
let sentence = 'welcome to bootcamp prep';
let lastChar = sentence[sentence.length - 1];
console.log(lastChar); // ?
console.log(sentence.indexOf(lastChar)); // ?
```
### Task 3: Conditionals

- Goal: Practice predicting what the `console.log` lines will print out. 
- Task: Test your work by writing these code snippets to `app.js` files and running them in the browser. 
- Note: If you have 'NodeJS' installed on your machine, you can run the command `node app.js` and it will execute the js in that environment (instead of requiring a browser).
- Note: No copy and pasting!
- Note: After, feel free to play around with the variable (by assigning your own value)
in each example to experiment!


```js
// 5
let age = 30; // try different numbers here
if (age > 30) {
  console.log('older than 30');
} else {
  console.log('younger than 30');
}
```
```js
// 6
let str = 'pizza'; // try different strings here
if (str.length > 10) {
  console.log('long string');
} else {
  console.log('short string');
}
if (str[0] === 'p') {
  console.log('starts with p');
}
```
```js
// 7
let num = 15; // try different numbers here
if (num % 3 === 0) {
  console.log('divisible by 3');
} else if (num % 5 === 0) {
  console.log('divisible by 5');
}
```
```js
// 8
let num = 15; // try different numbers here
if (num % 3 === 0) {
  console.log('divisible by 3');
}
if (num % 5 === 0) {
  console.log('divisible by 5');
}
```
```js
// 9
let str = 'General Assembly'; // try different strings here
if (str[0] === str[0].toUpperCase()) {
  console.log('starts with a capital!');
}
if (str[str.length - 1] === str[str.length - 1].toUpperCase()) {
  console.log('ends with a capital!');
}
```
```js
// 10
let num = -44; // try different numbers here
if (num > 0) {
  console.log('positive');
} else if (num < 0) {
  console.log('negative');
} else {
  console.log(0);
}
if (num % 2 === 0) {
  console.log('even');
} else {
  console.log('odd');
}
```
### Task 4: Conditional Muscle Memory
- Goal: Practice typing the syntax for conditionals. 
- Task: Type each snippet 10 times each to
burn the muscle memory into your typing fingers! 
- Note: Be sure to use proper spacing and
indentation, type it **exactly** as shown below.
- Note: You'll realize how easy it is to forget parentheses or braces. Syntax
errors like this will cause your code to be totally misunderstood by the computer.

```js
let num = 11; // feel free to change the value of this variable
if (num > 5) {
  console.log('if');
}
```
```js
let num = 5; // feel free to change the value of this variable
if (num > 5) {
  console.log('if');
} else {
  console.log('else');
}
```
```js
let num = 0; // feel free to change the value of this variable
if (num < 0) {
  console.log('if');
} else if (num > 0) {
  console.log('else if');
} else {
  console.log('else');
}
```

### Task 5: Function Muscle Memory

- Goal: Practice typing the syntax for functions. 
- Task: Type each snippet 10 times. 
- Note: Focus on using proper style and indentation. Be sure to test your code by running it after
each repetition.
- Note: You'll be surprised and also annoyed at what details you missed! Learn from those typos.

```js
function sayHello(name) {
  let msg = 'Hello, ' + name + '. How are you?';
  return msg;
}
console.log(sayHello('bootcamp prep')); // feel free to change the string being passed
```

```js
function checkNumber(num) {
  if (num > 0) {
    return 'positive';
  } else if (num < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}
console.log(checkNumber(5)); // feel free to change the number being passed
```

```js
function fizzBuzz1(max) {
  for (let i = 0; i < max; i += 1) {

    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}
```

```js
function evenCaps(sentence) {
  let newSentence = "";

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];

    if (i % 2 === 0) {
      let capitalChar = char.toUpperCase();
      newSentence += capitalChar;
    } else {
      newSentence += char;
    }
  }

  return newSentence;
}
```

### (Optional) Tasks 6: More JavaScript Challenge Problems

- Goal: Practice working through a series of progressively more challenging JS coding problems 
- Task: Pseudo-code and find a working solution. 
- Note: These problems may be review, but practice writing these solutions with your own skills rather than searching for an answer online, or looking back at an earlier code sample.  