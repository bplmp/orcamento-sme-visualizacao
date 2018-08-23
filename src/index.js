const numeral = require('numeral');
numeral.register('locale', 'br', {
    delimiters: {
        thousands: '.',
        decimal: ','
    },
    abbreviations: {
        thousand: 'mil',
        million: 'mi',
        billion: 'bi',
        trillion: 'tri'
    },
    currency: {
        symbol: 'R$'
    }
});
numeral.locale('br');
numeral.defaultFormat('0,0.00');

import './style/main.css'

const slides = require('./slides').slides;
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
  setSlideText()
  // trigger slides to begin
  scroll.triggerSlides(true)
}

window.addEventListener("resize", init);

function setSlideText() {
  let textParagraphs = [];
  Object.keys(slides).forEach(function(key, index) {
    let slide = slides[key]
    let text = slide.text
    let id = key
    let slideCategories = slide.cat_2
    let slideValues = []
    if (slideCategories) {
      slideCategories.forEach(function (cat) {
        let slideRect = document.getElementById(cat)
        let slideValue = slideRect ? slideValues.push(parseFloat(slideRect.dataset.value)) : false
      })
    }
    let totalValue = slideValues.reduce((a, b) => a + b, 0)
    totalValue = numeral(totalValue / 1000000).format()
    let valueHtml = slideValues.length ? `<p>${totalValue} milhões</p>` : ''
    // alternative: display all values
    // if (slideCategories) {
    //   slideCategories.forEach(function (cat) {
    //     let slideRect = document.getElementById(cat)
    //     let slideValue = slideRect ? numeral(parseFloat(slideRect.dataset.value) / 100000).format() : false
    //     slideValues.push(slideValue)
    //   })
    // }
    // let valueHtml = slideValues.length ? `<p>${slideValues.join(',&nbsp;&nbsp;')} milhões</p>` : ''
    // let categoryText = slide.cat_1_text ? `<p class="text-category">${slide.cat_1_text}</p>` : ''
    // let html = `<div class="text-paragraph" id="${id}">${categoryText}<h1>${text}</h1>${valueHtml}</div>`
    let html = `<div class="text-paragraph" id="${id}"><h1>${text}</h1>${valueHtml}</div>`
    textParagraphs.push(html)
  });

  let textDiv = document.querySelector('#text')
  textDiv.innerHTML = `${textParagraphs.join('')}`
}
