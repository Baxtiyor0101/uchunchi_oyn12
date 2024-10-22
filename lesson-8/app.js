/*
push
pop
unshift
shift boshidan ochirad
cancat arraylarni qoshish uchun
indexOf elemnt indexini topish uchun
slice elmntlarni copy qilish
splice elmntlarni ochiirsh qoshish (cut)
reverse elmntlarni teskari qilad
include bormi yoqmi
findindex sharga togri keladigan birinchi index
join array elmntlarini qoshib string qilib beradi
lastindexof oxidan birinchi keladigan elmnt indexini topadi

reduce array elemntlarini qoshib beradi
some shartga mos keladiga elmnt bormi
foreach har bir array elmntlari bilan action bajarish
fild shatga mos keluchi birinchi elemnt
map
sort
filter
*/

// let fruits = ["apple", "orange", "kiwi", "banana"];
// fruits.splice(1, 1, "Cherry");
// // console.log(fruits);
// let test=fruits.forEach((val,inx,arr)=>{
//   console.log(val);
//   console.log(inx);
//   console.log(arr);
// })
// console.log(test);

// let newarr = fruits.map((val, inx, arr) => val + "fresh");
// console.log(newarr);

// let res = fruits.filter((val, inx, arr) => val.includes("a"));
// console.log(res);

// let newarr = fruits.forEach((val,inx) => {
//     console.log(val, inx);
// });

// console.log(fruits);

// let arr = [12, 4, 6, 7, 8, 9, 10, 88, 32, 2, 5];
// let sorted = arr.sort((a, b) => a - b);
// console.log(sorted[sorted.length-1]);

// let str = prompt("text kiriting");
// let serchingText = prompt("qidirilayotgan sozni kirit");
// let test = str.split(" ").filter((val, inx) => val === serchingText).length;
// alert(test)

////////////////////////////////////loop
// for
// while
// do while
// console.log(i);
// for (let i = -10 ; i < 11; i--) {
//     console.log(i);
// }
// i+=2  => i=i+2
// i*=2 => i=i*2

// while
// let i = -10;
// while (i < 10) {
//   console.log(i);
// //   i++;
// }

// do while
// let i = -10;
// do {
//   console.log(ei);
//   i++;

// } while (i < 10);

// ishlat  for loop chiqar numbers from 1 to 50.

// ishlat  while loop chiqar numbers from 50 to 1.

// ishlat  do while loop chiqar numbers from 20 to 30.

// 1 dan 100 gacha juft sonlar yigindisi

// berilgan son boyicha osha factarialni toping

// stringning teskaridini toping

// Raqamni taxmin qilish o'yini:
// Do while siklidan foydalanib raqamlarni taxmin qilish
// oʻyinini yarating. O'yin foydalanuvchini to'g'ri raqamni
// topmaguncha taklif qilishda davom etishi kerak.

// let arr = [1, 2, 3, 4, 5];

// homework
// 1) Reverse string => "Lorem" -> "meroL" (For, prompt)
// 2) Reverse number => 8658 -> 8568 (For, prompt) !NUMBER
// 3) toq yoki juft => 10 -> 0 juft, 1 toq, ..., 9 toq, 10juft
// 4) Tub sonmi => 3 -> tub, 4 -> murakkab, 9 -> murakkab
// 5?) Mukammal sonmi => 4 -> yoq, 6 -> ha, 9 -> yoq
// 6) prompt() => 198 => 1 + 9 + 8 => 18 => 1 + 8 => 9
// 7) let arr = [10, 20, 50, 30, 5]; eng kattasini toping
// 8) prompt() => non => non => true, lorem => merol => false
// let arr = [10, 20, 50, 30, 5];
// let num = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (num > arr[i]) {
//     num = arr[i];
//   }
// }
// console.log(num);

// // function isPerfectNumber(num) {
// let num = +prompt("son kiriting");
// let sum = 0;
// for (let i = 1; i < num; i++) {
//   if (num % i === 0) {
//     sum += i;
//   }
// }

// alert(sum === num);
// }

// let number = 6;
// if (isPerfectNumber(number)) {
//   console.log(`${number} is a perfect number`);
// } else {
//   console.log(`${number} is not a perfect number`);
// }

// ////////////// tub son
// function isPrime(num) {
//   // A prime number must be greater than 1
//   if (num <= 1) {
//     return false;
//   }

//   // Check divisibility from 2 to the square root of num
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// // Example usage
// let number = 29;
// if (isPrime(number)) {
//   console.log(`${number} is a prime number`);
// } else {
//   console.log(`${number} is not a prime number`);
// }
