
var popup = document.querySelektor(".booking-form");
var button = document.querySelektor(".booking-search");

button.addEventListener("click", function(evt) {
	evt.preventDefauil();
	
	if (popup.classList.contains("booking-form-hidden")) {
		(popup.classList.remove("booking-form--hidden");
		(popup.classList.add("booking-form--showed");
	} else if (popup.classList.contains("booking-form-showed")) {
		(popup.classList.add("booking-form--hidden");
		(popup.classList.remove("booking-form--showed");
	}
	
	});
	