const d3 = require('d3v4');
const textData = require('./data/text.json');

// On every scroll event, check which element is on screen
window.onscroll = function() {
    var chapters = textData.paragraphs;
    for (var i = 0; i < chapters.length; i++) {
        var chapter = chapters[i];
        var chapterId = chapter.id;
        if (isElementOnScreen(chapterId)) {
            setActiveChapter(chapter);
            break;
        }
    }
};

var activeChapterId = 'p01';
function setActiveChapter(chapter) {
    if (chapter.id === activeChapterId) return;

    console.log(chapter);
    d3.select('#chart').selectAll('g')
      .transition()
      .duration(500)
      .style('opacity', 0.2)
    if (chapter.cat_1) {
      d3.selectAll('.' + chapter.cat_1)
        .transition()
        .duration(500)
        .style('opacity', 1)
    }
    activeChapterId = chapter.id;
}

function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < (window.innerHeight / 1) && bounds.bottom > 0;
}
