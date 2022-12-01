const images = document.querySelectorAll('.slider-line img');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

function InIt() {
	width = document.querySelector('.slider').offsetWidth;
	// console.log(width);
	sliderLine.style.width = width * images.length + 'px';

	images.forEach(item => {
		item.style.width = width + 'px';
		item.style.height = 'auto';
	});
	Slide();
}

document.querySelector('.slider-prev').addEventListener('click', check => {
	count--;

	if ( count < 0)
		count = images.length - 1;
	Slide();
});

document.querySelector('.slider-next').addEventListener('click', check => {
	count++;

	if ( count >= images.length)
		count = 0;
	Slide();
});

window.addEventListener('resize', InIt);
InIt();

function Slide() {
	sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}