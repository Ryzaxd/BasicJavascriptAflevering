//Freecodecamp.org - JavaScript Algorithms and Data Structures - Basic JavaScript.

// opg. 95. Record Collection.

// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && value !== '') {
        records[id][prop] = value;
    } else if (prop === 'tracks' && records[id].hasOwnProperty('tracks') === false) {
        records[id][prop] = [value];
    } else if (prop === 'tracks' && value !== '') {
        records[id][prop].push(value);
    } else if (value === '') {
        delete records[id][prop];
    }
    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

console.log(recordCollection);

// opg. 96. Iterate with JavaScript While Loops.

// Setup
const myArray = [];

// Only change code below this line
let i = 5;
while (i >= 0) {
    myArray.push(i);
    i--;
}

console.log(myArray);

// opg. 97. Iterate with JavaScript For Loops.

// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i <= 5; i++) {
    myArray.push(i);
}

console.log(myArray);

// opg. 98. Iterate Odd Numbers With a For Loop.

// Setup
const myArray = [];

// Only change code below this line

for (let i = 1; i <= 9; i += 2) {
    myArray.push(i);
}

console.log(myArray);

// opg. 99. Count Backwards With a For Loop.

// Setup
const myArray = [];

// Only change code below this line

for (let i = 9; i >= 1; i -= 2) {
    myArray.push(i);
}

console.log(myArray);

// opg. 100. Iterate Through an Array with a For Loop.

// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

console.log(total);

// opg. 101. Nesting For Loops.

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    // Only change code above this line
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// opg. 102. Iterate with JavaScript Do...While Loops.

// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
    myArray.push(i);
    i++;
} while (i < 5);

console.log(i, myArray);

// opg. 103. Replace Loops using Recursion.

function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
    // Only change code above this line
}


// opg. 104. Profile Lookup.

// Setup

const contacts = [
    {
        firstName: 'Akira',
        lastName: 'Laine',
        number: '0543236543',
        likes: ['Pizza', 'Coding', 'Brownie Points']
    },
    {
        firstName: 'Harry',
        lastName: 'Potter',
        number: '0994372684',
        likes: ['Hogwarts', 'Magic', 'Hagrid']
    },
    {
        firstName: 'Sherlock',
        lastName: 'Holmes',
        number: '0487345643',
        likes: ['Intriguing Cases', 'Violin']
    },
    {
        firstName: 'Kristian',
        lastName: 'Vos',
        number: 'unknown',
        likes: ['JavaScript', 'Gaming', 'Foxes']
    }
];

function lookUpProfile(name, prop) {
    // Only change code below this line
    for (let i = 0; i < contacts.length; i++) {
        if (name === contacts[i].firstName) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {
                return 'No such property';
            }
        }
    }
    return 'No such contact';
    // Only change code above this line
}

lookUpProfile('Akira', 'likes');

// opg. 105. Generate Random Fractions with JavaScript.

function randomFraction() {

    // Only change code below this line

    return Math.random();

    // Only change code above this line
}

// opg. 106. Generate Random Whole Numbers with JavaScript.

function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

// opg. 107. Generate Random Whole Numbers within a Range.

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

// opg. 108. Use the parseInt Function.

function convertToInteger(str) {
    return parseInt(str);
}

convertToInteger('56');

// opg. 109. Use the parseInt Function with a Radix.

function convertToInteger(str) {
    return parseInt(str, 2);
}

convertToInteger('10011');

// opg. 110. Use the Conditional (Ternary) Operator.

function checkEqual(a, b) {
    return a === b ? 'Equal' : 'Not Equal';
}

checkEqual(1, 2);

// opg. 111. Use Multiple Conditional (Ternary) Operators.

function checkSign(num) {
    return num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero';
}

checkSign(10);

// opg. 112. Use Recursion to Create a Countdown.

// Only change code below this line
function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const arr = countdown(n - 1);
        arr.unshift(n);
        return arr;
    }
}
// Only change code above this line

// opg. 113. Use Recursion to Create a Range of Numbers.

function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
        return [startNum];
    } else {
        const arr = rangeOfNumbers(startNum, endNum - 1);
        arr.push(endNum);
        return arr;
    }
}

// Færdig med alle opgaver i Basic JavaScript.