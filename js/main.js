/* global $,console*/
//receve cliced anchor in "do section" then show or hide paragraph.
function clicked(c) {
    'use strict';
    c.nextElementSibling.classList.toggle('show');
    c.classList.toggle('collapsed-arrow');
}
// slider in testmonials section.
var slideIndex = 1;
showSlide(slideIndex);
function plusDivs(n) {
    'use strict';
    showSlide(slideIndex += n);
}
function showSlide(n) {
    'use strict';
    var mySlide = document.getElementsByClassName('slider'),
        i;
    if (n > mySlide.length) {slideIndex = 1; }
    if (n < 1) { slideIndex = mySlide.length; }
    for (i = 0; i < mySlide.length; i += 1) {
        mySlide[i].style.display = 'none';
    }
    mySlide[slideIndex - 1].style.display = 'block';
    //و انا معرفاها من 1نقصنا واحد لانها مصفوفه تبدا من الصفر 
}
  // slider 2 
var slideIndexSec = 1;
showSlideSec(slideIndexSec);
function plusDivsSec(n) {
    'use strict';
    showSlideSec(slideIndexSec += n);
}
function showSlideSec(n) {
    'use strict';
    var mySlide = document.getElementsByClassName('sliderSec'),
        i;
    if (n > mySlide.length) {slideIndexSec = 1; }
    if (n < 1) { slideIndexSec = mySlide.length; }
    for (i = 0; i < mySlide.length; i += 1) {
        mySlide[i].style.display = 'none';
    }
    mySlide[slideIndexSec - 1].style.display = 'block';
    //و انا معرفاها من 1نقصنا واحد لانها مصفوفه تبدا من الصفر 
}

//show map
function showMap(s) {
    'use strict';
    document.getElementById('showmap').style.opacity = "0";
}

// scroll to top of page
/* function scrollup() {
    'use strict';
    if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
        window.scrollBy(0, -50);
        requestAnimationFrame(scrollToTop);
    }
    */
var scrollv = document.querySelector('.scroll-top'),
    timeOut;

$(window).scroll(function() {
    'use strict';
    if ($(window).scrollTop() > 200) {
        $(scrollv).fadeIn("slow");
    }
    else {
        $(scrollv).fadeOut("fast");
    }
});

function scrollup() {
    'use strict';
	if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
		window.scrollBy(0, -50);
		timeOut = setTimeout("scrollup()", 20);
    } 
        else {clearTimeout(timeOut); 
            }
}

