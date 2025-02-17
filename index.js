"use strict";

const students = [
  ["Богдан", 15],
  ["Ваня", 11],
  ["Вова", 15],
  ["Артем", 15],
  ["Кирил", 14],
  ["Даня", 17],
  ["Максим", 15],
  ["Даніїл", 15],
  ["Уляна", 16],
];

// for (let i = 0; i < students.length; i++) {
//   students[i] = `${i + 1}.${students[i]}`;
// }
// console.log(students);

// for (let nameOfStudent of students) {
//   if (nameOfStudent === "Артем") {
//     continue;
//   }
//   console.log(`Привіт, ${nameOfStudent} !`);
// }
// for (let student of students) {
//   for (let innerStudent of student) {
//     console.log(innerStudent);
//   }
// }
// console.log("=========================");

// for (let i = 0; i < students.length; i++) {
//   for (let j = 0; j < students[i].length; j++) {
//     console.log(students[i][j]);
//   }
// }

// 1====================

// const Arr1 = [1, 5, "4", "hello"];
// const Arr2 = [true, 2, {}, "a", 222];

// console.log(Arr1[1]);
// console.log(Arr2[1]);

// console.log(Arr1[1] + Arr2[1]);

// 2====================

// const fruits = ["Яблуко", "Груша", "Банан", "Апельсин"];
// console.log(fruits[0]);
// fruits[fruits.length - 1] = "Слива";
// console.log(fruits);

// 3====================

// Зробили усно

// 4====================

// const programingLanguage = ["js", "c++", "python"];
// for (let i = 0; i < programingLanguage.length; i++) {
//   console.log(programingLanguage);
// }

// for (let elements of programingLanguage) {
//   console.log(elements);
// }

// 5====================

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (let i = 0; i < cart.length; i++) {
//   total += cart[i];
// }
// console.log(total);

// 2.1====================

// const arr1 = ["123", "asdf", "5342"];

// arr1[arr1.length] = "22";
// for (const elem of arr1) {
//   console.log(elem);
// }

// 2.2====================

// for (const element of Arr2) {
//   console.log(element, typeof element);
// }

// 2.3====================

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (let number of numbers) {
//   if (number % 2 === 0) {
//     total += number;
//   }
// }

// console.log(total);

// 3.1====================

const logins = ["Efenzik", "mollystutu", "kruisher"];
const targetLogin = prompt("логін : ");

// let found = false;
// for (let i = 0; i < logins.length; i++) {
//   if (logins[i] === targetLogin) {
//     console.log(`Користувач  ${targetLogin} знайдено.`);
//     found = true;
//     break;
//   } else {
//   }
// }
// if (!found) {
//   console.log(`Користувач  ${targetLogin} не знайдено.`);
// }

// 3.2====================

// const message = logins.includes(targetLogin)
//   ? `Користувач ${targetLogin} знайдено
//  `
//   : `Користувач ${targetLogin} не знайдено `;
// console.log(message);
