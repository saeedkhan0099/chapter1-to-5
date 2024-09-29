//Q1
alert("Hello! Welcome to our website.");

//Q2

var display= "Hello! This message is displayed in the JavaScript console.";
 console.log(display);

 //Q3

 var dis=prompt("This message is displayed in the browser console")
        console.log(dis);

//Q4

 var name = prompt("What is your name?");
 var age = prompt("How old are you?");
 var city = prompt("Where are you from?");

 console.log(('message').textContent);

 alert("Name: " + name);
 alert("Age: " + age);
 alert("City: " + city);
 //Q5
 console.log("This is the message generated through the browser's developer console.");

 //Q6
  // JavaScript to trigger an alert
  document.getElementById('alertButton').addEventListener('click', function() {
    alert("Hello! This is an alert message.");
});


//Q7
alert("This alert is from the head section.");
alert("This alert is before the HTML content.");
alert("This alert is inside the HTML content.");
alert("This alert is after the HTML content.");

// variable for string
//Q1

var username;
let usernames;
const usernam = "defaultUsername"; 

//Q2
var fullName = "Your Full Name Here"; 
var fullName = "saeed khan"; 
console.log(fullName);

//Q3
var message;
message = "Hello World";
alert(message);

//Q4
var studentName = "saeed khan";
var studentAge = 81;
var studentMajor = "Computer Science";
var studentUniversity = "jinah University";

alert("Student Name: " + studentName);
alert("Student Age: " + studentAge);
alert("Student Major: " + studentMajor);
alert("Student University: " + studentUniversity);

//Q5

var alertMessage = "This is the alert message you want to display.";

        alert(alertMessage);

//Q6

var email = "example@example.com"; 
var alertMessage = "Your email address is: " + email;

 alert(alertMessage);
 
//Q7

var book = "A smarter way to learn JavaScript";

var Message = "The book title is: " + book;
alert(Message);

//Q9

var message = "Welcome to JavaScript programming!";
 alert(message);

 console.log(message);

 //VARIABLE NAMES: LEGAL & ILLEGAL

 //Q1 
var variable1 = "Value 1";
var variable2 = "Value 2";
var  variable3 = "Value 3";

        alert(variable1);
        alert(variable2);
        alert(variable3);

//Q2

var myVariable = "Legal";      // 1. Legal
var _userName = "Legal";       // 2. Legal
var $totalAmount = 100;        // 3. Legal
var count123 = 42;             // 4. Legal
var firstName = "John"; 

//Q3

 document.write("<h1>Rules for Naming JS Variables</h1>");
 document.write("<p>Variable names can only contain <strong>letters</strong>, <strong>numbers</strong>, <strong>underscores</strong>, and <strong>dollar signs</strong>. For example <code>$my_1stVariable</code>.</p>");
 document.write("<p>Variables must begin with a <strong>letter</strong>, <strong>underscore</strong>, or <strong>dollar sign</strong>. For example <code>$name</code>, <code>_name</code>, or <code>name</code>.</p>");
 document.write("<p>Variable names are case <strong>sensitive</strong>.</p>");
 document.write("<p>Variable names should not be <strong>JavaScript reserved keywords</strong>.</p>");

 //MATH EXPRESSIONS
 //Q1
var number1 = parseFloat(prompt("Enter the first number:"));
var number2 = parseFloat(prompt("Enter the second number:"));

 var sum = number1 + number2;
 console.log("<p>The sum of " + number1 + " and " + number2 + " is: " + sum + "</p>");

 //Q2

 var number1 = parseFloat(prompt("Enter the first number:"));
 var number2 = parseFloat(prompt("Enter the second number:"));

 var sum = number1 + number2;
 var difference = number1 - number2;
 var product = number1 * number2;
 var quotient = number1 / number2;
 var modulus = number1 % number2;

 document.write("The sum of " + number1 + " and " + number2 + " is: " + sum );
 document.write("The difference of " + number1 + " and " + number2 + " is: " + difference );
 document.write("The product of " + number1 + " and " + number2 + " is: " + product );
 document.write("The quotient of " + number1 + " and " + number2 + " is: " + quotient);
 document.write("The modulus of " + number1 + " and " + number2 + " is: " + modulus );

 //Q5
 var number = parseInt(prompt("Enter a number to display its multiplication table:"));

 if (!isNaN(number)) {
     document.write("Multiplication Table for " + number + ":Multiplication Table for");
     for (var i = 1; i <= 10; i++) {
         var result = number * i;
         console.log("Please enter a valid number." + number + " x " + i + " = " + result+"Please enter a valid number." );
     }
 } else {
     console.log("Please enter a valid number.");
 }

 //Q6

  var celsius = parseFloat(prompt("Enter the temperature in Celsius:"));

  var fahrenheit = (celsius * 9/5) + 32;

  console.log("°C" + celsius + "°C is " + fahrenheit + "°F");

  fahrenheit = parseFloat(prompt("Enter the temperature in Fahrenheit:"));
  celsius = (fahrenheit - 32) * 5/9;

 console.log("°C" + fahrenheit + "°F is " + celsius + "°C");

 //Q8

 var totalMarks = parseFloat(prompt("Enter the total marks:"));
 var obtainedMarks = parseFloat(prompt("Enter the marks obtained by the student:"));

 var percentage = (obtainedMarks / totalMarks) * 100;

 console.log("The total marks are: " + totalMarks + "");
 console.log("The marks obtained are: " + obtainedMarks + "");
 console.log("The percentage is: " + percentage.toFixed(2) + "%");

 //Q10

 var initialNumber = 10;

 var result = ((initialNumber + 5) * 10) / 2;

 console.log("The initial number is: " + initialNumber + "");
 console.log("The result after the arithmetic operations is: " + result + "");

 //Q11

 const currentYear = new Date().getFullYear(); 

 var birthYear = parseInt(prompt("Enter the birth year:"));

 var age1 = currentYear - birthYear; 
 var age2 = age1 - 1; 
console.log("<p>They are either " + age1 + " or " + age2 + " years old.</p>");

//Q12

let radius = parseFloat(prompt("Enter the radius of the circle:"));

const pi = 3.142;
var circumference = 2 * pi * radius;
console.log("The circumference is " + circumference.toFixed(2) + "");

var area = pi * (radius ** 2);

console.log("The area is " + area.toFixed(2) + "");

//Q13

 var favoriteSnack = prompt("Enter your favorite snack:");

 var currentAge = parseInt(prompt("Enter your current age:"));

 var maxAge = parseInt(prompt("Enter the maximum age you expect to live to:"));

 var amountPerDay = parseInt(prompt("Enter the estimated amount of " + favoriteSnack + " you eat per day:"));
 var yearsLeft = maxAge - currentAge;
 var totalAmount = yearsLeft * 365 * amountPerDay;
 console.log("You will need " + totalAmount + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");