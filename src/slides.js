const d3 = require('d3v4');
const slidesConfigs = require('./slides_configs').configs;
const textData = require('./data/text.json');
const categoriesData = require('./data/categories.json');

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
    "cat_2": ["orc-pessoal-estagios", "orc-pessoal-outros"],
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
      "orc-funcionamento_unidades-manutencao",
      "orc-funcionamento_unidades-aluguel_imoveis",
    ],
  },
  "s05": {
    "cat_1": undefined,
    "cat_2": undefined,
  },
  "s05_01": {
    "cat_1": "orc-parcerias",
    "cat_2": undefined,
  },
  "s05_02": {
    "cat_1": "orc-parcerias",
    "cat_2": ["orc-parcerias-creches"],
  },
  "s05_03": {
    "cat_1": "orc-parcerias",
    "cat_2": ["orc-parcerias-ed_especial"],
  },
  "s05_04": {
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
    "cat_1": "orc-uniforme_materiais",
    "cat_2": undefined,
  },
  "s07_01": {
    "cat_1": "orc-uniforme_materiais",
    "cat_2": ["orc-uniforme_materiais-uniforme"],
  },
  "s07_02": {
    "cat_1": "orc-uniforme_materiais",
    "cat_2": ["orc-uniforme_materiais-materiais"],
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
