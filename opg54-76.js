//Freecodecamp.org - JavaScript Algorithms and Data Structures - Basic JavaScript.

// opg. 54. Global vs. Local Scope in Functions.

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line

    const outerWear = "sweater";
    
    // Only change code above this line
    return outerWear;
}

myOutfit();

// opg. 55. Understanding Undefined Value returned from a Function.

// Setup
let sum = 0;

function addThree() {
    sum = sum + 3;
}

// Only change code below this line
function addFive() {
    sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();

// opg. 56. Assignment with a Returned Value.

// Setup
let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);

// opg. 57. Stand in Line.

function nextInLine(arr, item) {
    // Only change code below this line

    arr.push(item);
    return arr.shift();

    // Only change code above this line
}

// Setup
let testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// opg. 58. Understanding Boolean Values.

function welcomeToBooleans() {
    
    // Only change code below this line
    
    return true; // Change this line
    
    // Only change code above this line
}

// opg. 59. Use Conditional Logic with If Statements.

function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
    
    // Only change code above this line    
}

// opg. 60. Comparison with the Equality Operator.

// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);

// opg. 61. Comparison with the Strict Equality Operator.

// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);

// opg. 62. Practice comparing different values.

// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");

// opg. 63. Comparison with the Inequality Operator.

// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);

// opg. 64. Comparison with the Strict Inequality Operator.

// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testStrictNotEqual(10);

// opg. 65. Comparison with the Greater Than Operator.

function testGreaterThan(val) {
    if (val > 100) { // Change this line
        return "Over 100";
    }
    
    if (val > 10) { // Change this line
        return "Over 10";
    }
    
    return "10 or Under";
}

testGreaterThan(10);

// opg. 66. Comparison with the Greater Than Or Equal To Operator.

function testGreaterOrEqual(val) {
    if (val >= 20) { // Change this line
        return "20 or Over";
    }
    
    if (val >= 10) { // Change this line
        return "10 or Over";
    }
    
    return "Less than 10";
}

testGreaterOrEqual(10);

// opg. 67. Comparison with the Less Than Operator.

function testLessThan(val) {
    if (val < 25) { // Change this line
        return "Under 25";
    }
    
    if (val < 55) { // Change this line
        return "Under 55";
    }
    
    return "55 or Over";
}

testLessThan(10);

// opg. 68. Comparison with the Less Than Or Equal To Operator.

function testLessOrEqual(val) {
    if (val <= 12) { // Change this line
        return "Smaller Than or Equal to 12";
    }
    
    if (val <= 24) { // Change this line
        return "Smaller Than or Equal to 24";
    }
    
    return "More Than 24";
}

testLessOrEqual(10);

// opg. 69. Comparisons with the Logical And Operator.

function testLogicalAnd(val) {
    // Only change code below this line
    
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    
    // Only change code above this line
    return "No";
}

testLogicalAnd(10);

// opg. 70. Comparisons with the Logical Or Operator.

function testLogicalOr(val) {
    // Only change code below this line
    
    if (val < 10 || val > 20) {
        return "Outside";
    }
    
    // Only change code above this line
    return "Inside";
}

testLogicalOr(15);

// opg. 71. Introducing Else Statements.

function testElse(val) {
    let result = "";
    // Only change code below this line
    
    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }
    
    // Only change code above this line
    return result;
}

testElse(4);

// opg. 72. Introducing Else If Statements.

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }
    
    else if (val < 5) {
        return "Smaller than 5";
    }
    
    else {
        return "Between 5 and 10";
    }
}

testElseIf(7);

// opg. 73. Logical Order in If Else Statements.

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    }
    
    else if (val < 10) {
        return "Less than 10";
    }
    
    else {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);

// opg. 74. Chaining If Else Statements.

function testSize(num) {
    // Only change code below this line
    
    if (num < 5) {
        return "Tiny";
    }
    
    else if (num < 10) {
        return "Small";
    }
    
    else if (num < 15) {
        return "Medium";
    }
    
    else if (num < 20) {
        return "Large";
    }
    
    else {
        return "Huge";
    }
    
    // Only change code above this line
}

testSize(7);

// opg. 75. Golf Code.

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line
    
    if (strokes == 1) {
        return names[0];
    }
    
    else if (strokes <= par - 2) {
        return names[1];
    }
    
    else if (strokes == par - 1) {
        return names[2];
    }
    
    else if (strokes == par) {
        return names[3];
    }
    
    else if (strokes == par + 1) {
        return names[4];
    }
    
    else if (strokes == par + 2) {
        return names[5];
    }
    
    else if (strokes >= par + 3) {
        return names[6];
    }
    
    // Only change code above this line
}

golfScore(5, 4);

// opg. 76. Selecting from Many Options with Switch Statements.

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    
    // Only change code above this line
    return answer;
}

caseInSwitch(1);