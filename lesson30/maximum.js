"use strict";

const userSumma = prompt("Введіть суму вкладення.", 10000);
const userTime = prompt("На скільки місяців оформлюється депозит?", 2);
const INTEREST_RATE = 5 / 100;
const result = ((userSumma * INTEREST_RATE) / 12) * userTime;
const resultUserSumma = Math.round(+userSumma + result);
alert(`Ваш дохід становить ${resultUserSumma}`);
