"use strict";

//Задача 1
const userMoney = prompt('Ввудіть суму грошей, яка є у Вас в гаманці', '');
const priceCocolate = prompt('Введіть ціну шоколаду', '');
const numberChocolates = Math.floor(userMoney / priceCocolate);
const surrender = userMoney % priceCocolate;
alert(`Ви купили ${numberChocolates} шоколадок і у Вас залишилося ${surrender} грошей`);

