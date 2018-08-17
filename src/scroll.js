const d3 = require('d3v4');
const slides = require('./slides').slides;

let activeSlideId = 's01';
export const triggerSlide = function (slideId) {
    if (slideId === activeSlideId) return;

    let slide = slides[slideId]
    // console.log(slide);
    slide.animation ? slide.animation() : false

    activeSlideId = slideId;
}
