webpackJsonp([0],{"+ZWa":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),t.d(a,"configs",function(){return n});var n={duration:500,durationFast:function(){return this.duration/2},durationSlow:function(){return 2*this.duration},opacityHigh:1,opacityMed:.8,opacityMedLow:.5,opacityLow:.2,opacityOff:0}},0:function(e,a,t){t("+prg"),e.exports=t("lVK7")},"2v+m":function(e,a,t){"use strict";var n,o;Object.defineProperty(a,"__esModule",{value:!0}),t.d(a,"slides",function(){return _}),a.setSlideText=function(){var e=[];Object.keys(_).forEach(function(a,t){var n=_[a],o=n.text,i=a,r=n.cat_1,s=n.cat_2,c=[];if(s)s.forEach(function(e){var a=document.getElementById(e);!!a&&c.push(parseFloat(a.dataset.value))});else if(r){var d=document.querySelectorAll('[id^="'+r+'"]');d.forEach(function(e){!!e&&c.push(parseFloat(e.dataset.value))})}var l=c.reduce(function(e,a){return e+a},0),p=m.children.find(function(e){return"alunos"===e.name}).size,f=l/p;l=u(l).format("$ 0.00 a"),f=u(f).format();var h=c.length?"<p>"+l+"</p>":"",g='<div class="text-paragraph" id="'+i+'"><h1>'+o+"</h1>"+h+"</div>";e.push(g)}),document.querySelector("#text").innerHTML=""+e.join("")},a.treemapClick=function(e){l(),i.select(this).transition().duration(r.duration).style("opacity",r.opacityMed);var a=u(e.value).format("$ 0.00 a"),t=c[e.data.parent],n=d[e.data.id],o='<p class="text-category">'+(t?t.text:"")+"</p>\n  <h1>"+(n?n.text:"")+"</h1>\n  <p>"+a+"</p>";f.innerHTML=o};var i=t("q43I"),r=t("+ZWa").configs,s=t("7fyq"),c=t("K5PZ"),d=t("IcKc"),m=t("GSHV"),u=t("ViqS");function l(){i.select(".treemap").selectAll("g").transition().duration(r.duration).style("opacity",r.opacityLow),i.select(".treemap").selectAll("g").selectAll("rect").transition().duration(r.duration).attr("stroke","#fff").attr("stroke-width","0")}function p(e){var a;l(),e.cat_1&&(a="."+e.cat_1,r.opacityMed,i.selectAll(a).transition().duration(r.duration).style("opacity",r.opacityMed)),e.cat_2&&function(e,a,t){a.forEach(function(a){i.selectAll(e+a).transition().duration(r.duration).style("opacity",t),i.selectAll(e+a).raise(),i.selectAll(e+a).select("rect").transition().duration(r.duration).attr("stroke","#fff").attr("stroke-width","4")})}("#g-",e.cat_2,r.opacityHigh)}u.register("locale","br",{delimiters:{thousands:".",decimal:","},abbreviations:{thousand:"mil",million:" milhões",billion:" bilhões",trillion:" trilhões"},currency:{symbol:"R$"}}),u.locale("br"),u.defaultFormat("0,0.00");var _={i01:{cat_1:void 0,cat_2:void 0,animation:function(){i.selectAll("g").transition().duration(r.duration).style("opacity",r.opacityOff)}},i02:(n={cat_2:void 0},n.cat_2=void 0,n.animation=function(){i.select("#chart-pmsp").selectAll("g").transition().duration(r.duration).style("opacity",r.opacityLow)},n),i03:{cat_1:"pmsp-SME-edu-sme",cat_2:void 0,animation:function(){i.select("#chart-pmsp").selectAll("g").transition().duration(r.duration).style("opacity",r.opacityLow),i.select("#g-pmsp-SME-edu-sme").transition().duration(r.duration).style("opacity",r.opacityMed),_.i04.prevWidth&&i.select("#pmsp-SME-edu-sme").node().getBoundingClientRect().width!==_.i04.prevWidth&&i.select("#pmsp-SME-edu-sme").transition().duration(r.duration).attrTween("height",function(){return i.interpolateNumber(i.select(this).attr("height"),_.i04.prevHeight)}).attrTween("width",function(){return i.interpolateNumber(i.select(this).attr("height"),_.i04.prevWidth)})}},i03_01:{cat_1:"pmsp-SME-edu-sme",cat_2:["pmsp-SMT-edu-outros","pmsp-EGM-edu-outros","pmsp-FUNDIP-edu-outros","pmsp-SMPIR-edu-outros","pmsp-FPETC-edu-outros","pmsp-SMADS-edu-outros","pmsp-SMTE-edu-outros","pmsp-SMIT-edu-outros"],animation:function(){i.select("#chart-pmsp").selectAll("g").transition().duration(r.duration).style("opacity",r.opacityLow),i.select("#g-pmsp-SME-edu-sme").transition().duration(r.duration).style("opacity",r.opacityMed),i.selectAll(".edu-outros").each(function(e){i.select(this.parentNode).transition().duration(r.duration).style("opacity",r.opacityMedLow)}),_.i04.prevWidth&&i.select("#pmsp-SME-edu-sme").node().getBoundingClientRect().width!==_.i04.prevWidth&&i.select("#pmsp-SME-edu-sme").transition().duration(r.duration).attrTween("height",function(){return i.interpolateNumber(i.select(this).attr("height"),_.i04.prevHeight)}).attrTween("width",function(){return i.interpolateNumber(i.select(this).attr("height"),_.i04.prevWidth)})}},i04:(o={cat_2:void 0},o.cat_2=void 0,o.animation=function(){var e=i.select("#pmsp-SME-edu-sme").node(),a=e.getBoundingClientRect().height,t=e.getBoundingClientRect().width;_.i04.prevWidth||(_.i04.prevHeight=a,_.i04.prevWidth=t),console.log(_.i04.prevHeight);var n=i.select("#chart-pmsp").node(),o=n.getBoundingClientRect().height,s=n.getBoundingClientRect().width;i.selectAll("g").transition().duration(r.duration).style("opacity",r.opacityOff),i.select("#g-pmsp-SME-edu-sme").transition().duration(r.duration).style("opacity",r.opacityMed),i.select("#pmsp-SME-edu-sme").transition().duration(r.duration).attrTween("height",function(){return i.interpolateNumber(i.select(this).attr("height"),o)}).attrTween("width",function(){return i.interpolateNumber(i.select(this).attr("height"),s)})},o),s01:{cat_1:void 0,cat_2:void 0,animation:function(){i.select("#chart-pmsp").selectAll("g").transition().duration(r.duration).style("opacity",r.opacityOff),i.select("#chart-sme").selectAll("g").transition().duration(r.duration).style("opacity",r.opacityLow),setTimeout(function(){},r.duration)}},s03:{cat_1:"orc-pessoal",cat_2:void 0},s03_01:{cat_1:"orc-pessoal",cat_2:["orc-pessoal-docentes"]},s03_02:{cat_1:"orc-pessoal",cat_2:["orc-pessoal-gestores"]},s03_03:{cat_1:"orc-pessoal",cat_2:["orc-pessoal-estagios","orc-pessoal-outros","orc-pessoal-adiantamento"]},s04:{cat_1:"orc-funcionamento_unidades",cat_2:void 0},s04_01:{cat_1:"orc-funcionamento_unidades",cat_2:["orc-funcionamento_unidades-limpeza"]},s04_02:{cat_1:"orc-funcionamento_unidades",cat_2:["orc-funcionamento_unidades-vigilancia"]},s04_03:{cat_1:"orc-funcionamento_unidades",cat_2:["orc-funcionamento_unidades-agua_esgoto","orc-funcionamento_unidades-eletricidade","orc-funcionamento_unidades-telefone"]},s04_04:{cat_1:"orc-funcionamento_unidades",cat_2:["orc-funcionamento_unidades-obras_reformas"]},s04_05:{cat_1:"orc-funcionamento_unidades",cat_2:["orc-funcionamento_unidades-manutencao","orc-funcionamento_unidades-aluguel_imoveis"]},s04_06:{cat_1:"orc-funcionamento_unidades",cat_2:["orc-funcionamento_unidades-ceu_outros"]},s04_07:{cat_1:"orc-funcionamento_unidades",cat_2:["orc-funcionamento_unidades-eventos"]},s05:{cat_1:"orc-parcerias",cat_2:void 0},s05_01:{cat_1:"orc-parcerias",cat_2:["orc-parcerias-creches"]},s05_02:{cat_1:"orc-parcerias",cat_2:["orc-parcerias-ed_especial"]},s05_03:{cat_1:"orc-parcerias",cat_2:["orc-parcerias-eja","orc-parcerias-outros"]},s06:{cat_1:"orc-alimentacao",cat_2:void 0},s06_01:{cat_1:"orc-alimentacao",cat_2:["orc-alimentacao-refeicoes"]},s06_02:{cat_1:"orc-alimentacao",cat_2:["orc-alimentacao-insumos"]},s06_03:{cat_1:"orc-alimentacao",cat_2:["orc-alimentacao-prep_dist"]},s06_04:{cat_1:"orc-alimentacao",cat_2:["orc-alimentacao-leve_leite"]},s06_05:{cat_1:"orc-alimentacao",cat_2:["orc-alimentacao-pnae"]},s07:{cat_1:"orc-transporte",cat_2:void 0},s07_01:{cat_1:"orc-transporte",cat_2:["orc-transporte-teg"]},s07_02:{cat_1:"orc-transporte",cat_2:["orc-transporte-veiculos"]},s08:{cat_1:"orc-uniforme_materiais",cat_2:void 0},s08_01:{cat_1:"orc-uniforme_materiais",cat_2:["orc-uniforme_materiais-uniforme"]},s08_02:{cat_1:"orc-uniforme_materiais",cat_2:["orc-uniforme_materiais-materiais"]},s09:{cat_1:"orc-transferencias",cat_2:void 0},s09_01:{cat_1:"orc-transferencias",cat_2:["orc-transferencias-ptrf"]},s10:{cat_1:"orc-ti",cat_2:void 0},s10_01:{cat_1:"orc-ti",cat_2:["orc-ti-compra_notebooks"]},s10_02:{cat_1:"orc-ti",cat_2:["orc-ti-manutencao_software_sistemas","orc-ti-outros"]},s10_03:{cat_1:"orc-ti",cat_2:["orc-ti-internet"]},s10_04:{cat_1:"orc-ti",cat_2:["orc-ti-manutencao_equip_ti"]},explore:{cat_1:void 0,cat_2:void 0}};Object.keys(_).forEach(function(e,a){var t=_[e];t.animation||(t.animation=function(){p(t)});var n=s.paragraphs[e];t.text=n?n.text:"&nbsp;";var o=c[t.cat_1];o&&(t.cat_1_text=o.text)});var f=document.getElementById("interactive-text")},"7fyq":function(e,a){e.exports={paragraphs:{i01:{text:"Imagine que sua tela representa todo o orçamento da Prefeitura de São Paulo, ou seja, todo o dinheiro que ela tem para investir.<br>&darr;"},i02:{text:"Vamos dividir a tela em partes, correspondendo aos gastos de cada um dos Órgãos da Prefeitura."},i03:{text:"Esta parte corresponde ao orçamento da Secretaria de Educação."},i03_01:{text:"Mas também há gastos com Educação em outros órgãos da Prefeitura, como no Bilhete Único para estudantes, aposentadorias de professores e telecentros de ensino."},i04:{text:"Vamos olhar agora só para o orçamento da Secretaria de Educação,"},s01:{text:"e vamos dividir o orçamento da Educação em partes."},s03:{text:"Esta é a parte que corresponde ao gasto com pessoal, mais da metade de todo orçamento."},s03_01:{text:"A maior parte dos gastos com pessoal são salários e benefícios dos professores, coordenadores e diretores."},s03_02:{text:"O restante dos gastos são com gestores,"},s03_03:{text:"estagiários e outros custos."},s04:{text:"Esta outra parte são os gastos com o funcionamento das escolas e de outros prédios da Secretaria."},s04_01:{text:"O maior custo é com limpeza,"},s04_02:{text:"seguido por vigilância,"},s04_03:{text:"água e esgoto, luz, e telefone,"},s04_04:{text:"reformas e construções de novas unidades,"},s04_05:{text:"manutenção e aluguel de imóveis,"},s04_06:{text:"custos de manutenção dos CEUs, como guarda-vidas para as piscinas e operação dos auditórios,"},s04_07:{text:"e eventos como peças e teatro, apresentações nas escolas e oficinas de recreação."},s05:{text:"Além de construir e manter seus próprios prédios, a Secretaria também faz parcerias com outras entidades para prover educação."},s05_01:{text:"Sua maior parte é repassada para os Centros de Educação Infantil, também conhecidos como creches."},s05_02:{text:"Outra parte é investida em educação especial para pessoas com deficiência."},s05_03:{text:"E o restante com programas de alfabetização de jovens e adultos e outras parcerias."},s06:{text:"Um outro grande custo da Secretaria é com a alimentação dos estudantes."},s06_01:{text:"Boa parte é gasto com refeições compradas diretamente de fornecedores."},s06_02:{text:"Mas a Secretaria também compra alimentos para produzir refeições,"},s06_03:{text:"e nesse caso precisa pagar também pelo seu preparo e distribuição."},s06_04:{text:"O restante é gasto com o programa Leve-Leite, que entrega leite de graça para famílias de baixa renda com crianças pequenas,"},s06_05:{text:"e com repasse de verbas do Programa Nacional de Alimentação Escolar (PNAE) diretamente para as escolas."},s07:{text:"Outra parte grande são os custos com transporte."},s07_01:{text:"Sua grande maioria é gasta com o Transporte Escolar Gratuito (TEG), disponível quando a Secretaria não consegue matricular as crianças em até 2 km de distância da escola, ou em outros casos especiais."},s07_02:{text:"O restante é utilizado com aluguel de veículos como ônibus de excursões e carros."},s08:{text:"A Secretaria também tem custos com materiais para os estudantes,"},s08_01:{text:"como uniformes escolares"},s08_02:{text:"e outros materias didáticos."},s09:{text:"A Secretaria repassa uma parte dos seus recursos diretamente para as unidades escolares."},s09_01:{text:"Os repasses são feitos através de Associações de Pais e Mestres (APMs) e servem para descentralizar a administração e ampliar a autonomia das escolas."},s10:{text:"A Educação também tem custos com tecnologia da informação (TI)."},s10_01:{text:"Em 2017, foi feita uma grande compra de notebooks para a Educação."},s10_02:{text:"Os gastos com TI também incluem desenvolvimento, manutenção de softwares e sistemas,"},s10_03:{text:"fornecimento de internet para todas unidades escolares,"},s10_04:{text:"e supporte e assistência técnica para operação da TI."},explore:{text:"Role mais para baixo para explorar uma versão interativa dessa visualização.<br>&darr;"}}}},GSHV:function(e,a){e.exports={name:"quant",children:[{name:"alunos",size:13e5}]}},IcKc:function(e,a){e.exports={"orc-pessoal-docentes":{text:"Docentes"},"orc-pessoal-gestores":{text:"Gestores"},"orc-pessoal-estagios":{text:"Estágios"},"orc-pessoal-adiantamento":{text:"Adiantamentos"},"orc-pessoal-outros":{text:"Outros gastos com pessoal"},"orc-parcerias-creches":{text:"Creches"},"orc-parcerias-ed_especial":{text:"Educação Especial"},"orc-parcerias-eja":{text:"Alfabetização de Jovens e Adultos"},"orc-parcerias-outros":{text:"Outras parcerias"},"orc-funcionamento_unidades-limpeza":{text:"Limpeza"},"orc-funcionamento_unidades-vigilancia":{text:"Vigilância"},"orc-funcionamento_unidades-agua_esgoto":{text:"Água e Esgoto"},"orc-funcionamento_unidades-obras_reformas":{text:"Obras e Reformas"},"orc-funcionamento_unidades-eletricidade":{text:"Eletricidade"},"orc-funcionamento_unidades-ceu_outros":{text:"Outros gastos com CEUs"},"orc-funcionamento_unidades-manutencao":{text:"Manutenção das unidades"},"orc-funcionamento_unidades-aluguel_imoveis":{text:"Aluguel de imóveis"},"orc-funcionamento_unidades-eventos":{text:"Eventos"},"orc-funcionamento_unidades-mobiliario":{text:"Mobiliário"},"orc-funcionamento_unidades-telefone":{text:"Telefone"},"orc-funcionamento_unidades-logistica_transportes":{text:"Logística e Transportes"},"orc-funcionamento_unidades-uniceu":{text:"UniCEU"},"orc-alimentacao-refeicoes":{text:"Refeições prontas"},"orc-alimentacao-insumos":{text:"Insumos para refeições"},"orc-alimentacao-prep_dist":{text:"Preparo e distribuição de alimentos"},"orc-alimentacao-leve_leite":{text:"Leve-Leite"},"orc-alimentacao-pnae":{text:"Programa Nacional de Alimentação Escolar (PNAE)"},"orc-uniforme_materiais-uniforme":{text:"Uniformes"},"orc-uniforme_materiais-materiais":{text:"Materiais didáticos"},"orc-transporte-teg":{text:"Transporte Escolar Gratuito (TEG)"},"orc-transporte-veiculos":{text:"Aluguel de ônibus e veículos"},"orc-ti-compra_notebooks":{text:"Compra de notebooks"},"orc-ti-manutencao_software_sistemas":{text:"Manutenção de softwares e sistemas"},"orc-ti-internet":{text:"Fornecimento de internet"},"orc-ti-outros":{text:"Outros gastos com tecnologia da informação (TI)"},"orc-ti-manutencao_equip_ti":{text:"Manutenção de equipamentos de TI"},"orc-ti-manutencao_impressao":{text:"Manutenção de equipamentos de impressão"},"orc-ti-manutencao":{text:"Outros gastos com manutenção em TI"},"orc-transferencias-ptrf":{text:"Transferências do PTRF diretamente para as escolas"},"orc-pedagogico-mais_educacao":{text:"Programa Mais Educação"},"orc-pedagogico-formacao":{text:"Formação"},"orc-suporte_administrativo-suporte_administrativo_outros":{text:"Suporte administrativo"}}},K5PZ:function(e,a){e.exports={"orc-alimentacao":{text:"Alimentação"},"orc-funcionamento_unidades":{text:"Funcionamento das unidades"},"orc-obras_reformas":{text:"Obras e reformas"},"orc-parcerias":{text:"Parcerias"},"orc-pessoal":{text:"Pessoal"},"orc-ti":{text:"TI"},"orc-transferencias":{text:"Transferências"},"orc-uniforme_materiais":{text:"Materiais"},"orc-transporte":{text:"Transporte"}}},"O/DJ":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.triggerSlides=o;t("q43I");var n=t("2v+m").slides;t("+ZWa").configs;function o(e){e&&(i=void 0);for(var a,t,o,s=Object.keys(n),c=0;c<s.length;c++){var d=s[c];if(a=d,t=void 0,void 0,void 0,t=document.getElementById(a),o=t.getBoundingClientRect(),o.top<window.innerHeight/1&&o.bottom>0){r(d);break}}}window.onscroll=function(){o(!1)};var i="s01";function r(e){if(e!==i){var a=n[e];a.animation&&a.animation(),i=e}}},PS5z:function(e,a){},RdSv:function(e,a){e.exports={name:"orc",children:[{name:"alimentacao",children:[{name:"insumos",size:231123711.86},{name:"leve_leite",size:54456453.89},{name:"pnae",size:19721738},{name:"prep_dist",size:57732278.68},{name:"refeicoes",size:344783132.32}]},{name:"funcionamento_unidades",children:[{name:"agua_esgoto",size:107440314.11},{name:"aluguel_imoveis",size:19519948.28},{name:"ceu_outros",size:26846785.49},{name:"eletricidade",size:50882339.96},{name:"eventos",size:9126208.33},{name:"limpeza",size:424731067.12},{name:"logistica_transportes",size:5532017.47},{name:"manutencao",size:22742817.08},{name:"mobiliario",size:7332216.48},{name:"obras_reformas",size:78704729.13},{name:"telefone",size:6216973.48},{name:"uniceu",size:2870959.07},{name:"vigilancia",size:198547639.19}]},{name:"parcerias",children:[{name:"creches",size:1962607935.7},{name:"ed_especial",size:36601537.99},{name:"eja",size:10942761.36},{name:"outros",size:3635450.38}]},{name:"pedagogico",children:[{name:"formacao",size:3013278.69},{name:"mais_educacao",size:5499647.24}]},{name:"pessoal",children:[{name:"adiantamento",size:12202874},{name:"docentes",size:5872021815.26},{name:"estagios",size:36592521.92},{name:"gestores",size:343404844.62},{name:"outros",size:2179419.19}]},{name:"suporte_administrativo",children:[{name:"suporte_administrativo_outros",size:8288256.7}]},{name:"ti",children:[{name:"compra_notebooks",size:40021740},{name:"internet",size:13518565.06},{name:"manutencao",size:1123596.59},{name:"manutencao_equip_ti",size:6459787.91},{name:"manutencao_impressao",size:1869473.33},{name:"manutencao_software_sistemas",size:15273364.41},{name:"outros",size:7792897.88}]},{name:"transferencias",children:[{name:"ptrf",size:41846569.91}]},{name:"transporte",children:[{name:"teg",size:211016396.95},{name:"veiculos",size:17627189.21}]},{name:"uniforme_materiais",children:[{name:"materiais",size:55646292.47},{name:"uniforme",size:203651680.76}]}]}},l6KM:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.create=function(e,a,t){var i=document.getElementById(e);i.innerHTML="";var r=n.select(i).append("svg"),s=i.clientWidth,c=i.clientHeight,d=n.scaleOrdinal(n.schemeCategory10.map(function(e){return n.interpolateRgb(e,"#fff")(.2)})),m=(n.format(",d"),n.treemap().tile(n.treemapResquarify).size([s,c]).round(!0).paddingInner(1)),u=n.hierarchy(a).eachBefore(function(e){e.data.id=(e.parent?e.parent.data.id+"-":"")+e.data.name}).eachBefore(function(e){e.data.parent=e.parent?e.parent.data.id:""}).sum(p).sort(function(e,a){return a.height-e.height||a.value-e.value});m(u);var l=r.selectAll("g").data(u.leaves()).enter().append("g").attr("id",function(e){return"g-"+e.data.id}).attr("class",function(e){return e.data.parent}).style("opacity",0).attr("transform",function(e){return"translate("+e.x0+","+e.y0+")"});l.append("rect").attr("id",function(e){return e.data.id}).attr("class",function(e){return e.data.name}).attr("data-value",function(e){return e.value}).attr("width",function(e){return e.x1-e.x0}).attr("height",function(e){return e.y1-e.y0}).attr("stroke","#fff").attr("stroke-width",0).attr("fill",function(a){return"chart-pmsp"===e?"#333":d(a.parent.data.id)}),t&&l.on("click",o);function p(e){return e.size}l.append("clipPath").attr("id",function(e){return"clip-"+e.data.id}).append("use").attr("xlink:href",function(e){return"#"+e.data.id}),n.selectAll("input").data([p,function(e){return e.children?0:1}],function(e){return e?e.name:this.value}).on("change",function(e){timeout.stop(),m(u.sum(e)),l.transition().duration(750).attr("transform",function(e){return"translate("+e.x0+","+e.y0+")"}).select("rect").attr("width",function(e){return e.x1-e.x0}).attr("height",function(e){return e.y1-e.y0})})};var n=t("q43I"),o=t("2v+m").treemapClick},lVK7:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.init=d;var n=t("PS5z"),o=(t.n(n),t("2v+m")),i=t("RdSv"),r=t("r8Ya"),s=t("O/DJ"),c=t("l6KM");function d(){c.create("chart-sme",i,!0),c.create("chart-pmsp",r,!1),o.setSlideText(),s.triggerSlides(!0)}window.onload=function(){d()},window.addEventListener("resize",function(){o.slides.i04.prevWidth=void 0,o.slides.i04.prevHeight=void 0,d()})},r8Ya:function(e,a){e.exports={name:"pmsp",children:[{name:"AHM",children:[{name:"edu-nao",size:1357268348.49}]},{name:"AMLURB",children:[{name:"edu-nao",size:2192272622.52}]},{name:"CGM",children:[{name:"edu-nao",size:18267741.25}]},{name:"CMSP",children:[{name:"edu-nao",size:505524610.54}]},{name:"COHAB",children:[{name:"edu-nao",size:100571137.57}]},{name:"EGM",children:[{name:"edu-nao",size:6937088070.19},{name:"edu-outros",size:421833922.16}]},{name:"FECAM",children:[{name:"edu-nao",size:530722.5}]},{name:"FEMA",children:[{name:"edu-nao",size:981028.1}]},{name:"FEPAC",children:[{name:"edu-nao",size:3069754.95}]},{name:"FMAS",children:[{name:"edu-nao",size:1069651834.23}]},{name:"FMDC",children:[{name:"edu-nao",size:0}]},{name:"FMDT",children:[{name:"edu-nao",size:1000871504.32}]},{name:"FMESP",children:[{name:"edu-nao",size:0}]},{name:"FMH",children:[{name:"edu-nao",size:47215325.44}]},{name:"FMID",children:[{name:"edu-nao",size:0}]},{name:"FMP",children:[{name:"edu-nao",size:0}]},{name:"FMS/SMS",children:[{name:"edu-nao",size:8362000699.65}]},{name:"FMSAI",children:[{name:"edu-nao",size:338023064.11}]},{name:"FPETC",children:[{name:"edu-outros",size:14739047.38}]},{name:"FTCMSP",children:[{name:"edu-nao",size:1704901.81}]},{name:"FTM",children:[{name:"edu-nao",size:127879732.61}]},{name:"FUMCAD",children:[{name:"edu-nao",size:52492538.2}]},{name:"FUNCAP",children:[{name:"edu-nao",size:617488.44}]},{name:"FUNDIP",children:[{name:"edu-nao",size:284281103.47},{name:"edu-outros",size:0}]},{name:"FUNDURB",children:[{name:"edu-nao",size:84727165.6}]},{name:"FUNPATRI",children:[{name:"edu-nao",size:0}]},{name:"FUTUR",children:[{name:"edu-nao",size:0}]},{name:"HSPM",children:[{name:"edu-nao",size:275269814.99}]},{name:"IPREM",children:[{name:"edu-nao",size:8027176127.08}]},{name:"PGM",children:[{name:"edu-nao",size:212008580.63}]},{name:"PMSP-SMRI",children:[{name:"edu-nao",size:3033348.35}]},{name:"PR-AD",children:[{name:"edu-nao",size:22174818.91}]},{name:"PR-AF",children:[{name:"edu-nao",size:26025016.87}]},{name:"PR-BT",children:[{name:"edu-nao",size:36557020.62}]},{name:"PR-CL",children:[{name:"edu-nao",size:40041604.38}]},{name:"PR-CS",children:[{name:"edu-nao",size:29060746.56}]},{name:"PR-CT",children:[{name:"edu-nao",size:20052690.54}]},{name:"PR-CV",children:[{name:"edu-nao",size:17287420.19}]},{name:"PR-EM",children:[{name:"edu-nao",size:18941611.32}]},{name:"PR-FB",children:[{name:"edu-nao",size:28867917.51}]},{name:"PR-G",children:[{name:"edu-nao",size:24174501.16}]},{name:"PR-IP",children:[{name:"edu-nao",size:34609180.47}]},{name:"PR-IQ",children:[{name:"edu-nao",size:30564800.26}]},{name:"PR-IT",children:[{name:"edu-nao",size:23350790.55}]},{name:"PR-JA",children:[{name:"edu-nao",size:23979619}]},{name:"PR-JT",children:[{name:"edu-nao",size:21411517.29}]},{name:"PR-LA",children:[{name:"edu-nao",size:26950095.38}]},{name:"PR-MB",children:[{name:"edu-nao",size:27572947.77}]},{name:"PR-MG",children:[{name:"edu-nao",size:21587848.77}]},{name:"PR-MO",children:[{name:"edu-nao",size:31652422.1}]},{name:"PR-MP",children:[{name:"edu-nao",size:32979504.97}]},{name:"PR-PA",children:[{name:"edu-nao",size:18901490.23}]},{name:"PR-PE",children:[{name:"edu-nao",size:35014558.25}]},{name:"PR-PI",children:[{name:"edu-nao",size:32364263.41}]},{name:"PR-PJ",children:[{name:"edu-nao",size:22404716.25}]},{name:"PR-PR",children:[{name:"edu-nao",size:19975445.14}]},{name:"PR-SA",children:[{name:"edu-nao",size:30593025.35}]},{name:"PR-SB",children:[{name:"edu-nao",size:16535562.4}]},{name:"PR-SE",children:[{name:"edu-nao",size:55740863.85}]},{name:"PR-SM",children:[{name:"edu-nao",size:36918964.72}]},{name:"PR-ST",children:[{name:"edu-nao",size:26318014.84}]},{name:"PR-VM",children:[{name:"edu-nao",size:29104565.63}]},{name:"PR-VP",children:[{name:"edu-nao",size:22058642.8}]},{name:"SEHAB",children:[{name:"edu-nao",size:190308435.91}]},{name:"SEL",children:[{name:"edu-nao",size:11659519.84}]},{name:"SEME",children:[{name:"edu-nao",size:158403594.61}]},{name:"SF",children:[{name:"edu-nao",size:351331328.08}]},{name:"SFMSP",children:[{name:"edu-nao",size:118186652.66}]},{name:"SGM",children:[{name:"edu-nao",size:257200322.3}]},{name:"SMADS",children:[{name:"edu-nao",size:106293101.6},{name:"edu-outros",size:7725959.97}]},{name:"SMC",children:[{name:"edu-nao",size:293647398.52}]},{name:"SMCIS",children:[{name:"edu-nao",size:6112140.03}]},{name:"SMDHC",children:[{name:"edu-nao",size:30071208.21}]},{name:"SMDP",children:[{name:"edu-nao",size:25034952.58}]},{name:"SME",children:[{name:"edu-sme",size:10236129116.15}]},{name:"SMG",children:[{name:"edu-nao",size:141894275.23}]},{name:"SMIT",children:[{name:"edu-nao",size:27208026.76},{name:"edu-outros",size:10243129.72}]},{name:"SMPED",children:[{name:"edu-nao",size:6778173.75}]},{name:"SMPIR",children:[{name:"edu-nao",size:1203963.03},{name:"edu-outros",size:503.28}]},{name:"SMPM",children:[{name:"edu-nao",size:7372504.51}]},{name:"SMPR",children:[{name:"edu-nao",size:222876761.25}]},{name:"SMSO",children:[{name:"edu-nao",size:97941885.99}]},{name:"SMSU",children:[{name:"edu-nao",size:467701033.22}]},{name:"SMT",children:[{name:"edu-nao",size:484994264.34},{name:"edu-outros",size:29e8}]},{name:"SMTE",children:[{name:"edu-nao",size:70235537.85},{name:"edu-outros",size:3576558.32}]},{name:"SMUL",children:[{name:"edu-nao",size:366456030.15}]},{name:"SVMA",children:[{name:"edu-nao",size:188393148.09}]},{name:"TCMSP",children:[{name:"edu-nao",size:222867073.18}]}]}}},[0]);
//# sourceMappingURL=app.9e0a9adb.js.map