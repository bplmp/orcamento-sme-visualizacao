import './style/main.css'

const slides = require('./slides');
const data = require('./data/budget.json');

const scroll = require('./scroll');
const treemap = require('./treemap');

function isMobile() {
   if(window.devicePixelRatio > 1) {
     return true;
   } else {
     return false;
   }
}

window.onload = function() {
  init()
};

function init() {
  treemap.create("chart", data)
  slides.setSlideText()
  // trigger slides to begin
  scroll.triggerSlides(true)
}

window.addEventListener("resize", init);
