// console.log("Hello JavaScript")

// console.log("My name is latikesh", "My age is 24" , "my city is mumbai")

// console.warn("warning")

// console.error("error")

// console.table([1,2,3,4,5])

// var studentName = latikesh

// var age = 25;
// console.log(age)

// var a = 2;
// var b = 1;
// console.log(b,a)

// const PI = 3.14;
// console.log(PI)

// var a;
// console.log(a)

// var score = 1
// score += 9;
// console.log(score)

// var firstName;
// var lastName;
// var fullName;

// var a = "latikesh";
// var b = 99;
// var c = true;
// var d = null;
// var e;
// console.log(typeof(e))

// var number = 8104729385
// console.log(typeof(number))

// var bigInt = 1000000000000n;
// console.log(typeof(bigInt))

// var turu = Number("50")
// console.log(typeof(turu))

// var turu = String(100)
// console.log(typeof(turu))

// var turu = Boolean("true")
// console.log(typeof(turu))

// var a = "5" + 2;
// console.log(a)

// var a = "5" - 2;
// console.log(a)

// var a = true + 1;
// console.log(a)

// var a = Number("123abc")
// console.log(a)

// var a = 2;
// var b = 2;
// var total = a + b;
// console.log(total)

// var a = 25;
// var b = 4;
// var total = a % b;
// console.log(total)

// var a = 4;
// var square = a**2;
// console.log(square)

// var a = 1;
// a++;
// console.log(a)

// var a = 1;
// a--;
// console.log(a)

// var score = 1
// score += 19;
// console.log(score)

// var a = 2;
// var b = 4;
// console.log(a > b)
// var a = 2;
// var b = 4;
// console.log(a < b)
// var a = 2;
// var b = 4;
// console.log(a >= b)
// var a = 2;
// var b = 4;
// console.log(a >= b)

// var a = 2;
// var b = 2;
// console.log(a === b)

// var a = "10";
// var b = 10;
// console.log(a == b)
// var a = "10";
// var b = 10;
// console.log(a === b)

// var a = true;
// var b = false;
// console.log(a || b)
// var a = true;
// var b = false;
// console.log(a && b)
// var a = true;
// var b = false;
// console.log(a != b)

//Strings
// var a = "Hello World,   Javascript, apple";
// console.log(a.length)

// console.log(a.toUpperCase());

// console.log(a.toLowerCase());

// console.log(a.includes("Javascript"));

// console.log(a.slice(6,11));

// console.log(a.replace("apple","mango"));

// console.log(a.split(", "));

// console.log(a.trim());

// console.log("hi".repeat(5));

// console.log(a[0]);

// console.log(`my all information is :- ${a}`);

//Numbers & Math
// var a = 4.7;
// console.log(Math.round(a));

// console.log(Math.sqrt(81));

// console.log(Math.max(10, 20, 5, 99));

    
//Round 4.7 using Math.round().
// let int = 4.7
// console.log(Math.round(int));

// Find the square root of 81.
// let root = 81;
// console.log(Math.sqrt(root));

// Find the maximum number from 10, 20, 5, 99.
// console.log(Math.max(10, 20, 5, 99));

// Generate a random number between 1 and 10.
// console.log(Math.random() * 10) + 1;

// Convert "99.99" into an integer.
// let num = parseInt("99.99");
// console.log(num);

// Check whether 25 is an integer or not.
// console.log(Number.isInteger(25));

// Use toFixed(2) on 3.141592.
// let num = 3.141592;
// console.log(num.toFixed(1));

// Check whether a number is positive or negative.
// let num = Number(prompt("enter the number"))

// if (num >= 0) {
//     console.log(num, "is a positive")
// }else{
//     console.log(num, "is negative");

// }

// Check whether a number is even or odd.
// let num = Number(prompt("enter the number"))
// if (num % 2 == 0) {
//     console.log(num, "is even")
// }else{
//     console.log(num, "is odd");
// }


// Check whether a person is eligible to vote.
// let age = Number(prompt("enter the number"))
// if (age >= 18) {
//     console.log(`your age is ${age} you can vote`);
// }else{
//     console.log(`your age is ${age} you cannot vote`);
// }

// Find the largest among two numbers.
// let num1 = Number(prompt("enter the number"))
// let num2 = Number(prompt("enter the number"))
// if (num1 > num2) {
//     console.log(num1, "num1 is greater")
// }else{
//     console.log(num2, "num2 is greater");  
// }

// Find the largest among three numbers.
// let num1 = Number(prompt("enter the number"))
// let num2 = Number(prompt("enter the number"))
// let num3 = Number(prompt("enter the number"))

// if (num1 > num2 && num1 > num3) {
//     console.log("num1, id greater")
// }if ((num2 > num1 && num2 > num3)) {
//     console.log(num2,"is greater");
// }else{
//     console.log(num3, "is greater");
// }

// Check whether a number is divisible by both 3 and 5.
// let num1 = Number(prompt("enter the number"))
// if (num1 % 3 == 0 && num1 % 5 == 0) {
//     console.log(num1, "is divisible by both 3 and 5")
// }else{
//     console.log("is nott divisile by 3 and 5");
    
// }

// 8. Create a simple grading system:
// - 90+ → A
// - 75+ → B
// - 50+ → C
// - below 50 → Fail

// let mark = Number(prompt("enter the marks"))
// if (mark >= 90) {
//     console.log(mark,"A");
// }else if (mark >=  75){
//     console.log(mark,"B");
// }else if (mark >=  50){
//     console.log(mark,"C");
// }else{
//     console.log("fail");
    
// }

// Check whether a username is "admin" and password is "1234".
// let userName = prompt("enter username");
// let password = prompt("enter password")
// if (userName == "admin" && password == 1234) {
//     console.log("login successful");
// }else{
//     console.log("invalid credentials");   
// }

// Print the day name based on a number (1–7).
// let input = Number(prompt("enter no 1-7"))
// if (input == 1) {
//     console.log("Monday");
// } else if (input == 2){
//     console.log("tuesday");
// }else if (input == 3){
//     console.log("wednesday");
// }else if (input == 4){
//     console.log("thursday");
// }else if (input == 5){
//     console.log("friday");
// }else if (input == 6){
//     console.log("saturday");
// }else if (input == 7){
//     console.log("sunday");
// }

// Check whether an empty string is truthy or falsy.
// if ("") {
//     console.log("truthy");
// }else{
//     console.log("falsy");
    
// }

// Check whether 0 is truthy or falsy.
//  if (0) {
//     console.log("truthy");
// }else{
//      console.log("falsy");
    
// }

// Check whether [] is truthy or falsy.
//  if ([]) {
//     console.log("truthy");
//  }else{
//      console.log("falsy");
    
// }

// Check whether a number is even or odd using ternary operator.
// let num = prompt("enter any number")
// if (num % 2 == 0) {
//     console.log(num, "number is even");
    
// } else if (num % 2 != 0) {
//     console.log(num, "number is odd");
// }else{
//     console.log("enter valid number");
// }


// Check whether age is above 18 using ternary operator.

// let age = prompt("enter you age")
// if (age >= 18) {
//     console.log("18+")
// }else{
//     console.log("teenager")
// }

// Find the greater number between two values using ternary operator.
// let num1 = Number(prompt("enter num1"))
// let num2 = Number(prompt("enter num2"))

// num1 > num2 ? console.log(num1 + " is greater than " + num2) : console.log(num2 + " is greater than " + num1);

// Create a mini biodata program using variables and template literals.
// let name = "Latikesh";
// let college = "ABC College";
// let course = "BCA";
// let age = 24;

// console.log(`
// My Name is ${name}
// My College is ${college}
// My Course is ${course}
// My Age is ${age}
// `); 

// Calculate the area of a rectangle.
// let base = 23;
// let height = 23;
// let area = base*height/2;
// console.log(area);

// Calculate the simple interest.
// let principal = 1000;
// let intrest = 5;
// let time = 3;
// let simpleIntrest = principal*intrest*time/100
// console.log(simpleIntrest);

// Convert temperature from Celsius to Fahrenheit.
// let celcius = 25
// let fahrenheit = (celcius * 1.8) + 32;
// console.log(fahrenheit);


// Convert kilometers into meters.
// let kilometers = 5;
// let meter = kilometers * 1000;
// console.log(meter);

// Calculate total marks and percentage of 5 subjects.

// let subject1 = 60;
// let subject2 = 65;
// let subject3 = 70;
// let subject4 = 75;
// let subject5 = 80;
// let total = subject1 + subject2 + subject3 + subject4 + subject5;

// console.log(total);
// console.log((total/500)*100);

// Calculate electricity bill based on units consumed.
// let energyCharges = 250;
// let unitCharges = 6;
// let tax = 75;
// let totalBill = energyCharges*unitCharges*tax;
// console.log(totalBill);

// Create a username generator using first name and birth year.
// let userName = "latikesh";
// let year = 2002;
// let user = `${userName}${year}`
// console.log(user);

// Check whether a string starts with a specific letter.
// let user = "latikesh"
// if (user.startsWith('l')) {
//     console.log(0);
// }else{
//     console.log(1);
// }

// Count the total characters in a sentence excluding spaces.
// let user = "my name is latikesh";
// let count = 0;
// for(let i = 0; i < user.length; i++){
//     if (user[i] !== " ") {
//         count ++;
//     }
// }
// console.log(count);

// Take two numbers and print which one is greater.
// let input1 = Number(prompt("num 1"))
// let input2 = Number(prompt("num 2"))

// if (input1 > input2) {
//     console.log("input1 is greater");
// }else{
//     console.log("input2 is greater");
// }

// Check whether a number lies between 10 and 50.
// let num = Number(prompt("enter no between 10 to 50"))

// if (num >= 10 && num <= 50) {
//     console.log("yes its between 10 to 50");
// }else{
//     console.log("its not between 10 to 50"); 
// }

// Check whether a password length is greater than 8.
// let password = prompt("enter your password")
// if (password.length >= 8) {
//     console.log("its valid");
// }else{
//     console.log("password should be grater than 8 characters");
// }

// Check if a person can drive:
// - age > 18
// - has license = true
// let age = Number(prompt("enter youe age"))
// if (age >= 18) {
//     console.log("you can drive");
// }else{
//     console.log("you cannot drive"); 
// }

// Check whether a number is divisible by 2, 3, or both.
// let num = Number(prompt("enter your num"));
// if (num % 2 == 0 && num % 3 == 0) {
//     console.log("divisible by both 2 & 3");
// }else{
//     console.log("not divisible");
// }

// Print "Good Morning", "Good Afternoon", or "Good Evening" based on time.
// let num = Number(prompt("enter num"))
// if (num >= 5 && num <= 12) {
//     console.log("good morning");
// }else if (num >= 12 && num <= 17){
//    console.log("good afternoon");
// }else if (num >= 18 && num <= 24){
//     console.log("good evening");
// }else{
//     console.log("enter correct timimg");
// }

// Find whether a number is a multiple of 10.
// let num = Number(prompt("enter num"))
// if (num % 10 == 0) {
//     console.log("yes it is divisible bye 10");
// }else{
//     console.log("not divisible");
// }

// Create a simple discount calculator.
// let price = Number(prompt("enter num"))
// let discount = 20/100;
// let lastPrice = price * discount
// console.log(lastPrice,"off");
// console.log(price - lastPrice);

// Check whether a product is in stock.
// let inStock = true;
// if(inStock){
//     console.log("yes in stock");
// }else{
//     console.log("not in stock");
// }

// Calculate final bill after GST.
// let price = Number(prompt("enter you bill"))
// let gst = 18;

// let gstAmount = (price * 18) / 100;
// let finalBill = price + gstAmount;

// console.log(finalBill);
