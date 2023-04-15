"use strict";

//Завдання 1
// const userAge = prompt("Скільки Вам років?", "");
// if (userAge <= 11) {
// 	alert("Ви є дитиною.");
// } else if (userAge <= 17) {
// 	alert("Ви підлітком.");
// } else if (userAge <= 59) {
// 	alert("Ви дорослиий.");
// } else if (userAge >= 60) {
// 	alert("Ви пенсіонер.");
// } else {
// 	alert("Введено невірні дані.");
// }

// Завдання 2
// const userNumber = prompt("Введіть число від 0 до 9.", "");
// if (userNumber == 1) {
// 	alert(`Під цим номером буде '!' cпецсимвол`);
// } else if (userNumber == 2) {
// 	alert(`Під цим номером буде '@' cпецсимвол`);
// } else if (userNumber == 3) {
// 	alert(`Під цим номером буде '#' cпецсимвол`);
// } else if (userNumber == 4) {
// 	alert(`Під цим номером буде '$' cпецсимвол`);
// } else if (userNumber == 5) {
// 	alert(`Під цим номером буде '%' cпецсимвол`);
// } else if (userNumber == 6) {
// 	alert(`Під цим номером буде '^' cпецсимвол`);
// } else if (userNumber == 7) {
// 	alert(`Під цим номером буде '&' cпецсимвол`);
// } else if (userNumber == 8) {
// 	alert(`Під цим номером буде '*' cпецсимвол`);
// } else if (userNumber == 9) {
// 	alert(`Під цим номером буде '(' cпецсимвол`);
// } else if (userNumber == 0) {
// 	alert(`Під цим номером буде ')' cпецсимвол`);
// } else {
// 	alert(`Ви ввели невірні дані.`);
// }

// Завдання 3
// const userNumber = prompt("Введіть числа через кому", "");
// function sumNumber(userNumber) {
// 	let userArr = userNumber.split(",");
// 	let sum = userArr.reduce(function (total, num) {
// 		return parseFloat(total) + parseFloat(num);
// 	});
// 	return sum;
// }
// alert(`Сума ваших чисел ${sumNumber(userNumber)}`);

// Завдання 4
// const userNumberOne = +prompt("Введіть перше число", "");
// const userNumberTwo = +prompt("Введіть друге число", "");

// for (let i = 2; i < userNumberOne; i++) {
// if (userNumberOne % i == 0 && userNumberTwo % i == 0) {
// 	console.log(i);
// 	alert(`Ваш спільний дільник двох чисел буде ${i}`)
// }

// }
// console.log(greatestDivisor);

// Завдання 5
// const userNumber = +prompt("Введіть число", "");
// for (let i = 1; i <= userNumber; i++) {
// if (userNumber % i == 0) {
// 	console.log(i);
// 	alert(`Ваше число ділиться на ${i}`);
// }
// }