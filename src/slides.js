const d3 = require('d3v4');
const slidesConfigs = require('./slides_configs').configs;
const textData = require('./data/text.json');
const categoriesData = require('./data/categories.json');
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
  .style('opacity', 0.7)
}

function fadeAllOut() {
  d3.select('#chart').selectAll('g')
  .transition()
  .duration(slidesConfigs.duration)
  .style('opacity', 0.2)
}

function fadeGroup(categories, opacity) {
  categories.forEach(function (category) {
    d3.selectAll('#g-' + category)
    .transition()
    .duration(slidesConfigs.duration)
    .style('opacity', opacity)
  })
}

function defaultAnimation(slide) {
  fadeAllOut()
  if (slide.cat_1) {
    d3.selectAll('.' + slide.cat_1)
    .transition()
    .duration(slidesConfigs.duration)
    .style('opacity', 0.7)
  }
  if (slide.cat_2) {
    fadeGroup(slide.cat_2, 1)
  }
}

export let slides = {
  "s01": {
    "cat_1": undefined,
    "cat_2": undefined,
    "animation": function () {
      d3.selectAll('g')
        .transition()
        .duration(slidesConfigs.duration)
        .style('opacity', 0)
    },
  },
  "s02": {
    "cat_1": undefined,
    "cat_2": undefined,
  },
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
