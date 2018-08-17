const d3 = require('d3v4');
const slides = require('./slides').slides;
const slidesConfigs = require('./slides_configs').configs;

// On every scroll event, check which element is on screen
window.onscroll = function() {
  triggerSlides(false)
};

export function triggerSlides(reset) {
  reset ? activeSlideId = undefined : false
  var slideIds = Object.keys(slides);
  for (var i = 0; i < slideIds.length; i++) {
      var slideId = slideIds[i];
      if (isElementOnScreen(slideId)) {
          setActiveSlide(slideId);
          break;
      }
  }
}

let activeSlideId = 's01';
function setActiveSlide(slideId) {
    if (slideId === activeSlideId) return;

    let slide = slides[slideId]

    slide.animation ? slide.animation() : false

    activeSlideId = slideId;
}

function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < (window.innerHeight / 1) && bounds.bottom > 0;
}
