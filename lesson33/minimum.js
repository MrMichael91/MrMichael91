"use strict";

const car = {
	manufacturer: "Audi",
	model: "TT",
	'year of manufacturer': "2006 year",
	'average speed': "150 km/hour",
	'fuel tank volume': "60 liters",
	'averege Fuel Consuption Per 100 km': "12 liters",
	drivers: "Vasil",
};

for( let key in car) {
    console.log(`${key}: ${car[key]}`)
}