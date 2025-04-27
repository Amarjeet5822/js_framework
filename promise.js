// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 300);
// });

// myPromise
//   .then((value) => `${value} and bar`)
//   .then((value) => `${value} and bar again`)
//   .then((value) => `${value} and again`)
//   .then((value) => `${value} and again`)
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Promise.resolve("Promise resolved!").then((message) => {
//   console.log(message);
// });

// let intervalId = setInterval(() => {
//   console.log("Repeating task");
// }, 1000);

// clearInterval();

// setTimeout(() => console.log("Timeout 1"), 500);
// setTimeout(() => console.log("Timeout 2"), 0);
// console.log("End");

let person = { name: "John" };
function greet() {
    console.log("Hello, " + this.name);
}
let greetPerson = greet.bind(person);
greetPerson();
