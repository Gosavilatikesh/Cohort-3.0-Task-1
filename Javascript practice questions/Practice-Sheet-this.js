// const user = {
//   name: "Ritik",
//   greet() {
//     console.log(this.name);
//   },
// };

// user.greet();

// "use strict"

// function show (){
//     console.log(this);

// }
// show()

// const car = {
//     brand : "bmw",
//     showBrand(){
//         console.log(this.brand);

//     }
// };
// car.showBrand()

// function greet() {
// console.log(this.name);
// }

// const user= {
//   name:"Aman"
// };

// greet.call(user)

// function introduce(city) {
//   console.log(`${this.name} from${city}`);
// }

// const person = {
//   name: "Ritik",
// };
// introduce.apply(person, [" bhopal"]);



// function greet() {
// console.log(this.name);
// }

// const user= {
//   name:"Priya"
// };

// let namee = greet.bind(user);
// namee("priya")



// const user= {
//   name:"Ritik",
//   greet: () => {
// console.log(this.name);
//   }
// };

// user.greet();