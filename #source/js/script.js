
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
if (isMobile.any() || isMobile.iOS()) {
	document.body.classList.add('_touch')
} else {
	document.body.classList.add('_pc');
}
/* new WOW().init(); */

/* ============================МЕНЮ-БУРГЕР=========================================== */
let iconMenu = document.querySelector(".menu-header__icon");
let body = document.querySelector("body");
let menuBody = document.querySelector(".menu-header__menu");
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		iconMenu.classList.toggle("_active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("_active");
		//console.log('click');
	});
}


//==================== SCROLL ======================
console.log('test...');

