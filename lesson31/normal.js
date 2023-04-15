"use strict";

// Завдання 1 test
// const userNumber = +prompt("Введіть пятирозрядне число");
// function getReversedNum(userNumber) {
// let result = 0;
// while (userNumber) {
// 	result = result * 10 + (userNumber % 10);
// 	userNumber = Math.floor(userNumber / 10);
// }
// return result;
// }

// if (userNumber === getReversedNum(userNumber)) {
// 	alert("Число є паліндромне!");
// } else {
// 	alert("Число не паліндромне");
// }

// Завдання 1
// const userNumber = prompt("Введіть пятирозрядне число", "");
// const arr = userNumber.split("");
// const arr1 = userNumber.split("");
// const getReversedNum = arr1.reverse();
// if (arr.length === 5) {
// 	if (arr.join() === getReversedNum.join()) {
// 		alert("Число є паліндромне!");
// 		console.log(arr, getReversedNum);
// 	} else {
// 		alert("Число не є паліндромним");
// 		console.log(arr, getReversedNum);
// 	}
// } else {
// 	alert("Почни заново, введи правильну кількість чисел.");
// }

// Завдання 2
// const userSumBuy = prompt("Введіть суму Вашої покупки", "");
// const userProcentOne = 3 / 100;
// const userProcentTwo = 5 / 100;
// const userProcentThre = 7 / 100;
// if (userSumBuy < 200) {
// 	alert(`Сума до сплати без знижки ${userSumBuy}`)
// } else if (userSumBuy <= 299) {
// 	alert(`Сума до сплати зі знижкою ${userSumBuy - userSumBuy * userProcentOne}`);
// } else if (userSumBuy <= 499) {
// 	alert(`Сума до сплати зі знижкою ${userSumBuy - userSumBuy * userProcentTwo}`);
// } else if (userSumBuy >= 500) {
// 	alert(`Сума до сплати зі знижкою ${userSumBuy - userSumBuy * userProcentThre}`);
// }

// Завдання 4
// let weekday = [
// 	"Monday",
// 	"Tuesday",
// 	"Wednesday",
// 	"Thursday",
// 	"Friday",
// 	"Saturday",
// 	"Sunday",
// ];
// weekday.forEach((weekday) => {
// 	alert(`${weekday}. Хочеш побачити наступний день?`);
// });
