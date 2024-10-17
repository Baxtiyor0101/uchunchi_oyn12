// Object
// array => crud (create read update delete)

// Object creation
// let person = {
//   name: "John Doe",
//   age: 30,
//   city: "New York",
// };

// read  (. , [])
// console.log(person.name,person.city,person.age);
// let key = prompt("senga qaysi propertysi kere")
// alert(person[key]);

// create
// let email = "email"
// person.number = "+99898885555";
// person[email] = "example@gmaipl.com"
// console.log(person);

// delete
// delete person.age;
// console.log(person);

// update
// person.age = 24;
// person["age"] = 44;
// // "age"

// console.log(person);

///////////////////////////// array

// array create
// let fruiut = ["apple", "orange", "kiwi"];

// read
// console.log(fruiut[3]);

// create
// fruiut[fruiut.length] = "banana";
// console.log(fruiut.length);
// fruiut[fruiut.length] = "pineapple";
// console.log(fruiut.length);
// console.log(fruiut[4]);

// delete
// delete fruiut[fruiut.length-1] ;
// console.log(fruiut);

// update
// fruiut[1] = "pineapple";
// console.log(fruiut);

/////////////////////////////////

// String methods
let str = "       lorem IPSUM      dolor, sit Ipsum Jamet. aa       ";
let str2 = "test";
// console.log(str.length);  // strning uzunligini
// console.log(str.charAt(3)); // index orqali strning  belgisini topish
// console.log(str.charCodeAt(0)); // unicodedagi tartib raqami
// console.log(str.concat(str2,"Toshmat")); // birlashtrish strninglarni
// console.log(str2.endsWith("a"), str.endsWith("as")); oxiri shu bilan tugaydimi
// console.log(str.includes("jam"));  //oz ichiga oladimi
// console.log(str.indexOf("a")); // a ning tartib raqami
// console.log(str.lastIndexOf(" ")); // aning oxirdan boshlab indexi
// console.log(str2.padEnd(11, "*"));
// console.log(str2.padStart(16, "*"));
// console.log(str2.repeat(2)); // takrorlaydi
// console.log(str.replace(" ", ","));
// console.log(str.replaceAll("ipsum", "test")); hammasini ozgartradi
// console.log(str.slice(10, str.length-2)); // stringning ichidan kopy qilish
// console.log(str.split(" ")); // shartga kora array elemntlari difatida joylashtradi
// let test = str.split(" ");

// console.log(test.join("#@")); // array elemntlarini shartga kora qoshib beradi
// console.log(str.startsWith("dolor"));  shu bilan boshlanadimi
// console.log(str.toLowerCase());
// console.log(str.toUpperCase(3));
// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());
 

// tasks 1
// Foydalanuvchiga o'zining to'liq ismini kiritishni taklif qiladigan dastur yozing.
// Nomdagi belgilar sonini (shu jumladan bo'shliqlarni) ko'rsating.
// Ismni barcha katta harflarga aylantiring va natijani ko'rsating.

// task 2
//   Foydalanuvchiga jumla kiritishni taklif qiling.
//   jumlaning birinchi belgisini ko'rsating.
//   Foydalanuvchidan jumla ichida qidirish uchun harf kiritishini so'rang.
//   ushbu harfning birinchi marta kelgan joyini toping va natijani ko'rsating. 
//   Agar xat topilmasa, shunday degan xabarni ko'rsating.

// task 3
// Foydalanuvchidan kamida 10 ta belgidan iborat jumlani kiritishni taklif qiling.
// Dastlabki 5 ta belgini ajratib olish va ularni ko'rsatish kk
// Foydalanuvchidan jumlaga almashtirish uchun so'z kiritishini so'rang.
// Ushbu so'zni "JavaScript" bilan almashtirish va o'zgartirilgan jumlani ko'rsatish kk

// task 4
// Foydalanuvchiga vergul bilan ajratilgan elementlar ro'yxatini
//  kiritishni taklif qiling (masalan, "olma, banan, olcha").
// Satrni alohida elementlar qatoriga aylantirish kk
// Massivni har bir element orasidagi bo'sh joy bilan yana bir qatorga qo'shing va natijani ko'rsating.