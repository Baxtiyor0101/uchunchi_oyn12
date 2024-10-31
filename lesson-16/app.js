// Object copying
// constructors
// let user = {
//   name: "John Doe",
//   age: 30,
//   email: "john@example.com",
//   address: {
//     street: "123 Main St",
//     city: "New York",
//   },
// };

// console.log(tets);

// let user2 = user;
// user2.name = "John";
// let user3 = Object.assign({},user);
// user3.name = "Jonibek";
// console.log(user);

// let copied = {};
// // copied["name"]="testbek"
// for (const key in user) {
//   copied[key] = user[key];
// }
// copied.address.city = "Sam";
// console.log(user);
//Shallow copy, Deep copy

// let user = {
//   name: "John Doe",
//   age: 30,
//   email: "john@example.com",
//   address: {
//     street: "123 Main St",
//     city: "New York",
//   },
// };
// let copied = JSON.parse(JSON.stringify(user));
// // let user2 = JSON.parse(copied);
// copied.address.city = "Tashkent";
// console.log(copied);
// Json.Stringfy()
// Json.Parse()

let longUser = {
  name: "John Doe",
  age: 30,
  email: "john@example.com",
  address: {
    street: "123 Main St",
    city: "New York",
  },
  hobbies: ["reading", "painting", "cooking"],
  friends: [
    { name: "Jane Doe", age: 28 },
    { name: "Alice Johnson", age: 32 },
  ],
  greetings: function () {
    console.log("Hello, my name is " + this.name);
  },
};

// shallow copy qilasla va tekshirib korila for in,object.assign
// shallow  copy json.stringfy va json.parse bilan

// recursive function => ozini ozi chaqiradigan function
// shallow copy ...
// deep copy recursive function

// recursive function

// function deepCopy(obj) {
//   if (typeof obj !== "object" || obj === null) {
//     return obj;
//   }

//   let copiedObj = Array.isArray(obj) ? [] : {};

//   for (let key in obj) {
//     copiedObj[key] = deepCopy(obj[key]);
//   }

//   return copiedObj;
// }

//    4! ni toping  1*2*3*4
// let a = 1;
// for (let i = 1; i <= 6; i++) {
//   a *= i;
// }
// console.log(a);

// // function factorial(n)
// function factorial(n){
//     if(n === 0){
//         return 1;
//     }
//     return n * factorial(n - 1); // 4*3*2*1
// }

// console.log(factorial(4)); // 24

// shallow copy with ...

// let user = {
//   name: "John Doe",
//   age: 30,
//   email: "john@example.com",
//   address: {
//     street: "123 Main St",
//     city: "New York",
//   },
// };

// let copied = { ...user };

// ///////////   deep copy with recursive function
let user = {
  name: "John Doe",
  age: 30,
  email: "john@example.com",
  address: {
    street: "123 Main St",
    city: "New York",
  },
  sayHi() {
    console.log("Hello, my name is " + this.name);
  },
};

function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  let copiedObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    copiedObj[key] = deepCopy(obj[key]);
  }
  return copiedObj;
}
let copied = deepCopy(user);
copied.address.street = "sdsdfsdfsd";
// user.sayHi();

// copied.sayHi(); // Hello, my name is John Doe
console.log(user);
