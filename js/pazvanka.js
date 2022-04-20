// aos
function aos_init() {
	AOS.init({
		duration: 1000,
		easing: "ease-in-out",
		once: true,
		mirror: false
	});
}
aos_init();
// gallery
jQuery("#animated-thumbnails-gallery")
	.justifiedGallery({
		captions: false,
		lastRow: "hide",
		rowHeight: 180,
		margins: 5
	})
	.on("jg.complete", function () {
		window.lightGallery(
			document.getElementById("animated-thumbnails-gallery"),
			{
				autoplayFirstVideo: false,
				pager: false,
				controls: false,
				zoom: false,
				download: false,
				rotate: false,
				showCloseIcon: true,
				galleryId: "nature",
				plugins: [lgZoom, lgThumbnail],
				mobileSettings: {
					controls: false,
					showCloseIcon: true,
					download: false,
					rotate: false
				}
			}
		);
	});
// cover
var popupModal = new bootstrap.Modal(document.getElementById("weddingPopup"), {});
document.onreadystatechange = function () {
	popupModal.show();
	setTimeout(function () {
		close_preloader();
	}, 5000);
};
// preloader
open_preloader();
function open_preloader() {
	var customElement = $("<div>", {
		"css": {
			"font-size": "22px",
			"text-align": "center",
		},
		"class": "please-wait",
		"text": "Please Wait..."
	});

	$.LoadingOverlay("show", {
		image: "",
		customAnimation: "3s fadein",
		custom: customElement
	});
}
function close_preloader() {
	$.LoadingOverlay("hide");
}
// copyText
function copyText(url) {
	var dummy = document.createElement("textarea");
	document.body.appendChild(dummy);
	dummy.value = url;
	dummy.select();
	document.execCommand("copy");
	document.body.removeChild(dummy);
	swal({
		text: "successfully copied",
	});
}
// Audio
var el = document.getElementById("myAudio");
var video = document.getElementById("myVideo");
function playAudio() {
	el.play();
}

function pauseAudio() {
	el.pause();
}
video.onplay = function () {
	el.pause();
};
video.onpause = function () {
	el.play();
};
// cardRsvp
function imgDownlodCode() {
	html2canvas(document.querySelector("#cardRsvp")).then(canvas => {
		var width;
		var height;
		var fileName = "Card RSVP"
		return Canvas2Image.saveAsJPEG(canvas, width, height, fileName);
	});
}
// Countdown
function animation(span) {
	span.className = "turn";
	setTimeout(function () {
		span.className = ""
	}, 700);
}

function Countdown() {

	setInterval(function () {

		var hari = document.getElementById("days");
		var jam = document.getElementById("hours");
		var menit = document.getElementById("minutes");
		var detik = document.getElementById("seconds");

		var deadline = new Date("Jun 27, 2022 09:00:00");
		var waktu = new Date();
		var distance = deadline - waktu;

		if (waktu >= deadline) {
			hari.innerHTML = '00';
			jam.innerHTML = '00';
			menit.innerHTML = '00';
			detik.innerHTML = '00';
		} else {
			var days = Math.floor((distance / (1000 * 60 * 60 * 24)));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			if (days < 10) {
				days = '0' + days;
			}
			if (hours < 10) {
				hours = '0' + hours;
			}
			if (minutes < 10) {
				minutes = '0' + minutes;
			}
			if (seconds < 10) {
				seconds = '0' + seconds;
			}

			hari.innerHTML = days;
			jam.innerHTML = hours;
			menit.innerHTML = minutes;
			detik.innerHTML = seconds;
			//animation
			animation(detik);
			if (seconds == 0) animation(menit);
			if (minutes == 0) animation(jam);
			if (hours == 0) animation(hari);
		}
	}, 1000);
}
Countdown();