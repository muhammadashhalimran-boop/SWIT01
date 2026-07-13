// ==========================================
// JavaScript Assignment
// Student Name: Your Name
// ==========================================

// ==========================================
// Task 1 – Greeting User
// ==========================================

// Ask user for name and age
let userName = prompt("Enter your name:");
let userAge = prompt("Enter your age:");

// Display welcome message
alert("Welcome, " + userName + "!");

// Print name and age in console
console.log("Name:", userName);
console.log("Age:", userAge);

// ==========================================
// Task 2 – Student Grade
// ==========================================

function checkGrade(marks) {
    if (marks >= 80) {
        console.log(marks + " = A Grade");
    } else {
        if (marks >= 70) {
            console.log(marks + " = B Grade");
        } else {
            if (marks >= 60) {
                console.log(marks + " = C Grade");
            } else {
                if (marks >= 50) {
                    console.log(marks + " = Pass");
                } else {
                    console.log(marks + " = Fail");
                }
            }
        }
    }
}

// Function calls
checkGrade(85);
checkGrade(74);
checkGrade(65);
checkGrade(55);
checkGrade(40);

// ==========================================
// Task 3 – Even Numbers
// ==========================================

console.log("Even Numbers from 1 to 50:");

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// ==========================================
// Task 4 – Reverse Counting
// ==========================================

console.log("Reverse Counting:");

let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}

// ==========================================
// Task 5 – Array Operations
// ==========================================

let students = ["Ali", "Ahmed", "Sara", "Zain"];

// Add "Fatima" to the end
students.push("Fatima");

// Remove first element
students.shift();

// Add "Usman" at the beginning
students.unshift("Usman");

// Remove last element
students.pop();

// Print final array
console.log("Final Array:");
console.log(students);

// ==========================================
// Task 6 – Slice and Splice
// ==========================================

let numbers = [10, 20, 30, 40, 50, 60];

// Create new array using slice()
let slicedArray = numbers.slice(1, 4);

// Remove 30 and 40 using splice()
numbers.splice(2, 2);

// Print arrays
console.log("Sliced Array:");
console.log(slicedArray);

console.log("Original Array after Splice:");
console.log(numbers);

// ==========================================
// Task 7 – Object
// ==========================================

let student = {
    name: "Ali",
    age: 18,
    city: "Karachi",
    course: "JavaScript"
};

// Print name and city
console.log("Student Name:", student.name);
console.log("Student City:", student.city);

// ==========================================
// Task 8 – Array of Objects
// ==========================================

let studentList = [
    { name: "Ali", marks: 80 },
    { name: "Sara", marks: 92 },
    { name: "Ahmed", marks: 65 },
    { name: "Zain", marks: 50 }
];

// Part A - map()

let studentNames = studentList.map(function(student) {
    return student.name;
});

console.log("Student Names:");
console.log(studentNames);

// Part B - forEach()

studentList.forEach(function(student) {
    console.log(student.name + " scored " + student.marks + " marks.");
});

// ==========================================
// Bonus Challenge
// ==========================================

function findTopper(students) {
    let topper = students[0];

    students.forEach(function(student) {
        if (student.marks > topper.marks) {
            topper = student;
        }
    });

    console.log("Topper: " + topper.name);
    console.log("Marks: " + topper.marks);
}

// Function Call
findTopper(studentList);