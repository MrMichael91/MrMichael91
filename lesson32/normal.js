"use strict";

//Завдання 1
function perfectNumber(a) {
	let b = 0;
	for (let i = 0; i < a; i++) {
		if (a % i == 0) {
			b += i;
		}
		if (a === b) {
			console.log("Number perfect");
		} else {
			console.log("Number no perfect");
		}
	}
}
perfectNumber(496);//6;28;496;Числа - 8128,33550336 - непровіряти!!!

//Завдання 2
