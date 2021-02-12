document.onload = function (argument) {

document.querySelector('#menubtn').addEventListener('click', () => {
	document.querySelector('.header_nav').style.visibility = 'visible',
	document.querySelector('.header_nav').style.top = "0";

});

document.querySelector('.close-nav').addEventListener('click', () => {
	document.querySelector('.header_nav').style.visibility = 'hidden',
	document.querySelector('.header_nav').style.top = "-100%";

});


window.onscroll = () => {
	const scrolled = window.pageYOffset || document.documentElement.scrollTop;
	scrolled > 100 ? document.querySelector('.up_btn').style.display = 'inline-flex' :
	document.querySelector('.up_btn').style.display = 'none';
	scrolled > 100 ? document.querySelector('.header').style.position = 'fixed' :
	document.querySelector('.header').style.position = 'absolute';
}

document.querySelector('.up_btn').addEventListener('click', () => {
		document.body.scrollTop>0 || document.documentElement.scrollTop>0 ? window.scrollBy(0, -1000) : setTimeout(goToTop, 20)
	})
}
();