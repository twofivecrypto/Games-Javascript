// quizData.js

const quizData = [
    {
        question: "What does 'JS' stand for?",
        options: ["Java String", "JavaScript", "Just Script", "Java Style"],
        correctAnswer: "JavaScript"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "string", "declare"],
        correctAnswer: "var"
    },
    {
        question: "What is the result of 5 + '5' in JavaScript?",
        options: ["10", "55", "Error", "undefined"],
        correctAnswer: "55"
    },
    {
        question: "Which data type is used to represent true/false values in JavaScript?",
        options: ["String", "Number", "Boolean", "Array"],
        correctAnswer: "Boolean"
    },
    {
        question: "What is the purpose of the 'if' statement in JavaScript?",
        options: ["To define a function", "To create a loop", "To make decisions in code", "To declare variables"],
        correctAnswer: "To make decisions in code"
    },
    {
        question: "How do you comment a single line of code in JavaScript?",
        options: ["// This is a comment", "/* This is a comment */", "' This is a comment", "# This is a comment"],
        correctAnswer: "// This is a comment"
    },
    {
        question: "What is the result of 2 + 2 in JavaScript?",
        options: ["4", "22", "Error", "undefined"],
        correctAnswer: "4"
    },
    {
        question: "Which operator is used to concatenate two strings in JavaScript?",
        options: ["+", "&", "*", "~"],
        correctAnswer: "+"
    },
    {
        question: "What is the primary purpose of the 'for' loop in JavaScript?",
        options: ["To define a function", "To create a conditional statement", "To iterate over a sequence of values", "To declare variables"],
        correctAnswer: "To iterate over a sequence of values"
    },
    {
        question: "Which built-in method is used to convert a string to lowercase in JavaScript?",
        options: ["toLowerCase()", "toLower()", "stringLower()", "lowerCase()"],
        correctAnswer: "toLowerCase()"
    },
    {
        question: "What is the JavaScript function used for displaying text in the browser?",
        options: ["alert()", "print()", "display()", "show()"],
        correctAnswer: "alert()"
    },
    {
        question: "What symbol is used to indicate the end of a statement in JavaScript?",
        options: [";", ":", ".", ",",],
        correctAnswer: ";"
    },
    {
        question: "What is the result of 3 * '3' in JavaScript?",
        options: ["9", "33", "Error", "undefined"],
        correctAnswer: "9"
    },
    {
        question: "Which built-in method is used to find the index of a specified item in an array?",
        options: ["findIndex()", "search()", "indexOf()", "getPosition()"],
        correctAnswer: "indexOf()"
    },
    {
        question: "What is the purpose of the 'else' statement in JavaScript?",
        options: ["To define a function", "To create a loop", "To handle the 'if' statement's false condition", "To declare variables"],
        correctAnswer: "To handle the 'if' statement's false condition"
    },
    {
        question: "Which operator is used for strict equality comparison in JavaScript?",
        options: ["==", "===", "!=", "!=="],
        correctAnswer: "==="
    },
    {
        question: "What keyword is used to declare a constant variable in JavaScript?",
        options: ["var", "let", "const", "constant"],
        correctAnswer: "const"
    },
    {
        question: "Which function is used to parse a JSON string in JavaScript?",
        options: ["parseJSON()", "JSON.parse()", "stringifyJSON()", "decodeJSON()"],
        correctAnswer: "JSON.parse()"
    },
    {
        question: "What is the result of '5' - 3 in JavaScript?",
        options: ["2", "52", "Error", "undefined"],
        correctAnswer: "2"
    },
    {
        question: "Which built-in method is used to sort the elements of an array in JavaScript?",
        options: ["sortArray()", "order()", "sort()", "arrange()"],
        correctAnswer: "sort()"
    },
    {
        question: "What is a closure in JavaScript?",
        options: [
            "A function declared within another function, with access to its parent function's variables",
            "A loop that runs infinitely",
            "An error in JavaScript code",
            "A way to declare global variables"
        ],
        correctAnswer: "A function declared within another function, with access to its parent function's variables"
    },
    {
        question: "What does the 'this' keyword refer to in JavaScript?",
        options: [
            "The current function's name",
            "The global object",
            "The parent object",
            "The function's arguments"
        ],
        correctAnswer: "The global object"
    },
    {
        question: "Which JavaScript data type represents a collection of key-value pairs?",
        options: ["Array", "String", "Object", "Boolean"],
        correctAnswer: "Object"
    },
    {
        question: "What does the 'bind' method do in JavaScript?",
        options: [
            "It binds a function to a DOM element",
            "It creates a new array with the results of calling a provided function on every element in the array",
            "It creates a copy of an object",
            "It binds a function to a specific context, allowing you to call it with that context later"
        ],
        correctAnswer: "It binds a function to a specific context, allowing you to call it with that context later"
    },
    {
        question: "What is the result of '5' + 3 in JavaScript?",
        options: ["53", "8", "Error", "undefined"],
        correctAnswer: "53"
    },
    {
        question: "What is a callback function in JavaScript?",
        options: [
            "A function that executes immediately when declared",
            "A function that is called at the end of a program",
            "A function passed as an argument to another function and executed later",
            "A function that only accepts one argument"
        ],
        correctAnswer: "A function passed as an argument to another function and executed later"
    },
    {
        question: "What is the difference between 'null' and 'undefined' in JavaScript?",
        options: [
            "They are the same",
            "'Null' represents an intentional absence of any object value, while 'undefined' represents a variable that has been declared but has not been assigned a value",
            "'Undefined' represents an intentional absence of any object value, while 'null' represents a variable that has been declared but has not been assigned a value",
            "'Null' is used for numbers, and 'undefined' is used for strings"
        ],
        correctAnswer: "'Null' represents an intentional absence of any object value, while 'undefined' represents a variable that has been declared but has not been assigned a value"
    },
    {
        question: "What is an IIFE in JavaScript?",
        options: [
            "A way to define global variables",
            "An Immediately Invoked Function Expression, used to create a private scope for variables",
            "A type of loop",
            "A method for asynchronous programming"
        ],
        correctAnswer: "An Immediately Invoked Function Expression, used to create a private scope for variables"
    },
    {
        question: "What is 'hoisting' in JavaScript?",
        options: [
            "A feature that allows functions to be called before they are declared",
            "A way to lift heavy objects",
            "An error in JavaScript code",
            "A feature that allows variables to be declared after they are used"
        ],
        correctAnswer: "A feature that allows functions to be called before they are declared"
    },
    {
        question: "What is a 'closure' in JavaScript?",
        options: [
            "A function that is executed immediately",
            "A way to lock a variable's value",
            "A function with access to its parent function's variables, even after the parent function has finished executing",
            "A type of loop"
        ],
        correctAnswer: "A function with access to its parent function's variables, even after the parent function has finished executing"
    },
    {
        question: "What does 'NaN' stand for in JavaScript?",
        options: [
            "Not a Name",
            "New and Nice",
            "Not a Number",
            "No Action Needed"
        ],
        correctAnswer: "Not a Number"
    },
    {
        question: "What is 'event delegation' in JavaScript?",
        options: [
            "Delegating events to a higher authority",
            "Creating new events",
            "Handling events within a callback function",
            "Attaching multiple events to an element"
        ],
        correctAnswer: "Delegating events to a higher authority"
    },
    {
        question: "What is the purpose of the 'map' function in JavaScript?",
        options: [
            "To create a map of objects",
            "To generate a new array by applying a function to each item in an existing array",
            "To filter an array",
            "To sort an array"
        ],
        correctAnswer: "To generate a new array by applying a function to each item in an existing array"
    },
    {
        question: "What is the difference between '==' and '===' in JavaScript?",
        options: [
            "They are the same",
            "'==' performs type coercion, while '===' performs strict equality comparison",
            "'===' performs type coercion, while '==' performs strict equality comparison",
            "There is no difference"
        ],
        correctAnswer: "'===' performs strict equality comparison, while '==' performs type coercion"
    }
];



export default quizData;