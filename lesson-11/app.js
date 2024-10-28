// isArray
// factory functions object yaratib eradigan function(retunt obj)
// IIFE  function   darhol ishlab ketadigan function (elon qilingan joyni ozida)
// Anonymous function   nomsiz function
// callbacks function   parameterda keladigan function
// hight order function agar parametrida function kelsa yoki boshqa bir function return qilsa bu function HOF deyiladi

// object methods property sifatida kiritilgan function
// this keyword object ichida aynan osha obectning oziga teng boladi
// in keyword  objectda qidirilayotgan key bormi yoki yoq (true || false)
// ?. (optional chaining)

// let arr = "[1, 2, 3, 4, 5, 6, 7, 8, 9]";
// console.log(Array.isArray(arr));

// factory functions object yasash uchun kk
// function factoryFunc(name, age, job) {
//   return {
//     name,
//     age,
//     job,
//   };
// }
// let user1 = factoryFunc("John", 33, "developer");
// let user2 = factoryFunc("Jack", 23, "designer");
// console.log(user1);
// console.log(user2);

// //////////////////////// IIFE  function
// Immediatly invoced function expression
// (function test() {
//   alert("oyin boshlandi");
//   //   ................
//   alert("oyin tugadi");
//   let confirms = confirm("yana oynashni hohlaysanmi");
//   if (confirms) {
//     test();
//   } else {
//     alert("oyin o'chirildi");
//   }
// })();

// Anonymous function (nomsiz function )

// (function () {
//   let x = 10;
//   console.log(x);
// })();
// let test = function () {
//   console.log("test");
// };

// ()=>{}

// callbacks function

// function test(a) {
//   return a();
// }
// console.log(test(() => 3 + 5));

// hight order function
// function agar parametrda function qabul qilsa yoki boshqa bor function
// return qilsa bu function HOF function dep ataladi

// function high(a) {
//   console.log(a() + 55);
// }

// high(() => 44);

// function highOrder() {
//   return function () {
//     console.log(55);
//   };
// }

////////////////////  object methods
// let user = {
//   name: "John",
//   age: 33,
//   job: "developer",
//   sayHi: function () {
//     console.log(
//       `Hello my name is ${this.name} i am ${this.age+44} years old and i am a ${this.job}`
//     );
//   },

//   sayBye(names) {
//     console.log(`Goodbye, my name is Smith ${names}`);
//   },
// };

// console.log(user);
// user.sayHi();
// user.sayBye("Dilshod")

// function test(ism="test user"){
//     console.log(ism + 55);
// }

// test("Dilshod");

// let user = {
//   name: "John",
//   age: 33,
//   job: "developer",
// };

// console.log("name" in user);

// ///////////////////// optional chaining ?.
// let user = {
//   name: "John",
//   age: 33,
//   job: "developer",
//   address: {
//     city: "New York",
//     street: "123 Main St",
//     zipcode: "10001",
//   },
// };

// // ? :

// console.log(user?.address?.city);

// let test;
// console.log(test);
// console.log(test.age);

// let name = "John";
// let age = "33";
// let users = {
//   name,
//   age,
// };
// console.log(users);

//  factory function
// callbacks function
// IIFE function
// anonimous function
// HOF
// this keyword
// ?.
// in keyword
// object methods

// person objectini tuzing uning ichida name surname address  va uning
//  ichida city va zipcode bolsin
//  objectga uning toliq ismini katta harflar bilan chiqarib beradigan method yarating
// ?. dan foydalanib mavjud qiymatlarini tekshirib koring

// homework
// 1
// Parametr sifatida nomi, modeli va yili qabul qiluvchi va shu
// xususiyatlarga ega avtomobil obyektini qaytaradigan createCar nomli funksiyasini yarating.
// Qaytarilgan avtomobil ob'ektida avtomobilni tavsiflovchi satrni qaytarish
//  uchun this kalit so'zidan foydalanadigan getCarInfo() methodi ham bo'lishi kerak.

// function createCar(marka, model, year) {
//   return {
//     marka,
//     model,
//     year,
//     getCarInfo() {
//       return `Avtomobil ${this.marka} ${this.model}, ${this.year} modelda .`;
//     },
//   };
// }
// let car1 = createCar("BMW", "M5", "2008");
// let car2 = createCar("Mers Bens","test","2010")
// console.log(car1.getCarInfo());
// console.log(car2.getCarInfo());
// 2
// Ikki argumentni qabul qiluvchi processOrder funktsiyasini yozing:
//  ordernumber va  callback function.
// callback funktsiyasi order qayta ishlanganligi haqida xabarni ko'rsatishi kerak.
// ProcessOrder funksiyangizni turli callbacklar bilan sinab ko‘ring (masalan, console.log va boshqa
//callback   funksiyasi).

// function processOrder(orderNumber, callback) {
//   callback(orderNumber);
// }
// processOrder(111, (num) => {
//   console.log(`Order ${num} qayta ishlangan`);
// });
// 3
// Skript ishga tushirilgandan so'ng darhol konsolga joriy sana va vaqtni qayd qiluvchi function yozing.
// (function () {
//   let date = new Date();
//   console.log(
//     `Joriy sana: ${date.getDate()}.${
//       date.getMonth() + 1
//     }.${date.getFullYear()}`,
//     `Vaqt: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
//   );
// })();
// console.log(2,3);
// 4
// function filterItems(arr, predicate) {
//     // Your code here
// }
// const numbers = [1, 2, 3, 4, 5];
// console.log(filterItems(numbers, n => n > 3)); // Output: [4, 5]
// function filterItems(arr, predicate) {
//   return arr.filter(predicate);
//   // Your code here
// }
// const numbers = [1, 2, 3, 4, 5];
// console.log(filterItems(numbers, (n) => n % 2 == 0));
// 5
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },
//     // Add properties here
//     // Add method here
// };
// console.log(person.getFullName()); // "John Doe"

// 6
// const company = {
//   name: "TechCorp",
//   location: "San Francisco",
//   ceo: { name: "Jane Doe" }, // Uncomment this line to test
// };
// if (company?.ceo?.name?.test?.cargo) {
//   console.log("CEO has a cargo");
// } else {
//   console.log("CEO does not have a cargo");
// }
// console.log(company.ceo?.name); // Use optional chaining

// 7
// const calculator = {
// Define methods here (add, subtract, etc.)
// };
// console.log(calculator.add(5, 3)); // 8
// console.log(calculator.subtract(10, 4)); // 6

// let calc = {
//   add: (a, b) => a + b,
//   subtract: function (a, b) {
//     return a - b;
//   },
//   multiply: function (a, b) {
//     return a * b;
//   },
//   divide: function (a, b) {
//     if (b === 0) {
//       throw new Error("Division by zero is not allowed.");
//     }
//     return a / b;
//   },
// };

// console.log(calc.add(5, 3)); // 8

// console.log(calc.subtract(10, 4)); // 6

// console.log(calc.multiply(2, 5)); // 10
