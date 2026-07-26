// Create a new array containing only prices greater than ₹300.

// let prices = [100,250,500,150,700];

// let get = prices.filter(greater);

// function greater(prices){
//     return prices > 300;
// }
// console.log(get);

// Print the last student's name.

// let students= ["Aman","Ritik","Priya","Rahul","Latikesh"];

// console.log(students[students.length-1]);

// Add "Monitor" to the end of the array.

// let products = ["Laptop","Mouse","Keyboard"];
// let add = products.push("Monitor")
// console.log(add);

// Remove the latest notification.

// let notifications= [
// "Order Placed",
// "Order Shipped",
// "Order Delivered"
// ];

// notifications.pop()
// console.log(notifications);

// Check if "Ritik" exists.

// let users= ["Aman","Ritik","Priya"];
// let find = users.includes("Ritik")
// console.log(find);

// Create a new array where each mark is followed by % .

// let marks= [80,90,70];

// const percentage = marks.map(mark => `${mark}%`);
// console.log(percentage);

// Print total number of products.

// let cart = ["Mouse", "Keyboard", "Monitor", "Laptop"];
// console.log(cart.length);

// Find average marks.

// let marks= [80,90,70,85,95];
// let total = marks.reduce((acc, currentValue) => {
//     return acc + currentValue
// },0)

// console.log(total/5);

// Return all even numbers.

// let numbers= [1,2,3,4,5,6,7,8];
// let evenNum = numbers.filter(even)

// function even(numbers){
//     return numbers % 2 == 0
// }
// console.log(evenNum);

// Find the index of "Keyboard" .

// let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];

// let indexProd = products.indexOf("Keyboard")
// console.log(indexProd);

// Calculate total revenue.

// let sales = [500,700,1000,300];
// let total = sales.reduce((acc, currentValue) => {
//     return acc + currentValue
// },0)

// console.log(total);

// Convert every username into uppercase.

// let users= ["ritik","aman","priya"];

// let toUppercase = users.map(user => user.toUpperCase())
// console.log(toUppercase);

// Find the first age greater than or equal to 18.

// let ages= [12,15,17,19,22];

// function checkAge(age){
//     return age >= 18
// }
// let total = ages.find(checkAge);
// console.log(total);

// Check if every number is positive.

// let nums= [5,8,10,3];

// function checkPositive(num){
//     return num > 0
// }
// let result = nums.every(checkPositive)
// console.log(result);

// class BankAccount {
//   #balance = 1500;
//   deposit(amount) {
//     this.#balance += amount;
//     return "Amount Deposit Successful";
//   }
//   withdraw(amount) {
//     this.#balance -= amount;
//     return "Amount Withdraw Successful";
//   }
//   getBalance() {
//     return `Your Acount Balance ${this.#balance}`;
//   }
// }
// const acount = new BankAccount();
// console.log(acount.deposit(3000));
// console.log(acount.getBalance());
// console.log(acount.withdraw(300));
// console.log(acount.getBalance());


// Find the number that appears the most.

// let numbers= [1,2,3,2,4,2,5,1,1,1];

// let count = {};

// for(let i = 0; i < numbers.length; i++){
//     let num = numbers[i]

//     if(count[num]){
//         count[num] += 1;
//     }else{
//         count[num] = 1
//     }
// }
// console.log(count);

// let frequency = 0;
// let mostfrequent;

// for(let key in count){
//     if(count[key] > frequency){
//         frequency = count[key]
//         mostfrequent = key
//     }
// }
// console.log(mostfrequent,frequency);


// Find the second largest number.

// let nums= [10,50,20,80,40];
// nums.sort((a,b) => a - b)
// console.log(nums[nums.length-2]);


// Create a new array with unique values.
// let ids= [1,2,2,3,4,4,5,5];





