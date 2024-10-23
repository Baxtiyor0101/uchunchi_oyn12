// Date
// Math functions
// Functions

// let date = new Date();
// let res = new Date("2005-01-01T05:04:30");
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getMonth());
// console.log(date.getTime());
// console.log(date.getSeconds());
// console.log(date.getTimezoneOffset());
// console.log(date.getUTCDate());
// console.log(date.getUTCHours());
// console.log(date.getUTCDay());
// console.log(date.getUTCDay());
// console.log(res);

// Math functions
// let num = 16;
// console.log(Math.sqrt(num)); // ildizini(2) topadi
// console.log(Math.abs(num));   // modulini faqat musbat chiqadi
// console.log(Math.cbrt(num));  //cubic ildizini(3)
// console.log(Math.pow(num, 2));  // luboy sonning luboy darajasini topib beradi
// console.log(Math.LOG10E); //);
// console.log(Math.sin(Math.PI/4)); // sinusini
// console.log(Math.max(2, 4, 4, 5, 2, 22)); maximumini topadi sonlar orasidan
// console.log(Math.abs(Math.min(2, 4, 4, 5, -2, 22))); minimumini sonlar oras

// ParsInt
// let num = 4.499;
// console.log(Math.ceil(num));  // sonning tepadagi butun sonini chiqadi
// console.log(Math.floor(num));  // faqat butunini olib beradi
// console.log(Math.round(num));  // yaxlitlash 5 gacha bolsa pastga 5 va undan yuqori bilsa tepadagi butun sonni oladi

//  random
// console.log(Math.ceil(Math.random() * 3)); //

// Function
// bizda 3 xil function bor
// 1 function decloration
// 2 function expression
// 3 arrow function

// 1 function decloration
// let num=34
// function myFunc(a = 10, b = 20) {
//   // console.log("hello function decloration",a,b);
//   return a + b;
// }
// console.log(myFunc(12, 11));
// console.log(myFunc(15));
// myFunc(35);

// ////////////////////// misollar yechish
// let arr = [1, 2, 3, 4, 5];
// array ichidagi qiymatlar yigindisini topib beradigan funcfion tuzing

// aylananing radiusi berilgan bolsa uzunligini yuzini topib beruvchi function tuzing

// berilgan sonning factarialini topib beruvchi function tuzing

// uchta sonning eng kattasini topib beruvchi function tuzing

// berilgan stringing ichida nechta unli harf borligini topib beruvchi function tuzing

// Homework
// user tugulgan kunini ismini promtda kiritadi
// javob {ism} siz {yil} {oy} {kun} {soat} {munut} {sekunt } yashagansiz dep chiqarishi kk

// x va y oraligidagi ixtiyoriy sonni topib beruvchi function tuzing

// (capitalizeWords("javascript is fun")); // Output: JavaScript Is Fun
// gap ichida hamma sozlarning  bosh harfi katta qilib chiqarish

// let str="JavaScript Developer's Guide" => 4
// string ichida  nechta katta harf qatnashganini topib beruvchi function tuzing

// function getAge(ages, ismi) {
//   let birthDate = new Date(ages);
//   let curruntDate = new Date();
//   let diffYear = curruntDate.getFullYear() - birthDate.getFullYear();
//   let diffMonth = curruntDate.getMonth() - birthDate.getMonth();
//   if (diffMonth<0) {
//     diffYear--;
//     diffMonth = 12 + diffMonth;
//   }

//   let diffDay = curruntDate.getDate() - birthDate.getDate();
//   let diffHours = curruntDate.getHours() - birthDate.getHours();
//   let diffMinutes = curruntDate.getMinutes() - birthDate.getMinutes();
//   let diffSeconds = curruntDate.getSeconds() - birthDate.getSeconds();

//   return `${ismi} siz ${diffYear} yil ${diffMonth} oy ${diffDay} kun ${diffHours} soat ${diffMinutes} minut ${diffSeconds} secund yashagnsiz`;
// }
// let age = prompt("tugulgan kuningni kirit");
// let ism = prompt("ismingizni kiriting");
// alert(getAge(age, ism));

// function getRandomNumber(a, b) {
//   return Math.floor(Math.random() * (b - a + 1)) + a;
// }
// let randomNumber1 = +prompt("random number 1");
// let randomNumber2 = +prompt("random number 2");
// alert(getRandomNumber(randomNumber1, randomNumber2));

// 1 usul
// function capitalizeWords(str) {
//   let words = str.split(" ");
//   let capitalizedWords = words.map(
//     (word) => word.charAt(0).toUpperCase() + word.slice(1)
//   );
//   return capitalizedWords.join(" ");
//   //   alert(str);
// }
// let word = prompt("enter sentance you want");
// capitalizeWords(word);

// function capitalizeWords(str) {
//   let words = str.split("");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//   }
//   return words.join(" ");
// }

// let word = prompt("enter sentance you want"); // "javascript is fun"
// alert(capitalizeWords(word));

// let arrr =["a", "b", "c", "d", "e"]
// console.log(arrr[3]);

// function findUpperWords(letter) {
//   let count = 0;
//   for (let i = 0; i < letter.length; i++) {
//     if (letter[i].charCodeAt() > 64 && letter[i].charCodeAt() < 91) {
//       count++;
//     }
//   }

//   return count;
// }

// alert(findUpperWords("JavaScript Developer's Guide"));
