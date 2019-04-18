
var popup = document.querySeleсtor(".booking-form")
var button = document.querySeleсtor(".booking-search")

button.addEventListener("click", function(evt) {
	evt.preventDefault();
	
	if (popup.classList.contains("booking-form--hidden")) {
		popup.classList.remove("booking-form--hidden")
		popup.classList.add("booking-form--showed")
	}
	else if (popup.classList.contains("booking-form--showed")) {
		popup.classList.add("booking-form--hidden")
		popup.classList.remove("booking-form--showed")
	}
	
	})
	