const d3 = require('d3v4');
const slidesConfigs = require('./slides_configs').configs;
const textData = require('./data/text.json');
const categoriesData = require('./data/categories.json');
const itemsData = require('./data/items.json');
const quantititesData = require('./data/quant.json');

const numeral = require('numeral');
numeral.register('locale', 'br', {
    delimiters: {
        thousands: '.',
        decimal: ','
    },
    abbreviations: {
        thousand: 'mil',
        million: ' milhões',
        billion: ' bilhões',
        trillion: ' trilhões'
    },
    currency: {
        symbol: 'R$'
    }
});
numeral.locale('br');
numeral.defaultFormat('0,0.00');

function fadeIn(selector) {
  d3.selectAll(selector)
  .transition()
  .duration(slidesConfigs.duration)
  .style('opacity', slidesConfigs.opacityMed)
}

function fadeAllOut() {
  d3.select('.treemap').selectAll('g')
  .transition()
  .duration(slidesConfigs.duration)
  .style('opacity', slidesConfigs.opacityLow)

  d3.select('.treemap').selectAll('g').selectAll('rect')
  .transition()
  .duration(slidesConfigs.duration)
  // .attr('stroke', '#fff')
  // .attr('stroke-width', '0')
  .attr('data-stroke', '')
}

function fadeGroup(selector, categories, opacity) {
  categories.forEach(function (category) {
    d3.selectAll(selector + category)
    .transition()
    .duration(slidesConfigs.duration)
    .style('opacity', opacity)

    d3.selectAll(selector + category)
    .raise()

    d3.selectAll(selector + category).select('rect')
    .transition()
    .duration(slidesConfigs.duration)
    // .attr('stroke', '#333')
    // .attr('stroke-width', '3.5')
    .attr('data-stroke', 'outlined')

  })
}

function defaultAnimation(slide) {
  fadeAllOut()
  if (slide.cat_1) {
    // fadeGroup('.', [slide.cat_1], slidesConfigs.opacityMed)
    fadeIn('.' + slide.cat_1, slidesConfigs.opacityMed)
  }
  if (slide.cat_2) {
    fadeGroup('#g-', slide.cat_2, slidesConfigs.opacityHigh)
  }
}

export let slides = {
  "i01": {
    "cat_1": undefined,
    "cat_2": undefined,
    "animation": function () {
      d3.selectAll('g')
        .transition()
        .duration(slidesConfigs.duration)
        .style('opacity', slidesConfigs.opacityOff)
    },
  },
  "i02": {
    "cat_2": undefined,
    "cat_2": undefined,
    "animation": function () {
      d3.select('#chart-pmsp').selectAll('g')
        .transition()
        .duration(slidesConfigs.duration)
        .style('opacity', slidesConfigs.opacityLow)
    },
  },
  "i03": {
    "cat_1": "pmsp-SME-edu-sme",
    "cat_2": undefined,
    "animation": function () {
      d3.select('#chart-pmsp').selectAll('g')
        .transition()
        .duration(slidesConfigs.duration)
        .style('opacity', slidesConfigs.opacityLow)

      d3.select('#g-pmsp-SME-edu-sme')
      .transition()
      .duration(slidesConfigs.duration)
      .style('opacity', slidesConfigs.opacityMed)

      if (slides['i04'].prevWidth && d3.select('#pmsp-SME-edu-sme').node().getBoundingClientRect().width !== slides['i04'].prevWidth) {
        // return to previous
        d3.select('#pmsp-SME-edu-sme')
        .transition()
        .duration(slidesConfigs.duration)
        .attrTween("height", function() {
          return d3.interpolateNumber(d3.select(this).attr("height"), slides['i04'].prevHeight);
        })
        .attrTween("width", function() {
          return d3.interpolateNumber(d3.select(this).attr("height"), slides['i04'].prevWidth);
        });
      }
    }
  },
  "i03_01": {
    "cat_1": "pmsp-SME-edu-sme",
    "cat_2": [
      "pmsp-SMT-edu-outros",
      "pmsp-EGM-edu-outros",
      "pmsp-FUNDIP-edu-outros",
      "pmsp-SMPIR-edu-outros",
      "pmsp-FPETC-edu-outros",
      "pmsp-SMADS-edu-outros",
      "pmsp-SMTE-edu-outros",
      "pmsp-SMIT-edu-outros",
    ],
    "animation": function () {
      d3.select('#chart-pmsp').selectAll('g')
        .transition()
        .duration(slidesConfigs.duration)
        .style('opacity', slidesConfigs.opacityLow)

      d3.select('#g-pmsp-SME-edu-sme')
      .transition()
      .duration(slidesConfigs.duration)
      .style('opacity', slidesConfigs.opacityMed)

      d3.selectAll('.edu-outros').each(function (rect) {
        d3.select(this.parentNode)
        .transition()
        .duration(slidesConfigs.duration)
        .style('opacity', slidesConfigs.opacityMedLow)
        // .attr('fill', 'rgb(0, 0, 0)')
      })

      if (slides['i04'].prevWidth && d3.select('#pmsp-SME-edu-sme').node().getBoundingClientRect().width !== slides['i04'].prevWidth) {
        // return to previous
        d3.select('#pmsp-SME-edu-sme')
        .transition()
        .duration(slidesConfigs.duration)
        .attrTween("height", function() {
          return d3.interpolateNumber(d3.select(this).attr("height"), slides['i04'].prevHeight);
        })
        .attrTween("width", function() {
          return d3.interpolateNumber(d3.select(this).attr("height"), slides['i04'].prevWidth);
        });
      }
    }
  },
  "i04": {
    "cat_2": undefined,
    "cat_2": undefined,
    "animation": function () {
      // store previous size for rollback
      let svgSME = d3.select('#pmsp-SME-edu-sme').node();
      let svgSMEHeight = svgSME.getBoundingClientRect().height;
      let svgSMEWidth = svgSME.getBoundingClientRect().width;
      if (!slides['i04'].prevWidth) {
        slides['i04'].prevHeight = svgSMEHeight
        slides['i04'].prevWidth = svgSMEWidth
      }
      console.log(slides['i04'].prevHeight);

      let svg = d3.select('#chart-pmsp').node();
      let svgHeight = svg.getBoundingClientRect().height;
      let svgWidth = svg.getBoundingClientRect().width;

      // turn other rectangles off
      d3.selectAll('g')
        .transition()
        .duration(slidesConfigs.duration)
        .style('opacity', slidesConfigs.opacityOff)
      d3.select('#g-pmsp-SME-edu-sme')
        .transition()
        .duration(slidesConfigs.duration)
        .style('opacity', slidesConfigs.opacityMed)

      // make sme full screen
      d3.select('#pmsp-SME-edu-sme')
      .transition()
      .duration(slidesConfigs.duration)
      .attrTween("height", function() {
        return d3.interpolateNumber(d3.select(this).attr("height"), svgHeight);
      })
      .attrTween("width", function() {
        return d3.interpolateNumber(d3.select(this).attr("height"), svgWidth);
      });
    }
  },
  "s01": {
    "cat_1": undefined,
    "cat_2": undefined,
    "animation": function () {
      d3.select('#chart-pmsp').selectAll('g')
        .transition()
        .duration(slidesConfigs.duration)
        .style('opacity', slidesConfigs.opacityOff)
      d3.select('#chart-sme').selectAll('g')
        .transition()
        .duration(slidesConfigs.duration)
        .style('opacity', slidesConfigs.opacityLow)
      setTimeout(function() {
      }, slidesConfigs.duration);
    },
  },
  // "s02": {
  //   "cat_1": undefined,
  //   "cat_2": undefined,
  // },
  "s03": {
    "cat_1": "orc-pessoal",
    "cat_2": undefined,
  },
  "s03_01": {
    "cat_1": "orc-pessoal",
    "cat_2": ["orc-pessoal-docentes"],
  },
  "s03_02": {
    "cat_1": "orc-pessoal",
    "cat_2": ["orc-pessoal-gestores"],
  },
  "s03_03": {
    "cat_1": "orc-pessoal",
    "cat_2": ["orc-pessoal-estagios", "orc-pessoal-outros", "orc-pessoal-adiantamento"],
  },
  "s04": {
    "cat_1": "orc-funcionamento_unidades",
    "cat_2": undefined,
  },
  "s04_01": {
    "cat_1": "orc-funcionamento_unidades",
    "cat_2": ["orc-funcionamento_unidades-limpeza"],
  },
  "s04_02": {
    "cat_1": "orc-funcionamento_unidades",
    "cat_2": ["orc-funcionamento_unidades-vigilancia"],
  },
  "s04_03": {
    "cat_1": "orc-funcionamento_unidades",
    "cat_2": [
      "orc-funcionamento_unidades-agua_esgoto",
      "orc-funcionamento_unidades-eletricidade",
      "orc-funcionamento_unidades-telefone",
    ],
  },
  "s04_04": {
    "cat_1": "orc-funcionamento_unidades",
    "cat_2": [
      "orc-funcionamento_unidades-obras_reformas",
    ],
  },
  "s04_05": {
    "cat_1": "orc-funcionamento_unidades",
    "cat_2": [
      "orc-funcionamento_unidades-manutencao",
      "orc-funcionamento_unidades-aluguel_imoveis",
    ],
  },
  "s04_06": {
    "cat_1": "orc-funcionamento_unidades",
    "cat_2": [
      "orc-funcionamento_unidades-ceu_outros",
    ],
  },
  "s04_07": {
    "cat_1": "orc-funcionamento_unidades",
    "cat_2": [
      "orc-funcionamento_unidades-eventos",
    ],
  },
  "s05": {
    "cat_1": "orc-parcerias",
    "cat_2": undefined,
  },
  "s05_01": {
    "cat_1": "orc-parcerias",
    "cat_2": ["orc-parcerias-creches"],
  },
  "s05_02": {
    "cat_1": "orc-parcerias",
    "cat_2": ["orc-parcerias-ed_especial"],
  },
  "s05_03": {
    "cat_1": "orc-parcerias",
    "cat_2": [
      "orc-parcerias-eja",
      "orc-parcerias-outros"
    ],
  },
  "s06": {
    "cat_1": "orc-alimentacao",
    "cat_2": undefined,
  },
  "s06_01": {
    "cat_1": "orc-alimentacao",
    "cat_2": ["orc-alimentacao-refeicoes"],
  },
  "s06_02": {
    "cat_1": "orc-alimentacao",
    "cat_2": ["orc-alimentacao-insumos"],
  },
  "s06_03": {
    "cat_1": "orc-alimentacao",
    "cat_2": ["orc-alimentacao-prep_dist"],
  },
  "s06_04": {
    "cat_1": "orc-alimentacao",
    "cat_2": ["orc-alimentacao-leve_leite"],
  },
  "s06_05": {
    "cat_1": "orc-alimentacao",
    "cat_2": ["orc-alimentacao-pnae"],
  },
  "s07": {
    "cat_1": "orc-transporte",
    "cat_2": undefined,
  },
  "s07_01": {
    "cat_1": "orc-transporte",
    "cat_2": ["orc-transporte-teg"],
  },
  "s07_02": {
    "cat_1": "orc-transporte",
    "cat_2": ["orc-transporte-veiculos"],
  },
  "s08": {
    "cat_1": "orc-uniforme_materiais",
    "cat_2": undefined,
  },
  "s08_01": {
    "cat_1": "orc-uniforme_materiais",
    "cat_2": ["orc-uniforme_materiais-uniforme"],
  },
  "s08_02": {
    "cat_1": "orc-uniforme_materiais",
    "cat_2": ["orc-uniforme_materiais-materiais"],
  },
  "s09": {
    "cat_1": "orc-transferencias",
    "cat_2": undefined,
  },
  "s09_01": {
    "cat_1": "orc-transferencias",
    "cat_2": ["orc-transferencias-ptrf"],
  },
  "s10": {
    "cat_1": "orc-ti",
    "cat_2": undefined,
  },
  "s10_01": {
    "cat_1": "orc-ti",
    "cat_2": ["orc-ti-compra_notebooks"],
  },
  "s10_02": {
    "cat_1": "orc-ti",
    "cat_2": ["orc-ti-manutencao_software_sistemas", "orc-ti-outros"],
  },
  "s10_03": {
    "cat_1": "orc-ti",
    "cat_2": ["orc-ti-internet"],
  },
  "s10_04": {
    "cat_1": "orc-ti",
    "cat_2": ["orc-ti-manutencao_equip_ti"],
  },
  "explore": {
    "cat_1": undefined,
    "cat_2": undefined,
  }
}

Object.keys(slides).forEach(function(key, index) {
  let slide = slides[key]
  // set default animation for those without
  slide.animation ? true : slide.animation = function () { defaultAnimation(slide); }
  // set text from json file
  let slideText = textData.paragraphs[key]
  slideText ? slide.text = slideText.text : slide.text = '&nbsp;'
  let slideMainCategoryText = categoriesData[slide.cat_1]
  slideMainCategoryText ? slide.cat_1_text = slideMainCategoryText.text : false
});

export function setSlideText() {
  let textParagraphs = [];
  Object.keys(slides).forEach(function(key, index) {
    let slide = slides[key]
    let text = slide.text
    let id = key
    let slideMainCategory = slide.cat_1
    let slideCategories = slide.cat_2
    let slideValues = []
    if (slideCategories) {
      slideCategories.forEach(function (cat) {
        let slideRect = document.getElementById(cat)
        let slideValue = slideRect ? slideValues.push(parseFloat(slideRect.dataset.value)) : false
      })
    } else if (slideMainCategory) {
      let slideRects = document.querySelectorAll('[id^="' + slideMainCategory + '"]')
      slideRects.forEach(function (rect) {
        let slideValue = rect ? slideValues.push(parseFloat(rect.dataset.value)) : false
      })
    }
    let totalValue = slideValues.reduce((a, b) => a + b, 0)

    let students = quantititesData.children.find(x => x.name === 'alunos').size
    let perStudentValue = totalValue / students

    totalValue = numeral(totalValue).format('$ 0.00 a')
    perStudentValue = numeral(perStudentValue).format()

    let valueHtml = slideValues.length ? `<p>${totalValue}</p>` : ''
    // let valueHtml = slideValues.length ? `<p>${totalValue}</p><p>${perStudentValue} por aluno</p>` : ''

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

const interactiveText = document.getElementById('interactive-text')
export function treemapClick(d) {
  // console.log(d);
  fadeAllOut();
  d3.select(this)
    .transition()
    .duration(slidesConfigs.duration)
    .style('opacity', slidesConfigs.opacityMed)

  let value = numeral(d.value).format('$ 0.00 a')
  let category = categoriesData[d.data.parent]
  let text = itemsData[d.data.id]

  let html = `<p class="text-category">${category ? category.text : ''}</p>
  <h1>${text ? text.text : ''}</h1>
  <p>${value}</p>`
  interactiveText.innerHTML = html;

  // HACK: helper
  // let ids = {}
  // d3.select('#chart-sme').selectAll('rect').each(function (d) {
  //   let el = d3.select(this).data
  //   ids[d.data.id] = {"text": ""};
  // })
  // console.log(JSON.stringify(ids));
}
