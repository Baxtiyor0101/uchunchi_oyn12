// console.log("Starting");

// bu yerda ishlandi

// console.log(24342342);

/*
    console.log("Sdfsd");
    console.log("Sdfsd");
    console.log("Sdfsd");
*/
// //////////  variables (o'zgaruvchi)
// let const var

// let age, names, address;
// names="SFsfsdfs"
// address="rere"
// // age = 23;
// age = 23;
// age = names;
// console.log(age);
// // let names=4

// let age = 23;
// age = 34;
// const names = "Dilshod";
// names = "Ozodbek";

// let test = 5;
// {
//     console.log(test);
// }

// let test = confirm("Are you sure you want to use this ?");
// let address = prompt("where do you live?");
// console.log(test);
// console.log(address);

// /////////////////  data types
// primative
// number
// string
// boolean
// undefined
// null
// symbol
// bigint
// nonprimative(referance)
// object
let names = prompt("ismizni kiriting")
let age = prompt("yosh kiriting")
let isMarried = confirm("turmush qurganmisz")
let user = {
  name: names,
  age: age,
  isMarried: isMarried,
  address: {
    city: "Tashkent",
    street: "Ashgabat",
    number: 123,
  },
};

console.log(user);
