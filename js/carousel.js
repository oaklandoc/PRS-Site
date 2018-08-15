
carouselDelay = 7000;
carouselItemCount = 4;
carouselCurrentIndex = 0;
carouselHeroTextIDPrefix = "hero_text_";
carouselHeroPhotoIDPrefix = "hero_photo_";
carouselHeroButtonIDPrefix = "carousel_hero_button_";
carouselProgressIDPrefix = "carousel_progress_";
var carouselTimer;
					
function clickCarouselItem(index) {
	selectCarouselItem(index);
	disableCarousel();
}
function selectCarouselItem(index) {
	carouselCurrentIndex = index;
	for (i=0; i<carouselItemCount; i++) {
		if (i != 0) {
			document.getElementById(carouselHeroPhotoIDPrefix + i).style.opacity = (i == index ? 1.0 : 0.0);
		}
		if (i == index) {
			document.getElementById(carouselHeroTextIDPrefix + i).style.opacity = 1.0;
			document.getElementById(carouselHeroButtonIDPrefix + i).style.opacity = 1.0;
			document.getElementById(carouselProgressIDPrefix + i).classList.add("selected");
		} else {
			document.getElementById(carouselHeroTextIDPrefix + i).style.opacity = 0.0;
			document.getElementById(carouselHeroButtonIDPrefix + i).style.opacity = 0.0;
			document.getElementById(carouselProgressIDPrefix + i).classList.remove("selected");
		}
	}		
}
function enableCarousel() {
	carouselTimer = setInterval(() => {
		carouselCurrentIndex++;
		if (carouselCurrentIndex >= carouselItemCount) {
			carouselCurrentIndex = 0;
		}
		selectCarouselItem(carouselCurrentIndex);
	}, carouselDelay);
}
function disableCarousel() {
	clearInterval(carouselTimer);
}
enableCarousel();
