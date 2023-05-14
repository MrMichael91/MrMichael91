"use strict";

let swiper = new Swiper(".mySwiper", {
	direction: "vertical",
	speed: 1500,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	loop: true,
});

let newsSwiper = new Swiper(".newsSwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	zoom: true,
	arrows: true,
	infinite: true,
	speed: 1500,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	loop: false,
});

function initMap() {
	let map = new google.maps.Map(document.getElementById("maps"), {
		center: new google.maps.LatLng(40.6736, -73.8855),
		zoom: 14,
		disableDefaultUI: true,
	});
	let markerImage = {
		url: "./assets/image/marker-map.png",
		anchor: new google.maps.Point(54, 54),
	};

	let marker = new google.maps.Marker({
		position: new google.maps.LatLng(40.682, -73.8993),
		map: map,
		icon: markerImage,
	});
}
window.initMap = initMap;

// const windowPos = window.scrollY;
// const header = document.getElementById("header");
// const sliderHeight =
// 	document.getElementsByClassName("mySwiper")[0].offsetHeight;
// function fixedHeader() {
// 	if (windowPos > sliderHeight) {
// 		header.classList.add("fixed-header");
// 	} else {
// 		header.classList.remove("fixed-header");
// 	}
// }

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});

const formContacts = document.getElementById("form__contacts-twobox");
console.log(formContacts);
formContacts.addEventListener("submit", (event) => {
	event.preventDefault();

	let contact = [];
	if (localStorage.getItem("contact")) {
		contact = JSON.parse(localStorage.getItem("contact"));
	}
	contact.push({
		name: formContacts.elements.name.value,
		email: formContacts.elements.email.value,
	});

	localStorage.setItem("contact", JSON.stringify(contact));
	console.log(contact);
	localStorage.clear();
	alert(`Ви зареєструвалися під іменем ${contact[0].name} ,ваш email: ${contact[0].email}`);
});
