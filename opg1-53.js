//Freecodecamp.org - JavaScript Algorithms and Data Structures - Basic JavaScript.

// opg. 1. Comment Your JavaScript Code.

// hej med dig jeg hedder Nicklas

/* hej med dig jeg hedder Nicklas */

// opg. 2. Declare JavaScript Variables.

var myName;

// opg. 3. Storing Values with the Assignment Operator.

// Setup
var a;

// Only change code below this line
a = 7;

// opg. 4. Assigning the Value of One Variable to Another.

// Setup
var a;
a = 7;
var b;

// Only change code below this line
b = a; 

// opg. 5. Initializing Variables with the Assignment Operator.

var a = 9;

// opg. 6. Declare String Variables

var myFirstName = "Nicklas"
var myLastName = "Galver"

// opg. 7. Understanding Uninitialized Variables.

// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

// opg. 8. Understanding Case Sensitivity in Variables.

// Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// opg. 9. Explore Differences Between the var and let Keywords.

let catName = "Oliver";
let catSound = "Meow!";
function catTalk() {
  "use strict";

  catName = "Oliver";
  catSound = "Meow!";
  return catName + " says " + catSound;
}
catTalk();

// opg. 10. Declare a Read-Only Variable with the const Keyword.

const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);

// opg. 11. Add Two Numbers with JavaScript.

var sum = 10 + 10;

// opg. 12. Subtract One Number from Another with JavaScript.

var difference = 45 - 33;

// opg. 13. Multiply Two Numbers with JavaScript.

var product = 8 * 10;

// opg. 14. Divide One Number by Another with JavaScript.

var quotient = 66 / 33;

// opg. 15. Increment a Number with JavaScript.

let myVar = 87;

// Only change code below this line
myVar++;

// opg. 16. Decrement a Number with JavaScript.

let myVar = 11;

// Only change code below this line
myVar--;

// opg. 17. Create Decimal Numbers with JavaScript.

var ourDecimal = 5.7;

// Only change code below this line
var myDecimal = 5.7;

// opg. 18. Multiply Two Decimals with JavaScript.

var product = 2.0 * 2.5;

// opg. 19. Divide One Decimal by Another with JavaScript.

var quotient = 4.4 / 2.0; // Change this line

// opg. 20. Finding a Remainder in JavaScript.

const remainder = 11 % 3;

// opg. 21. Compound Assignment With Augmented Addition.

let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

// opg. 22. Compound Assignment With Augmented Subtraction.

let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

// opg. 23. Compound Assignment With Augmented Multiplication.

let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

// opg. 24. Compound Assignment With Augmented Division.

let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

//opg. 25. Escaping Literal Quotes in Strings.

const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

// opg. 26. Quoting Strings with Single Quotes.

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// opg. 27. Escape Sequences in Strings.

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; 

// opg. 28. Concatenating Strings with Plus Operator.

const myStr = "This is the start. " + "This is the end.";

// opg. 29. Concatenating Strings with the Plus Equals Operator.

let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

// opg. 30. Constructing Strings with Variables.

var myName = "Nicklas";
var myStr = "My name is " + myName + " and I am well!";
console.log(myStr);

// opg. 31. Appending Variables to Strings.

var someAdjective = "fun!";
var myStr = "Learning to code is ";
myStr += someAdjective;

// opg. 32. Find the Length of a String.

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

// opg. 33. Use Bracket Notation to Find the First Character in a String.

// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];

// opg. 34. Understand String Immutability.

//setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World";

// opg. 35. Use Bracket Notation to Find the Nth Character in a String.

// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2];

// opg. 36. Use Bracket Notation to Find the Last Character in a String.

// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1];

// opg. 37. Use Bracket Notation to Find the Nth-to-Last Character in a String.

// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2];

// opg. 38. Word Blanks.

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "My " + myNoun + " is " + myAdjective + " and " + myVerb + " very " + myAdverb + ".";
// Only change code above this line

// opg. 39. Store Multiple Values in one Variable using JavaScript Arrays.

// Only change code below this line
const myArray = ["Nicklas", 27];

// opg. 40. Nest one Array within Another Array.

// Only change code below this line
const myArray = [["Nicklas", 27], ["Bobby", 25]];

// opg. 41. Access Array Data with Indexes.

const myArray = [50,60,70];
let myData = myArray[0];

// opg. 42. Modify Array Data With Indexes.

// Setup
const myArray = [18,64,99];

// Only change code below this line
myArray[0] = 45;

// opg. 43. Access Multi-Dimensional Arrays With Indexes.

const myArray = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];

const myData = myArray[2][1];

// opg. 44. Manipulate Arrays With push().
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3]);

// opg. 45. Manipulate Arrays With pop().
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray = myArray.pop();

// opg. 46. Manipulate Arrays With shift().
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();

// opg. 47. Manipulate Arrays With unshift().
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);

// opg. 48. Shopping List.
const myList = [["Chocolate Bar", 15], ["Milk", 3], ["Candy", 5], ["Bread", 1], ["Butter", 1]];

// opg. 49. Write Reusable JavaScript with Functions.

function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();

// opg. 50. Passing Values to Functions with Arguments.

function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(1, 2);
functionWithArgs(7, 9);

// opg. 51. Return a Value from a Function with Return.

function timesFive(a) {
  return a * 5;
}
timesFive(5);

// opg. 52. Global Scope and Functions.

// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}
var oopsGlobal = 5;

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// opg. 53. Local Scope and Functions.

function myLocalScope() {
 // Only change code below this line
 let myVar
 console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);