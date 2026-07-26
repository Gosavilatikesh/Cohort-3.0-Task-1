// Create a function named greet that prints "Hello World".
// function greet(){
//     console.log("hello world");
// }
// greet()

// Create a function add(a, b) that returns the sum.
// function add(a,b){
//     console.log(a+b);
// }
// add(5,5)

// Write a function to calculate the square of a number.
// function square(a){
//     console.log(a*a);
// }
// square(5)

// Create a function that checks whether a number is even or odd.
// function check(a){
//     if (a % 2 == 0) {
//         console.log("even");
//     }else{
//         console.log("odd");
//     }
// }

// check(6)

// Write a function that converts Celsius to Fahrenheit.
// function convert(celcius){
//     let fahrenheit = (celcius * 1.8) + 32;
//     console.log(fahrenheit);
// }
// convert(25)

// Create a function with default parameter "Guest".
// function greet(a = "guest"){
//     console.log(a);
// }
// greet()

// Write a function that returns the greater of two numbers.
// function greater(a,b){

//     if (a > b) {
//         console.log("a is greater");
//     }else{
//         console.log("b is greater");
//     }
// }

// greater(15,12)

// Create a function to calculate area of rectangle.
// function area(lenght,width){
//     console.log(lenght*width);
// }
// area(25,25)

// Write a function that returns "Adult" if age ≥ 18 else "Minor".
// function ageMachine(age){
//     if (age >= 18) {
//         console.log("adult");
//     }else{
//         console.log("minor");
//     }
// }
// ageMachine(24)

// Create a function to reverse a string.
// function stringReverse(string){
//     let result = "";

//     for(let i = string.length - 1; i >= 0; i--){
//         result += string[i]
//     }
//     return result;
// }
// console.log(stringReverse("hello"));

// Write a function expression for multiplication.
// let multiply = function(a,b){
//     console.log(a*b);
// }
// multiply(2,2)

// Convert a normal function into an arrow function.
// let expression = (a,b) => {
//     console.log(a+b);
// }
// expression(1,1)

// Create a function that accepts unlimited numbers and returns their sum using rest operator.
// function adding(...num){
//     let total = 0;
//     for(let i = 0; i <= num.length-1; i++){
//         total += num[i]
//     }
//     return total;
// }
// console.log(adding(1,2,3,4));

// Write a function that counts vowels in a string.
// function vowels(string) {
//   let vowel = "aeiou";
//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (vowel.includes(string[i])) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(vowels("my name is latikesh"));

// Create a function that checks if a string is palindrome.
// function check(string){
//     let reverse = "";
//     for(let i = string.length-1; i >= 0; i--){
//         reverse += string[i]
//     }
//     if (string === reverse) {
//         return "palindrome"
//     }else{
//         return "not a palindrome"
//     }
//     return reverse;
// }
// console.log(check("madam"));

// Write a callback function example using setTimeout.
// setTimeout(function(){
//     console.log("hello");
// },1000);

// Create a higher-order function that executes another function twice.
// function runTwice(fn){
//     fn();
//     fn();
// }
// function greet(){
//     console.log("hello");
// }

// runTwice(greet)

// Write a function that returns another function.
// function first(){
//     return function second(){
//         console.log("hello");
//     }
//     return second
// }
// let fn = first()
// fn()

// Create a pure function for subtraction.
// function add(a, b) {
//     return a - b;
// }

// Create an impure function using global variable modification.
// let add = 0;
// function increase(){
//     add += 1;
//     console.log(add);
// }
// increase()
// increase()
// increase()
// increase()

// Write a recursive function for factorial.
// function factorial(n){
//     if(n === 1){
//         return 1;
//     }
//     return n * factorial(n - 1);
// }
// console.log(factorial(5));

// Write recursive Fibonacci function.
// function fibonacci(n){
//     if(n === 0){
//         return 0;
//     }

//     if (n === 1) {
//         return 1;
//     }

//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(8));

// Create a function that finds power using recursion.

// Create an IIFE that prints "Executed".
// (function(){
//     console.log('Executed');
// })();

// Write a function that memoizes factorial calculation.


// Create a closure counter function.


// Arrays Basics
// Create an array of 5 fruits.
// let arr = ["latikesh", "Gosavi", "Chaembur"]

// Print first and last element of array.
// let arr = [1,2,3,4,5]
// console.log(arr[0]);
// console.log(arr.length);

// Find length of array.
// let arr = [1,2,3,4]
// console.log(arr.length);

// Add element at end using push.
// let arr = [1,2,3]
// arr.push(4);
// console.log(arr);

// Remove last element using pop.
// let arr = [1,2,3,4]
// arr.pop();
// console.log(arr);

// Add element at beginning using unshift.
// let arr = [1,2,3,4]
// arr.unshift(0);
// console.log(arr);

// Remove first element using shift.
// let arr = [1,2,3,4]
// arr.shift();
// console.log(arr);

// Reverse an array.
// let arr = [1,2,3,4]
// arr.reverse()
// console.log(arr);

// Sort numbers ascending.
// let arr = [20,3,5,60,45,1]
// arr.sort(function (a,b){
//     return a - b;
// });

// console.log(arr);

// Sort numbers descending.
// let arr = [23,25,64,12,8,4,6,35,]
// arr.sort((a , b) => b - a);
// console.log(arr);

// Use splice to remove elements.
// let arr = [1,2,5,6,3,8]
// arr.splice(4                                                                            )
// console.log(arr);

// Use splice to insert elements.
// let arr = [1,2,3,6,7]
// arr.splice(3,0,4,5)
// console.log(arr);

// Use slice to copy array.
// let arr = [1,2,3,4]
// let copy = arr.slice()
// console.log(copy);

// Find index of an element.
// let arr = [1,2,3,4,5]
// console.log(arr.indexOf(4));

// Check if array contains a value.
// let arr = [1,2,3,4,5,6]

// let find = Number(prompt("enter no"))
//  if(arr.includes(find)){
//     console.log("found");
//  }else{
//     console.log("not found");
//  }

// Join array elements with .
// let arr = ["my", "name", "is", "latikesh"]
// console.log(arr.join(" "));

// Merge two arrays using spread operator.
// let arr1 = [1,2]
// let arr2 = [3,4]
// let arr3 = [...arr1, ...arr2]
// console.log(arr3);

// Copy array using spread operator.
// let arr = [1,2,3,4]
// let copy = [...arr]
// console.log(copy);

// Find maximum value using Math.max.
// let arr = [1,2,3,4,5,10,45]
// let maxi = Math.max(...arr)
// console.log(maxi);

// Swap two variables using destructuring.
// let a = 1; b = 2;
// [a,b] = [b,a]
// console.log(a,b);

// Use forEach to print all numbers doubled.
// let num = [1,2,3,4,5,6]
// num.forEach(function(n){
//     console.log(n*2);
// })

// Use map to square all numbers.
// let num = [1,2,3,4,5]
// let double = num.map(n => n*2);
// console.log(double);


// Use filter to get even numbers.
// let num = [1,2,3,4,5,6,7,8,9]
// let add = num.filter(n => n % 2 !==0);
// console.log(add);

// Use reduce to calculate sum.
// let num = [1,2,3,4]
// let sum = num.reduce((acc , n) => acc + n, 0);
// console.log(sum);

// Use reduce to find maximum number.
// let num = [1,20,3,4,25,56,17,82,9]
// let max = num.reduce(function (acc, curr) {
//     if (curr > acc) {
//         return curr;
//     }else{
//         return acc;
//     }
// });

// console.log(max);

// Use find to get first even number.
// let arr = [1,2,3,4,5,6,7,8,9]
// let even = arr.find(function(num){
//     return num % 2 === 0;
// })
// console.log(even);

// Find the first number greater than 50
// let arr = [10,20,30,40,50,60,70]
// let greater = arr.find(u => u > 50)
// console.log(greater);

// Use findIndex to locate number > 50.
// let arr = [10,20,30,40,50,60,70,80,90]
// let inx = arr.findIndex(num => num > 50)
// console.log(inx);

// Use some to check if any number is negative.
// let num = [1,2,3,4,5]
// let result = num.some(function(n){
//     return n < 0;
// });
// console.log(result);

// Use every to check if all numbers are positive.
// let num = [1,2,3,4,5]
// let result = num.every(function(n){
//     return n > 0;
// });
// console.log(result);


// Create array of names and convert all to uppercase.
// let names = ['latikesh', 'yash', 'shravan']
// let change = names.map(name => name.toUpperCase());
// console.log(change);

// Filter all students with marks > 80.
// let students = [{
//     name:"latikesh",
//     marks:80
// },
// {
//     name:"yash",
//     marks:85
// },
// {
//     name:"sharavan",
//     marks:79
// }]

// let find = students.filter(n => n.marks > 80)
// console.log(find);

// Calculate average using reduce.
// let num1 = [1,2,3,4,5,6,7]
// let sum = num1.reduce((acc , n) => acc + n, 0) / num1.length
// console.log(sum);

//question pending of arrays


//objects
// Create object for a student.
// let obj = {
//     name : "latikesh",
//     std : "10th",
//     rollNo : 25
// }
// console.log(obj);

// Access properties using dot notation.
// let obj = {
//     name : "latikesh",
//     std : "10th",
//     rollNo : 25
// }
// console.log(obj.name);

// Access properties using bracket notation.
// let obj = {
//     name : "latikesh",
//     std : "10th",
//     rollNo : 25
// }
// console.log(obj["name"]);

// Add new property dynamically.
// let obj = {
//     name : "latikesh",
//     std : "10th",
//     rollNo : 25
// }

// obj.city = "mumbai";
// console.log(obj);

// Update existing property.
