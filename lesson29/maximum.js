"use strict"

// const user = prompt("Який радіус кола?", "");
// const circumference = Math.PI;
// alert ("Радіус кола "+ (circumference*user*2).toFixed(2));

const userItemA = prompt("Вкажи місто вибуття.", "");
const userItemB = prompt ("Вкажи місто прибуття.", "");
const userDistance = prompt("Вкажи відстань між цими двома містами. Відстань вказати в кілометрах.", "");
const userTimeArrival = prompt("Вкажи кількість годин в дорозі?", "");
const speedOfMovement = parseInt(userDistance/userTimeArrival);
alert ("Швидкість з якою ви будете рухатися з міста " + userItemA + " до міста " + userItemB + " " + speedOfMovement + " км/год.");
