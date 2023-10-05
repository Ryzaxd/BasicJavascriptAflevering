//Freecodecamp.org - JavaScript Algorithms and Data Structures - Basic JavaScript.

// opg. 77. Adding a Default Option in Switch Statements.

function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line

    switch(val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }

    // Only change code above this line
    return answer;
}

switchOfStuff(1);

// opg. 78. Multiple Identical Options in Switch Statements.

function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line

    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }

    // Only change code above this line
    return answer;
}

sequentialSizes(1);

// opg. 79. Replacing If Else Chains with Switch.

function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line

    switch(val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }

    // Only change code above this line
    return answer;
}

chainToSwitch(7);

// opg. 80. Returning Boolean Values from Functions.

function isLess(a, b) {
    // Only change code below this line
    return a < b;
    // Only change code above this line
}

isLess(10, 15);

// opg. 81. Return Early Pattern for Functions.

function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0) {
        return undefined;
    }

    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

// opg. 82. Counting Cards.

let count = 0;

function cc(card) {
    // Only change code below this line
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count += 1;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count -= 1;
            break;
    }

    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }

    // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

// opg. 83. Build JavaScript Objects.

var myDog = {
    // Only change code below this line
    "name": "Buster",
    "legs": 4,
    "tails": 1,
    "friends": ["Bella", "Molly"]

    // Only change code above this line
};

// opg. 84. Accessing Object Properties with Dot Notation.

// Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

// Only change code below this line

const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

// opg. 85. Accessing Object Properties with Bracket Notation.

// Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Only change code below this line

const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line

// opg. 86. Accessing Object Properties with Variables.

// Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line

const playerNumber = 16;       // Change this line
const player = testObj[playerNumber];   // Change this line


// opg. 87. Updating Object Properties.

// Setup
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line

myDog.name = "Happy Coder";

// opg. 88. Add New Properties to a JavaScript Object.

// Setup
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line

myDog.bark = "woof";

// opg. 89. Delete Properties from a JavaScript Object.

// Setup
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

// Only change code below this line

delete myDog.tails;

// opg. 90. Using Objects for Lookups.

// Setup

function phoneticLookup(val) {
    let result = "";

    // Only change code below this line

    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };

    result = lookup[val];

    // Only change code above this line
    return result;
}

phoneticLookup("charlie");

// opg. 91. Testing Objects for Properties.

// Setup
function checkObj(obj, checkProp) {
    // Only change code below this line

    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }

    // Only change code above this line
}

// opg. 92. Manipulating Complex Objects.

const myMusic = [
    {  "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {  "artist": "Beethoven",
        "title": "Symphony No. 5",
        "release_year": 1808,
        "formats": [
            "CD",
            "MP3",
            "LP"
        ],
        "gold": true
    }
];

// opg. 93. Accessing Nested Objects.

// Setup
const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line

// opg. 94. Accessing Nested Arrays.

// Setup
const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

// Only change code below this line

const secondTree = myPlants[1].list[1]; // Change this line