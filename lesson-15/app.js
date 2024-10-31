// Ternaery Operator (? :) oxshash if else
// Closure
// Hoisting
// Pure function
// imPure function



///////////////// Ternaery Operator (? :) oxshash if else
// let res = 12;
// let test = res % 2 === 0 ? res * 2 : res / 2;
// let result = res % 2 === 0 && "togri";
// console.log(result);

// let fruit = "anor";
// let res =
//   fruit === "apple"
//     ? 1000
//     : fruit === "banana"
//     ? 2000
//     : fruit === "anor"
//     ? 3000
//     : "bunday meva yo";
// console.log(res);

// let temperatura = 0;
// agar tem>50 => juda issiq
// tem<50 va tem>35 issiq
// tem<35 va tem>20 iliq
// 10 <tem<20 salqin
// 0 < tem <10 sovuq
// 0>tem anamal sovuq
// ? :

// Mijoz tomonidan sarflangan umumiy miqdorni kirish sifatida qabul
// qiladigan va chegirmani hisoblaydigan dastur yozing. Agar summa
// $1000 dan ortiq bo'lsa, 10% chegirmani qo'llang; agar u 500 dan
// 1000 dollargacha bo'lsa, 5% chegirmani qo'llang; aks holda chegirma
// qo'llanilmaydi. Har bir shart uchun uchlik operatordan foydalangan holda
// chegirma qo'llanilgandan so'ng yakuniy narxni ko'rsating.

// // 10

// Closure (hamma function closure function dep aytsak boladi)
// ozining scopedan tashqaridagi ozgaruvchilarni ishlata olishi hattoki
// tashqaridagi function tugagan bolsa ham

// let result = 23;
// function testClosure() {
//   console.log(result);
// }

// testClosure()

// function testClosure() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// let counter = testClosure();
// counter()
// counter()
// counter()

// function rest() {
//   let a = 0;
//   a++;
//   console.log(a);
// }
// rest()
// rest()
// rest()

// ////////////////////// pure functions not side effect here
// let x = 0;
// function purefunc() {
//   console.log("sdfsdjbsdkjc");
// }
// purefunc(2, 5);
// purefunc(2, 7);
// purefunc(6, 7);

// ////////////////////// Impure functions has side effect here
// let x = 0;
// function impurefunc() {
//   x++;
//   console.log(x);
// }
// impurefunc();
// impurefunc();
// console.log(x);


// Employee Bonus Calculation:
// Write a program that calculates an employee's bonus based on their 
// years of service and performance rating:

// Years of Service:

// More than 10 years: Eligible for a bonus.
// Between 5 and 10 years: Eligible for half the bonus.
// Less than 5 years: No bonus.
 

// Rating of "Excellent": Full bonus.
// Rating of "Good": 75% of the bonus.
// Rating of "Average": 50% of the bonus.
// Calculate and display the final bonus amount, with a ternary operator 
// handling each condition. Define a base bonus amount (e.g., $1000) that the
//  conditions will modify.




// ////////////////////////////////////////
// Bank Loan Interest Rate Calculation:
// Write a program to calculate the interest rate for a bank loan based on 
// the customer’s credit score and loan amount:

// Credit Score:

// 750 and above: Low-interest rate.
// Between 600 and 749: Medium-interest rate.
// Below 600: High-interest rate.
// Loan Amount (only applies if interest is low or medium):

// For amounts over $10,000, reduce the rate by an additional 0.5%.
// For amounts under $5,000, add an additional 0.5%.
// Use a base interest rate (e.g., 5%) and modify it based on the 
// conditions using nested ternary operators. Display the final interest rate 
// based on the credit score and loan amount.