import './style/main.css'

const slides = require('./slides');
const dataSME = require('./data/budget.json');
const dataPMSP = require('./data/pmsp_budget.json');

const scroll = require('./scroll');
const treemap = require('./treemap');
const menu = require('./menu');

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

export function init() {
  treemap.create("chart-sme", dataSME, true)
  treemap.create("chart-pmsp", dataPMSP, false)
  slides.setSlideText()
  // trigger slides to begin
  scroll.triggerSlides(true)
}

window.addEventListener("resize", function () {
  // HACK:
  slides.slides['i04'].prevWidth = undefined
  slides.slides['i04'].prevHeight = undefined

  init()
});
