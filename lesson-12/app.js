// /////////////// array destructuring + Object destruct

// let user = {
//   name: "John Doe",
//   age: 30,
//   address: {
//     street: "123 Main St",
//     city: "New York",
//     country: "USA",
//   },
// };
// let {
//   age,
//   name,
//   address: { street, city, country },
// } = user;
// console.log(street, city, country);
// przdnt
// let fruits = [
//   "apple",
//   "orange",
//   "banana",
//   "kiwi",
//   ["carrot", "poteto", "bodring"],
// ];
// let [apple, orange, banana, kiwi, [carot, poteto, bodring]] = fruits;
// console.log(kiwi);
// let longUserObject = {
//   name: "John Doe",
//   age: 30,
//   address: {
//     street: "123 Main St",
//     city: "New York",
//     country: "USA",
//   },
//   hobbies: ["reading", "painting", "cooking"],
//   friends: [
//     { name: "Alice", age: 28 },
//     { name: "Bob", age: 32 },
//   ],
//   // Adding a new property to the object
// };
// let {
//   name,
//   age,
//   address: { street, city, country },
//   hobbies: [read, pain, cook],
//   friends:[{name:name1,age:age1},{name:name2,age:age2}]
// } = longUserObject;

// const eCommerceStore = {
//   storeName: "Tech Market",
//   location: {
//     country: "Shopland",
//     city: "Retail City",
//     address: {
//       street: "456 Commerce St",
//       zipCode: "45678",
//     },
//     departments: [
//       {
//         name: "Electronics",
//         head: "Alice Johnson",
//         products: [
//           {
//             id: 1,
//             name: "Laptop",
//             brand: "TechBrand",
//             specs: {
//               processor: "Intel i7",
//               memory: "16GB",
//               storage: "512GB SSD",
//             },
//             price: 1200,
//             stock: {
//               available: 35,
//               reserved: 5,
//             },
//           },
//           {
//             id: 2,
//             name: "Smartphone",
//             brand: "PhoneCorp",
//             specs: {
//               processor: "Snapdragon 888",
//               memory: "8GB",
//               storage: "128GB",
//             },
//             price: 900,
//             stock: {
//               available: 100,
//               reserved: 20,
//             },
//           },
//         ],
//       },
//       {
//         name: "Home Appliances",
//         head: "Bob Smith",
//         products: [
//           {
//             id: 3,
//             specs: "sdsd",
//             name: "Refrigerator",
//             brand: "HomeCool",
//             specs: {
//               capacity: "300L",
//               energyRating: "4 stars",
//             },
//             price: 800,
//             stock: {
//               available: 10,
//               reserved: 2,
//             },
//           },
//           {
//             id: 4,
//             name: "Washing Machine",
//             brand: "CleanIt",
//             specs: {
//               capacity: "7kg",
//               type: "Front Load",
//             },
//             price: 600,
//             stock: {
//               available: 15,
//               reserved: 3,
//             },
//           },
//         ],
//       },
//     ],
//   },
//   employees: {
//     managers: [
//       {
//         name: "John Doe",
//         department: "Electronics",
//         contact: {
//           phone: "123-456-7890",
//           email: "john@techmarket.com",
//         },
//       },
//       {
//         name: "Jane Smith",
//         department: "Home Appliances",
//         contact: {
//           phone: "321-654-0987",
//           email: "jane@techmarket.com",
//         },
//       },
//     ],
//     sales: [
//       {
//         name: "Tom Hardy",
//         department: "Electronics",
//         contact: {
//           phone: "111-222-3333",
//           email: "tom@techmarket.com",
//         },
//       },
//       {
//         name: "Emily Blunt",
//         department: "Home Appliances",
//         contact: {
//           phone: "444-555-6666",
//           email: "emily@techmarket.com",
//         },
//       },
//     ],
//   },
//   promotions: {
//     current: [
//       {
//         id: "PROMO1",
//         name: "Spring Sale",
//         discount: "10%",
//         applicableProducts: [1, 2],
//       },
//       {
//         id: "PROMO2",
//         name: "Summer Clearance",
//         discount: "15%",
//         applicableProducts: [3, 4],
//       },
//     ],
//     upcoming: [
//       {
//         id: "PROMO3",
//         name: "Fall Sale",
//         discount: "20%",
//         applicableProducts: [1, 4],
//       },
//     ],
//   },
//   orderHistory: [
//     {
//       orderId: "ORD001",
//       customer: {
//         name: "Michael Scott",
//         contact: {
//           phone: "123-789-4560",
//           email: "michael@dundermifflin.com",
//         },
//       },
//       items: [
//         {
//           productId: 1,
//           quantity: 1,
//           pricePerUnit: 1200,
//         },
//         {
//           productId: 3,
//           quantity: 2,
//           pricePerUnit: 800,
//         },
//       ],
//       totalAmount: 2800,
//       status: "Delivered",
//     },
//     {
//       orderId: "ORD002",
//       customer: {
//         name: "Pam Beesly",
//         contact: {
//           phone: "456-123-7890",
//           email: "pam@dundermifflin.com",
//         },
//       },
//       items: [
//         {
//           productId: 2,
//           quantity: 1,
//           pricePerUnit: 900,
//         },
//       ],
//       totalAmount: 900,
//       status: "Pending",
//     },
//   ],
// };

// let {
//   storeName,
//   location: {
//     country,
//     city,
//     address: { street, zipCode },
//     departments: [
//       {
//         name,
//         head,
//         products: [
//           {
//             id,
//             name: namepro1,
//             brand,
//             specs: { capacity, energyRating },
//             price,
//             stock: { available, reserved },
//           },
//         ],
//       },
//       {
//         name11,
//         head11,
//         products: [
//           {
//             id11,
//             name: namepro111,
//             brand11,
//             specs: { capacity11, energyRating11 },
//             price11,
//             stock: { available11, reserved11 },
//           },
//         ],
//       },
//     ],
//   },
//   employees,
//   promotions,
//   orderHistory,
// } = eCommerceStore;

// let employees = {
//   managers: [
//     {
//       name: "John Doe",
//       department: "Electronics",
//       contact: {
//         phone: "123-456-7890",
//         email: "john@techmarket.com",
//       },
//     },
//     {
//       name: "Jane Smith",
//       department: "Home Appliances",
//       contact: {
//         phone: "321-654-0987",
//         email: "jane@techmarket.com",
//       },
//     },
//   ],
//   sales: [
//     {
//       name: "Tom Hardy",
//       department: "Electronics",
//       contact: {
//         phone: "111-222-3333",
//         email: "tom@techmarket.com",
//       },
//     },
//     {
//       name: "Emily Blunt",
//       department: "Home Appliances",
//       contact: {
//         phone: "444-555-6666",
//         email: "emily@techmarket.com",
//       },
//     },
//   ],
// };

//
// /////////////////////////////////////////////////////- `Object` constructor
/////////////////////////     - Object.keys()
//         - This method returns an array such that the elements of the array consist of all the keys of the object.
// console.log(Object.keys(user));
// let user = {
//   name: "John Doe",
//   age: 30,
//   address: "123 Main St",
//   email: "john@example.com",
// };
////////////////////////////////////     - Object.values()
//         - This method returns an array such that the elements of the array consist of all the values of the object.
// let user = {
//   name: "John Doe",
//   age: 30,
//   address: "123 Main St",
//   email: "john@example.com",
// };
// console.log(Object.values(user));

////////////////     - Object.entries()
//         - The **`Object.entries()`** static method returns an array of a given object's own enumerable string-keyed property key-value pairs.
// let user = {
//   name: "John Doe",
//   age: 30,
//   address: "123 Main St",
//   email: "john@example.com",
// };
// console.log(Object.entries(user));
// let test = Object.entries(user);

//////////////    // - Object.fromEntries()
//         - The **`Object.fromEntries()`** static method transforms a list of key-value pairs into an object.
// console.log(Object.fromEntries(test));
// ////////////////////    - Object.freeze()
//         - You can't add new properties to the object
//         - You can't modify the properties if they are not objects or arrays themselves.
//         - You can't delete properties from the object
// let user = {
//   name: "John Doe",
//   age: 30,
//   address: "123 Main St",
//   email: "john@example.com",
// };
// // Object.freeze(user);
// user.number = 123;
// delete user.name;
// user.address = "222 Main St";
// console.log(user);

// ////////////////////////////    - Object.isFrozen**()** (true,false)
//         - This method checks the object frozen or not.
// console.log(Object.isFrozen(user));

// /////////////////////    - Object.seal()
//         - You can't remove or add elements to the object.
//         - You **can** modify existing properties.
// let user = {
//   name: "John Doe",
//   age: 30,
//   address: "123 Main St",
//   email: "john@example.com",
// };
// Object.seal(user);
// user.address = "222 Main St";
// user.number = 123;
// delete user.age;
// console.log(user);
//     - Object.isSealed**()**
//         - This method checks the object sealed or not.
// console.log(Object.isSealed(user));

// let person = {
//   name: "John Doe",
//   age: 30,
//   address: "Tashkent",
//   email: "john@example.com",
//   phone: "123-456-7890",
//   hobbies: "reading",
//   key(){
//     return Object.keys(this)
//   },
//   values(){
//     return Object.values(this)
//   },
//   entries(){
//     return Object.entries(this)
//   },
//   freeze(){
//     Object.freeze(this)
//   },

// };

// console.log(user.key());
// console.log(user.());

// personga bitta method qoshiladi uni vazifasi bizga shu
// objectdagi keylarni(values) qaytaradigan bolsin

// 1=> keys
// 2=> values
// 3=> entries
// 4=> fromentries
// 5=> freez
// 6=>muzlatilganmi yoqmi
// 7> seal qiladigan method
// 8 => issealed

// ///////////////////////////////
// ///////////// rest operator(...) ,spread operator(...)

// function test(...args) {
//   console.log(args);
// }
// test(12, 3, 45, 7, 99);

// let numbers = [1, 2, 3, 4, 5];
// let rest = [7, 8, 9];
// console.log([...numbers, ...rest]);

// let user = {
//   name: "John Doe",
//   age: 30,
//   address: "Tashkent",
//   email: "john@example.com",
//   phone: "123-456-7890",
//   hobbies: "reading",
// }
// console.log({...user,number:"123"});

// let numbers = [1, 2, 3, 4, 5];
// console.log(Math.max(...numbers));

// function test(bir, ikki, ...lost) {
//   console.log(lost);
// }
// test(1, 24, 8, 5, 33, 2);

// homework
let data = [
  {
    id:1,
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    phone: "123-456-7890",
  },
  {
    id:2,
    name: "Jane Smith",
    age: 25,
    email: "jane@example.com",
    phone: "987-654-3210",
  },
  {
    id:3,
    name: "Tom Hardy",
    age: 40,
    email: "tom@example.com",
    phone: "765-432-1098",
  },
  {
    id:4,
    name: "Emily Blunt",
    age: 28,
    email: "emily@example.com",
    phone: "321-654-9870",
  },
  {
    id:5,

    name: "Emily Blunt",
    age: 28,
    email: "emily@example.com",
    phone: "321-654-9870",
  },
];

// crud ni bajarib kelila
// CRUD
//  C => create
//  R => read
//  U => Update
//  D => delete

// 4 ta function tuziladi

// create({
//   name: "Emily Blunt",
//   age: 28,
//   email: "emily@example.com",
//   phone: "321-654-9870",
// });


// read("Emily") 
// => {
  //   name: "Emily Blunt",
  //   age: 28,
  //   email: "emily@example.com",
  //   phone: "321-654-9870",
  // }


  // update(2,{})

  delete(3)