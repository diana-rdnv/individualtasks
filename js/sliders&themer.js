// JavaScript Document

//slider1
/* Индекс слайда по умолчанию */
var slideIndex1 = 1;
showSlides1(slideIndex1);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide1() {
    showSlides1(slideIndex1 += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide1() {
    showSlides1(slideIndex1 -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
}

/* Основная функция слайдера */
function showSlides1(n) {
    var i;
    var slides1 = document.getElementsByClassName("item1");
    var dots1 = document.getElementsByClassName("slider-dots_item1");
    if (n > slides1.length) {
      slideIndex1 = 1
    }
    if (n < 1) {
        slideIndex1 = slides1.length
    }
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
    }
    for (i = 0; i < dots1.length; i++) {
        dots1[i].className = dots1[i].className.replace(" active1", "");
    }
    slides1[slideIndex1 - 1].style.display = "block";
    dots1[slideIndex1 - 1].className += " active1";
}

	
//slider2

var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlide2() {
    showSlides2(slideIndex2 += 1);
}

function minusSlide2() {
    showSlides2(slideIndex2 -= 1);  
}

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    var i;
    var slides2 = document.getElementsByClassName("item2");
    var dots2 = document.getElementsByClassName("slider-dots_item2");
    if (n > slides2.length) {
      slideIndex2 = 1
    }
    if (n < 1) {
        slideIndex2 = slides2.length
    }
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active2", "");
    }
    slides2[slideIndex2 - 1].style.display = "block";
    dots2[slideIndex2 - 1].className += " active2";
}

//slider3
	var slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlide3() {
    showSlides3(slideIndex3 += 1);
}

function minusSlide3() {
    showSlides3(slideIndex3 -= 1);  
}

function showSlides3(n) {
    var i;
    var slides3 = document.getElementsByClassName("item3");
    var dots3 = document.getElementsByClassName("slider-dots_item3");
    if (n > slides3.length) {
      slideIndex3 = 1
    }
    if (n < 1) {
        slideIndex3 = slides3.length
    }
    for (i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";
    }
    for (i = 0; i < dots3.length; i++) {
        dots3[i].className = dots3[i].className.replace(" active3", "");
    }
    slides3[slideIndex3 - 1].style.display = "block";
    dots3[slideIndex3 - 1].className += " active3";
}
	
//themer
	var themer = document.getElementById('themer');
    var invertor = document.getElementById('inverter');

    themer.addEventListener('change', function () {
  // Triggers repaint in most browsers:
    invertor.setAttribute('media', this.checked ? 'screen' : 'none');
  // Forces repaint in Chrome:
    invertor.textContent = invertor.textContent.trim();
});