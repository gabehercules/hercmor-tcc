// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("myBtn").style.display = "block";
	} else {
		document.getElementById("myBtn").style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// Parallax

$(document).ready(function () {
	$('div.bgParallax').each(function () {
		var obj = (this);

		$(window).scroll(function () {
			var yPos = -((window).scrollTop() / obj.data('speed'));

			var bgpos = '50%' + yPos + 'px';

			obj.css('background-position', bgpos);

		});
	});
});

// Parallax



