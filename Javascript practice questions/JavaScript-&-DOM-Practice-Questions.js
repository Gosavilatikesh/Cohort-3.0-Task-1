// Even or Odd Checker
// const check = (num) => {
//     if(num % 2 === 0){
//         return "even";
//     }else{
//         return "odd";
//     }
// }
// check(25);
// console.log(check(4));

// Greeting Generator
// const sentence = function(name, age) {
//     console.log(`Hello ${name}! You are ${age} years old.`);
// }
// sentence("Latikesh Gosavi",24)

// Rectangle Area Calculator
// const area = (height,width) => {
//     let result = height*width
//     return result;
// }

// console.log(area(5,5));

// Private Counter with Closures
// function parent(){
//     let count = 0;
//     return function child (){
//         count++
//         return count;
//     }
// }

// let counter = parent()
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// Find the Largest Number

// function largestNum(arr) {
//     let largest = arr[0]

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > largest){
//             largest = arr[i]
//         }
//     }
//     return largest;
// }

// let number = largestNum([10,30,50,60,80,90])
// console.log(number);

// Product Data Processor

// let product = [
//     {
//     name: "Latikesh",
//     price: 25,
//     category: "house",
// },
// {
//     name: "Yash",
//     price: 5,
//     category: "villa",
// },
// {
//     name: "Sanchita",
//     price: 2,
//     category: "bunglow",
// }
// ]

// let productName = product.map(product => product.name);
// console.log(productName);

// let categoryName = product.filter(product => product.category === "villa");
// console.log(categoryName);

// let total = product.reduce((acc, item) => acc + item.price, 0);
// console.log(total);

// Debounce Utility from Scratch

// function debounce(fn,delay){
//     let timer;
//     return function (){
//         clearTimeout(timer)

//         timer = setTimeout(() => {
//             fn()
//         },delay)
//     }
// }
// function sayHello() {
//     console.log("Hello");
// }

// const debouncedHello = debounce(sayHello, 2000);

// debouncedHello();
// debouncedHello();
// debouncedHello();

// Sequential Task Runner

// function wait1(){
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             console.log("step 1 done");
//             res();
//         },1000)
//     })
// }

// function wait2(){
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             console.log("step 2 done");
//             res();
//         },1000)
//     })
// }

// function wait3(){
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             console.log("step 3 done");
//             res();
//         },1000)
//     })
// }

// async function run() {
//     await wait1();
//     await wait2();
//     await wait3();
// }

// run();

// API Data Cleaner

// async function data() {
//     try {
//         let response = await fetch(
//             "https://jsonplaceholder.typicode.com/todos/1"
//         );

//         let dataLao = await response.json();

//         console.log(dataLao);

//     } catch (error) {
//         console.log("Error:");
//     }
// }

// data();

// Mini Event Emitter

// Build your own small object (you can call it an event emitter) with three methods:
// on(eventName, callback) to register a function that should run when a named event
// happens, emit(eventName, data) to actually trigger that event and run every function
// registered for it, and off(eventName, callback) to remove a function you registered earlier.
// This lets different parts of your code talk to each other through named events instead of
// calling each other directly.
// Concepts: objects, functions as values, publish-subscribe pattern

// Memoization Utility

// function memoize(fn) {
//     let cache = {};

//     return function(num) {

//         if(cache = memoize){

//         }

//         // if exists return it

//         // otherwise calculate

//         // save result

//         // return result
//     }
// }

//Dom
//Color-Cycling Button

// const btn = document.querySelector("button")

// let colour = ["darkred","pink","brown","red"]
// let index= 0;

// btn.addEventListener('click', () => {
//     document.body.style.backgroundColor = colour[index];
//     index ++;

//     if(index === colour.length){
//         index = 0;
//     }
// });

// Live Character Counter

// const input = document.querySelector("input")
// const para = document.querySelector("p")

// input.addEventListener('input', () => {
//     let count = input.value.length;
//     para.textContent = count;
// })

// Read More / Read Less Toggle

// const para = document.querySelector("p");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//     para.classList.toggle("show")

//     if(para.classList.contains("show")){
//         btn.textContent = "Read less"
//     }else{
//         btn.textContent = "Read more"
//     }

// });

// Click Counter App

// const btn = document.querySelector("button")
// const count = document.querySelector("span")
// let index = 0;

// btn.addEventListener('click', () => {
//     index++;
//     count.textContent = index;
// })

// Add Items to a To-Do List && Delete a Single To-Do Item && Mark To-Do Items as Done

// const input = document.querySelector("input")
// const btn = document.querySelector("button")
// const ul = document.querySelector("ul")

// btn.addEventListener('click', () => {
//     const text = input.value;

//     if(text.trim() === "") return

//     const li = document.createElement("li")
//     const deleteBtn = document.createElement("button")
//     deleteBtn.textContent = "delete"
//     li.textContent = text;
//     li.append(deleteBtn)
//     ul.append(li)
//     input.value = "";

//     deleteBtn.addEventListener('click', () => {
//         li.remove()
//     })

//     li.addEventListener('click', () => {
//         li.classList.toggle("completed")
//     })
// })

// Live Celsius to Fahrenheit Converter

// const input = document.querySelector("input")
// const para = document.querySelector("p")

// input.addEventListener('input', () => {

//     if (input.value === ""){
//         para.textContent = "";
//         return
//     }
//     let calc = Number(input.value)
//     let Fahrenheit = (calc * 9) / 5 + 32;
//     para.textContent = Fahrenheit;

// })

// Live Digital Clock

// const clock = document.querySelector("p");

// function updateClock(){
//     const now =  new Date();

//     let hours= now.getHours();
//     let minutes= now.getMinutes();
//     let seconds= now.getSeconds();

//     let ampm = hours >= 12 ? "PM" : "AM";

//     hours = hours % 12;
//     hours = hours ? hours : 12;

//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     const time = `${hours}:${minutes}:${seconds} ${ampm}`;

//     clock.textContent = time;
// }

// updateClock();
// setInterval(updateClock, 1000);

// Light/Dark Mode Switch

// const btn = document.querySelector("button")
// const body = document.querySelector("body")

// btn.addEventListener('click', () => {
//     body.classList.toggle("dark")
// })

// Required Field Inline Errors

// const form = document.querySelector("form")
// const btn = document.querySelector("button")
// const inp1 = document.querySelector("#inp1")
// const inp2 = document.querySelector("#inp2")
// const err1 = document.querySelector("#err1");
// const err2 = document.querySelector("#err2");

// btn.addEventListener('click', (event) => {
//     event.preventDefault()

//     let input1 = inp1.value;
//     let input2 = inp2.value;

//     if (input2 === "") {
//     err2.textContent = "This field is required.";
//   } else {
//     err2.textContent = "";
//   }

// })

// Image Next/Previous Swapper

// const next = document.querySelector("#next");
// const previous = document.querySelector("#previous");
// const img = document.querySelector("img");

// let currentIndex = 0;

// const images = [
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx7gOTtN6y9nyUoUeHmCgrRKYdWMCYEBB74a3-NIzcTg&s=10",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh0Wtd6UelD-fLiG9ABBYKxDqqjZ6RppTNS9oypiFQwA&s=10",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR9YF5JBNJ78176tipIWsIP3GoelVhEtPBdVpSUH3TQg&s=10",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9TYPiPEJoANx3E-8BwLIVjO69ALlrVrhXFfF08mT7Yg&s=10"
// ];

// function showImage() {
//   img.src = images[currentIndex];
// }

// // initial image
// showImage();

// next.addEventListener("click", () => {
//   currentIndex++;

//   if (currentIndex === images.length) {
//     currentIndex = 0;
//   }

//   showImage();
// });

// previous.addEventListener("click", () => {
//   currentIndex--;

//   if (currentIndex < 0) {
//     currentIndex = images.length - 1;
//   }

//   showImage();
// });

// Save and Load a Note
// Build a simple notes box: one large textarea where a user can type some text, and a "Save"
// button next to it. When "Save" is clicked, store the typed text in the browser's localStorage,
// which is a small storage space the browser keeps for your website. Then, write code that
// runs as soon as the page loads, which checks localStorage for any saved note and, if one
// exists, automatically fills the textarea with it - so the note is still there even after the page is
// refreshed or the browser is closed and reopened.

// Concepts: localStorage.setItem, localStorage.getItem

// const btn = document.querySelector("button")
// const text = document.querySelector("textarea")

// window.addEventListener('load', () => {
//     const save = localStorage.getItem("note");
//     if(save){
//         text.value = save;
//     }
// })

// btn.addEventListener('click', () =>{
//     const value = text.value;
//     localStorage.setItem("note",value)
// })

// FAQ Accordion
// Build a small FAQ section with at least four questions, where each question is followed by a
// hidden answer. Clicking a question should reveal its answer and hide the others, so only
// one answer is visible on the page at any time. Clicking that same question again should
// close its answer back up.
// Concepts: classList, closing sibling panels

// const answers = document.querySelectorAll(".answer")
// const questions = document.querySelectorAll(".question")

// answers.forEach((answer) => {
//     answer.style.display = "none";
// });

// questions.forEach((question) => {

//     question.addEventListener('click', () => {
//         const parent = question.parentElement;
//         const hiddenAns = parent.querySelector(".answer");

//         const open = hiddenAns.style.display === "block"

//         answers.forEach((a) => {
//             a.style.display = "none";
//         });

//         if(!open){
//             hiddenAns.style.display = "block"
//         }
//     })
// })

// Tabbed Content Switcher
// Create at least three tab buttons (for example, "Home," "About," and "Contact") and a
// content area below them. Clicking any tab should show only the content that belongs to it,
// hide the content for the other tabs, and visually highlight the clicked tab so the user can tell
// which one is currently active.
// Concepts: classList, dataset attributes, conditional display

// const btn = document.querySelectorAll(".tab")
// const content = document.querySelectorAll(".content")

// content.forEach((contents) => {
//     contents.style.display = "none";
// })

// btn[0].classList.add("active");
// content[0].style.display = ("block");

// btn.forEach((tab) => {
//     tab.addEventListener('click', () => {

//         btn.forEach((t) => t.classList.remove("active"));
//         content.forEach((c) => c.style.display = "none");

//         tab.classList.add("active");

//         const target = tab.dataset.tab;

//         const activeContent = document.querySelector(`.content[data-content="${target}"]`)

//         activeContent.style.display = "block";
//     })

// })

// Star Rating Widget
// Display five star icons or symbols in a row. When the user clicks any star, that star and every
// star before it (to its left) should turn a highlighted colour, while the stars after it stay plain,
// like a normal 1-to-5 star rating. Clicking a different star should update the highlighting to
// match the new rating right away.
// Concepts: event delegation, classList, loops

// const rating = document.querySelector(".rating")
// const stars = document.querySelectorAll(".star");

// rating.addEventListener('click', (event) => {
//     let result = event.target.dataset.value;

//     stars.forEach((star, index) => {
//         if(index < result){
//             star.style.color = "gold"
//         }
//         else{
//             star.style.color = "grey"
//         }
//     });
// })

// Live List Search Filter
// Display a list of at least eight names, with a search input box above it. As the user types into
// the search box, the list on screen should automatically update to show only the names
// containing the typed text, hiding every name that doesn't match. Clearing the search box
// should bring the full list back.
// Concepts: input event, filtering DOM elements

// const items = document.querySelectorAll(".item")
// const search = document.querySelector(".search")

// search.addEventListener('input', () => {
//     const value = search.value.toLowerCase();

//     items.forEach((item) => {
//         const text = item.textContent.toLowerCase();

//         if(text.includes(value)){
//             item.style.display = "block";
//         }else{
//             item.style.display = "none";
//         }
//     })
// })



// Live Password Strength Meter
// Add a password input field and a small label beside it that shows "Weak," "Medium," or
// "Strong." As the user types their password, check things like how long it is and whether it
// includes numbers or special characters, and update the label live so it always matches how
// strong the current password looks.
// Concepts: regular expressions, input event, conditional UI

// const input = document.querySelector(".password")
// const strength = document.querySelector(".strength")

// input.addEventListener('input', () => {
//     const password = input.value;

//     let score = 0;

//     if(password.length >= 6) score++;
//     if(password.length >= 10) score++;

//     if(/[0-9]/.test(password)) score++;

//     if(/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;

//     if(password.length === 0){
//         strength.textContent = "---";
//         strength.style.color = "black";
//     }
//     else if(score <= 1){
//         strength.textContent = "Weak";
//         strength.style.color = "red";
//     }
//     else if (score === 2) {
//         strength.textContent = "Medium";
//         strength.style.color = "orange";
//     } 
//     else {
//         strength.textContent = "Strong";
//         strength.style.color = "green";
//     }
// })



// Click-Outside-to-Close Modal
// Build a button that opens a modal popup box in the middle of the page when clicked, with a
// semi-transparent overlay behind it. The modal should be closable two ways: by clicking a
// small "X" close button inside it, or by clicking anywhere on the dark overlay outside it.
// Clicking inside the modal box itself should not close it.
// Concepts: event bubbling, stopPropagation

// const openBtn = document.querySelector(".open-btn")
// const closeBtn = document.querySelector(".close-btn")
// const overlay = document.querySelector(".overlay")
// const modal = document.querySelector(".modal")

// openBtn.addEventListener('click', () => {
//     overlay.style.display = "flex";
// })

// closeBtn.addEventListener('click', () => {
//     overlay.style.display = "none";
// })

// overlay.addEventListener('click', () => {
//     overlay.style.display = "none";
// })

// modal.addEventListener('click', (event) => {
//     event.stopPropagation()
// })



// Custom Dropdown Menu
// Instead of using a normal HTML <select> element, build your own dropdown using a button
// and a hidden list of options. Clicking the button should show or hide the list of options.
// Clicking any option in the list should close the dropdown and update the button's text to show
// whichever option was chosen.
// Concepts: classList, event delegation

// const btn = document.querySelector(".dropdown-btn")
// const ul = document.querySelector(".dropdown-menu")


// btn.addEventListener('click', () => {
//     ul.classList.toggle("show");
// })

// ul.addEventListener('click', (event) => {
//     const selected = event.target.textContent;
//     btn.textContent = selected;
//     ul.classList.remove("show");
// })



// Mini Shopping Cart Counter
// Display at least three products, each with its own name, price, and "Add to Cart" button.
// Keep a running total of how many items have been added and their combined price, showing
// both numbers somewhere on the page. Every time any "Add to Cart" button is clicked, both
// numbers should update right away to reflect the new total.
// Concepts: state tracking, DOM updates, reduce

// const btn = document.querySelectorAll(".add-btn")

// const itemCount = document.querySelector(".item-count");
// const totalPriceEl = document.querySelector(".total-price");

// let totalItems = 0;
// let totalPrice = 0;

// btn.forEach((btns) => {
//     btns.addEventListener('click', () => {
//         totalItems++;

//         const product = btns.parentElement;
//         const priceElement = product.querySelector(".price");
//         const numPrice = parseInt(priceElement.textContent);

//         totalPrice += numPrice;

//         itemCount.textContent = totalItems;
//         totalPriceEl.textContent = totalPrice;
//     })
// })



// Sortable Data Table
// Build a table with at least three columns (for example, Name, Age, and City) and several
// rows of sample data. Add click handling on each column header so clicking it sorts all the
// rows by that column. Clicking the same header again should reverse the order, switching
// between ascending and descending each time.
// Concepts: array sort, dynamic DOM rebuilding

// missing



// Stopwatch with Start/Pause/Reset 
// Build a stopwatch that displays elapsed time (for example, in seconds) along with three  buttons: Start, Pause, and Reset. Start should begin counting up from wherever it left off,  Pause should freeze the timer exactly where it is without losing the current time, and Reset  should bring the displayed time back down to zero. 
// Concepts: setInterval, clearInterval, state management 

// const start = document.querySelector(".start")
// const timer = document.querySelector(".time")
// const pause = document.querySelector(".pause")
// const reset = document.querySelector(".reset")

// let time = 0;
// let interval;

// start.addEventListener('click', () =>{
//      clearInterval(interval);
//     interval = setInterval(() => {
//         time++;
//         timer.textContent = time;
//     },1000)
    
// })

// pause.addEventListener('click', () =>{
//     clearInterval(interval);
// })

// reset.addEventListener('click', () =>{
//     timer.textContent = 0;
// })



// Multi-Step Form Wizard 
// Build a form split into at least three separate steps (for example, Step 1: personal details,  Step 2: address, Step 3: confirmation), showing only one step at a time. Add "Next" and  "Back" buttons to move between steps, along with a small progress indicator (such as "Step  2 of 3") that always shows exactly where the user currently is. 
// Concepts: classList, step-based rendering

// const steps = document.querySelectorAll(".step")
// const next = document.querySelector(".next")
// const back = document.querySelector(".back")
// const progress = document.querySelector(".progress")

// let currentStep = 0;
// steps[0].classList.add("active");

// next.addEventListener('click', () => {
//     if(currentStep < steps.length - 1){
//     steps[currentStep].classList.remove("active");
//     currentStep++;
//     steps[currentStep].classList.add("active");
// }
// updateUI()
// })


// back.addEventListener('click', () => {
//     if(currentStep > 0){
//     steps[currentStep].classList.remove("active");
//     currentStep--;
//     steps[currentStep].classList.add("active");
//     updateUI()
// }
// })

// function updateUI() {

//   progress.textContent = `Step ${currentStep + 1} of ${steps.length}`;
//   next.textContent = currentStep === steps.length - 1 ? "Submit" : "Next";
//   back.disabled = currentStep === 0;
// }

const btn = document.querySelector("button")
const list = document.querySelector("#list");


btn.addEventListener('click', () =>{
    const li = document.createElement("li")
    li.textContent = "Banana";
    list.append(li)
})


