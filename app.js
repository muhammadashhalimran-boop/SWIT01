// Chapter 2

var firstName = "Anwer";
var lastName = "Sadat";
var city = "Karachi";
var country = "Pakistan";
var message = "Welcome to JavaScript";

document.write(firstName + "<br>");
document.write(lastName + "<br>");
document.write(city + "<br>");
document.write(country + "<br>");
document.write(message + "<br><br>");


// Chapter 3

var age = 25;
var marks = 85;
var salary = 50000;
var price = 1500;
var quantity = 4;

document.write(age + "<br>");
document.write(marks + "<br>");
document.write(salary + "<br>");
document.write(price + "<br>");
document.write(quantity + "<br><br>");


// Chapter 4

var studentName = "Ali";
var rollNo = 101;
var totalMarks = 500;
var obtainedMarks = 430;
var result = "Pass";

document.write(studentName + "<br>");
document.write(rollNo + "<br>");
document.write(totalMarks + "<br>");
document.write(obtainedMarks + "<br>");
document.write(result + "<br><br>");


// Chapter 5

var a = 20;
var b = 10;

document.write(a + b + "<br>");
document.write(a - b + "<br>");
document.write(a * b + "<br>");
document.write(a / b + "<br>");
document.write(a % b + "<br><br>");


// Chapter 6

var number = 10;

number++;
document.write(number + "<br>");

number--;
document.write(number + "<br>");

var x = 15;
var y = 4;

document.write(x % y + "<br><br>");


// Chapter 7

document.write((2 + 3) * 5 + "<br>");
document.write(2 + 3 * 5 + "<br>");
document.write((10 - 5) + 4 * 2 + "<br>");
document.write((8 + 2) / 2 + "<br><br>");


// Chapter 8

var first = "Muhammad";
var last = "Ali";

document.write(first + " " + last + "<br>");

var cityName = "Karachi";
var countryName = "Pakistan";

document.write(cityName + ", " + countryName + "<br>");

var fullMessage = "Welcome " + first;

document.write(fullMessage + "<br><br>");


// Chapter 9

var userName = prompt("Enter your name");
document.write(userName + "<br>");

var userAge = prompt("Enter your age");
document.write(userAge + "<br>");

var favColor = prompt("Enter your favorite color");
document.write(favColor + "<br><br>");


// Chapter 10

var marks = prompt("Enter your marks");

if (marks >= 50) {
    document.write("Pass<br>");
}

var age = prompt("Enter your age");

if (age >= 18) {
    document.write("Eligible for Vote<br>");
}

var temperature = prompt("Enter temperature");

if (temperature > 30) {
    document.write("Hot Weather<br><br>");
}


// Chapter 11

var num1 = 10;
var num2 = 20;

document.write(num1 == num2 + "<br>");
document.write(num1 != num2 + "<br>");
document.write(num1 < num2 + "<br>");
document.write(num1 > num2 + "<br>");
document.write(num1 <= num2 + "<br>");
document.write(num1 >= num2 + "<br>");