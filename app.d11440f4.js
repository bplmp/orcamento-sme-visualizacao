webpackJsonp([0],{"+ZWa":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),t.d(a,"configs",function(){return o});var o={duration:500,durationFast:function(){return this.duration/2},durationSlow:function(){return 2*this.duration}}},0:function(e,a,t){t("+prg"),e.exports=t("lVK7")},"2v+m":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),t.d(a,"slides",function(){return c});var o=t("q43I"),s=t("+ZWa").configs,r=t("7fyq"),n=t("K5PZ");function i(e){var a,t;o.select("#chart").selectAll("g").transition().duration(s.duration).style("opacity",.2),e.cat_1&&o.selectAll("."+e.cat_1).transition().duration(s.duration).style("opacity",.7),e.cat_2&&(a=e.cat_2,t=1,a.forEach(function(e){o.selectAll("#g-"+e).transition().duration(s.duration).style("opacity",t)}))}var c={s01:{cat_1:void 0,cat_2:void 0,animation:function(){o.selectAll("g").transition().duration(s.duration).style("opacity",0)}},s02:{cat_1:void 0,cat_2:void 0},s03:{cat_1:"orc-pessoal",cat_2:void 0},s03_01:{cat_1:"orc-pessoal",cat_2:["orc-pessoal-docentes"]},s03_02:{cat_1:"orc-pessoal",cat_2:["orc-pessoal-gestores"]},s03_03:{cat_1:"orc-pessoal",cat_2:["orc-pessoal-estagios","orc-pessoal-outros"]},s04:{cat_1:"orc-funcionamento_unidades",cat_2:void 0},s04_01:{cat_1:"orc-funcionamento_unidades",cat_2:["orc-funcionamento_unidades-limpeza"]},s04_02:{cat_1:"orc-funcionamento_unidades",cat_2:["orc-funcionamento_unidades-vigilancia"]},s04_03:{cat_1:"orc-funcionamento_unidades",cat_2:["orc-funcionamento_unidades-agua_esgoto","orc-funcionamento_unidades-eletricidade","orc-funcionamento_unidades-telefone"]},s04_04:{cat_1:"orc-funcionamento_unidades",cat_2:["orc-funcionamento_unidades-obras_reformas"]},s04_05:{cat_1:"orc-funcionamento_unidades",cat_2:["orc-funcionamento_unidades-manutencao","orc-funcionamento_unidades-aluguel_imoveis"]},s04_06:{cat_1:"orc-funcionamento_unidades",cat_2:["orc-funcionamento_unidades-ceu_outros"]},s04_07:{cat_1:"orc-funcionamento_unidades",cat_2:["orc-funcionamento_unidades-eventos"]},s05:{cat_1:"orc-parcerias",cat_2:void 0},s05_01:{cat_1:"orc-parcerias",cat_2:["orc-parcerias-creches"]},s05_02:{cat_1:"orc-parcerias",cat_2:["orc-parcerias-ed_especial"]},s05_03:{cat_1:"orc-parcerias",cat_2:["orc-parcerias-eja","orc-parcerias-outros"]},s06:{cat_1:"orc-alimentacao",cat_2:void 0},s06_01:{cat_1:"orc-alimentacao",cat_2:["orc-alimentacao-refeicoes"]},s06_02:{cat_1:"orc-alimentacao",cat_2:["orc-alimentacao-insumos"]},s06_03:{cat_1:"orc-alimentacao",cat_2:["orc-alimentacao-prep_dist"]},s06_04:{cat_1:"orc-alimentacao",cat_2:["orc-alimentacao-leve_leite"]},s06_05:{cat_1:"orc-alimentacao",cat_2:["orc-alimentacao-pnae"]},s07:{cat_1:"orc-transporte",cat_2:void 0},s07_01:{cat_1:"orc-transporte",cat_2:["orc-transporte-teg"]},s07_02:{cat_1:"orc-transporte",cat_2:["orc-transporte-veiculos"]},s08:{cat_1:"orc-uniforme_materiais",cat_2:void 0},s08_01:{cat_1:"orc-uniforme_materiais",cat_2:["orc-uniforme_materiais-uniforme"]},s08_02:{cat_1:"orc-uniforme_materiais",cat_2:["orc-uniforme_materiais-materiais"]},s09:{cat_1:"orc-transferencias",cat_2:void 0},s09_01:{cat_1:"orc-transferencias",cat_2:["orc-transferencias-ptrf"]},s10:{cat_1:"orc-ti",cat_2:void 0},s10_01:{cat_1:"orc-ti",cat_2:["orc-ti-compra_notebooks"]},s10_02:{cat_1:"orc-ti",cat_2:["orc-ti-manutencao_software_sistemas","orc-ti-outros"]},s10_03:{cat_1:"orc-ti",cat_2:["orc-ti-internet"]},s10_04:{cat_1:"orc-ti",cat_2:["orc-ti-manutencao_equip_ti"]}};Object.keys(c).forEach(function(e,a){var t=c[e];t.animation||(t.animation=function(){i(t)});var o=r.paragraphs[e];t.text=o?o.text:"&nbsp;";var s=n[t.cat_1];s&&(t.cat_1_text=s.text)})},"7fyq":function(e,a){e.exports={paragraphs:{s01:{text:"Imagine que sua tela representa todo o orçamento da Secretaria de Educação.<br>&darr;"},s02:{text:"Agora, vamos começar a dividir a tela em partes, para mostrar como a Secretaria gasta seu orçamento."},s03:{text:"Esta é a parte que corresponde ao gasto com pessoal, mais da metade de todo orçamento."},s03_01:{text:"A maior parte dos gastos com pessoal são salários e benefícios dos professores, coordenadores e diretores."},s03_02:{text:"O restante dos gastos são com gestores,"},s03_03:{text:"estagiários e outros pequenos custos."},s04:{text:"Esta outra parte são os gastos com o funcionamento das escolas e de outros prédios da Secretaria."},s04_01:{text:"O maior custo é com limpeza,"},s04_02:{text:"seguido por vigilância,"},s04_03:{text:"água e esgoto, luz, e telefone,"},s04_04:{text:"reformas e construções de novas unidades,"},s04_05:{text:"manutenção e aluguel de imóveis,"},s04_06:{text:"custos de manutenção dos CEUs, como guarda-vidas para as piscinas e operação dos auditórios,"},s04_07:{text:"e eventos como peças e teatro, apresentações nas escolas e oficinas de recreação."},s05:{text:"Além de construir e manter seus próprios prédios, a Secretaria também faz parcerias com outras entidades para prover educação."},s05_01:{text:"Sua maior parte é repassada para os Centros de Educação Infantil, também conhecidos como creches."},s05_02:{text:"Outra parte é utilizada para a educação de pessoas com necessidades especiais."},s05_03:{text:"E o restante com programas de Educação de Jovens e Adultos e outras parcerias."},s06:{text:"Um outro grande custo da Secretaria é com a alimentação dos estudantes."},s06_01:{text:"Boa parte é gasto com refeições compradas diretamente de fornecedores."},s06_02:{text:"Mas a Secretaria também compra alimentos para produzir refeições,"},s06_03:{text:"e nesse caso precisa pagar também pelo seu preparo e distribuição."},s06_04:{text:"O restante é gasto com o programa Leve-Leite, que entrega leite de graça para famílias de baixa renda com crianças pequenas,"},s06_05:{text:"e com repasse de verbas do Programa Nacional de Alimentação Escolar (PNAE) diretamente para as escolas."},s07:{text:"Outra parte grande são os custos com transporte."},s07_01:{text:"Sua grande maioria é gasta com o Transporte Escolar Gratuito (TEG), disponível quando a Secretaria não consegue matricular as crianças em até 2 km de distância da escola, ou em outros casos especiais."},s07_02:{text:"O restante é utilizado com aluguel de veículos como ônibus de excursões e carros."},s08:{text:"A Secretaria também tem custos com materiais para os estudantes,"},s08_01:{text:"como uniformes escolares"},s08_02:{text:"e outros materias didáticos."},s09:{text:"A Secretaria repassa uma parte dos seus recursos diretamente para as unidades escolares."},s09_01:{text:"Os repasses são feitos através de Associações de Pais e Mestres (APMs) e servem para descentralizar a administração e ampliar a autonomia das escolas."},s10:{text:"A Educação também tem custos com tecnologia da informação (TI)."},s10_01:{text:"Em 2017, foi feita uma grande compra de notebooks para a Educação."},s10_02:{text:"Os gastos com TI também incluem desenvolvimento, manutenção de softwares e sistemas,"},s10_03:{text:"fornecimento de internet para todas unidades escolares,"},s10_04:{text:"e supporte e assistência técnica para operação da TI."}}}},K5PZ:function(e,a){e.exports={"orc-alimentacao":{text:"Alimentação"},"orc-funcionamento_unidades":{text:"Funcionamento das unidades"},"orc-obras_reformas":{text:"Obras e reformas"},"orc-parcerias":{text:"Parcerias"},"orc-pessoal":{text:"Pessoal"},"orc-ti":{text:"TI"},"orc-transferencias":{text:"Transferências"},"orc-uniforme_materiais":{text:"Materiais"},"orc-transporte":{text:"Transporte"}}},"O/DJ":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.triggerSlides=s;t("q43I");var o=t("2v+m").slides;t("+ZWa").configs;function s(e){e&&(r=void 0);for(var a,t,s,i=Object.keys(o),c=0;c<i.length;c++){var u=i[c];if(a=u,t=void 0,void 0,t=document.getElementById(a),(s=t.getBoundingClientRect()).top<window.innerHeight/1&&s.bottom>0){n(u);break}}}window.onscroll=function(){s(!1)};var r="s01";function n(e){if(e!==r){var a=o[e];a.animation&&a.animation(),r=e}}},PS5z:function(e,a){},RdSv:function(e,a){e.exports={name:"orc",children:[{name:"alimentacao",children:[{name:"insumos",size:231123711.86},{name:"leve_leite",size:54456453.89},{name:"pnae",size:19721738},{name:"prep_dist",size:57732278.68},{name:"refeicoes",size:344783132.32}]},{name:"funcionamento_unidades",children:[{name:"agua_esgoto",size:107440314.11},{name:"aluguel_imoveis",size:19519948.28},{name:"ceu_outros",size:26983979.53},{name:"eletricidade",size:50882339.96},{name:"eventos",size:9126208.33},{name:"limpeza",size:424731067.12},{name:"logistica_transportes",size:5388738.2},{name:"manutencao",size:24463952.29},{name:"mobiliario",size:7332216.48},{name:"obras_reformas",size:78135386.56},{name:"telefone",size:6216973.48},{name:"uniceu",size:2870959.07},{name:"vigilancia",size:198547639.19}]},{name:"parcerias",children:[{name:"creches",size:1962607935.7},{name:"ed_especial",size:36601537.99},{name:"eja",size:10942761.36},{name:"outros",size:3635450.38}]},{name:"pedagogico",children:[{name:"formacao",size:3013278.69},{name:"mais_educacao",size:5499647.24}]},{name:"pessoal",children:[{name:"adiantamento",size:12202874},{name:"docentes",size:5872021815.26},{name:"estagios",size:36592521.92},{name:"gestores",size:343404844.62},{name:"outros",size:2179419.19}]},{name:"suporte_administrativo",children:[{name:"suporte_administrativo_outros",size:8294341.93}]},{name:"ti",children:[{name:"compra_notebooks",size:40021740},{name:"internet",size:15388038.39},{name:"manutencao_equip_ti",size:6459787.91},{name:"manutencao_software_sistemas",size:15273364.41},{name:"outros",size:7792897.88}]},{name:"transferencias",children:[{name:"ptrf",size:41846569.91}]},{name:"transporte",children:[{name:"teg",size:211016396.95},{name:"veiculos",size:17627189.21}]},{name:"uniforme_materiais",children:[{name:"materiais",size:55618096.42},{name:"uniforme",size:203651680.76}]}]}},l6KM:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.create=function(e,a){var t=document.getElementById(e);t.innerHTML="";var s=o.select(t).append("svg"),r=t.clientWidth,n=t.clientHeight,i=o.scaleOrdinal(o.schemeCategory10.map(function(e){return o.interpolateRgb(e,"#fff")(.2)})),c=(o.format(",d"),o.treemap().tile(o.treemapResquarify).size([r,n]).round(!0).paddingInner(1)),u=o.hierarchy(a).eachBefore(function(e){e.data.id=(e.parent?e.parent.data.id+"-":"")+e.data.name}).eachBefore(function(e){e.data.parent=e.parent?e.parent.data.id:""}).sum(m).sort(function(e,a){return a.height-e.height||a.value-e.value});c(u);var d=s.selectAll("g").data(u.leaves()).enter().append("g").attr("id",function(e){return"g-"+e.data.id}).attr("class",function(e){return e.data.parent}).style("opacity",0).attr("transform",function(e){return"translate("+e.x0+","+e.y0+")"});function m(e){return e.size}d.append("rect").attr("id",function(e){return e.data.id}).attr("data-value",function(e){return e.value}).attr("width",function(e){return e.x1-e.x0}).attr("height",function(e){return e.y1-e.y0}).attr("stroke","#fff").attr("stroke-width",0).attr("fill",function(e){return i(e.parent.data.id)}),d.append("clipPath").attr("id",function(e){return"clip-"+e.data.id}).append("use").attr("xlink:href",function(e){return"#"+e.data.id}),o.selectAll("input").data([m,function(e){return e.children?0:1}],function(e){return e?e.name:this.value}).on("change",function(e){timeout.stop(),c(u.sum(e)),d.transition().duration(750).attr("transform",function(e){return"translate("+e.x0+","+e.y0+")"}).select("rect").attr("width",function(e){return e.x1-e.x0}).attr("height",function(e){return e.y1-e.y0})})};var o=t("q43I")},lVK7:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=t("PS5z"),s=(t.n(o),t("ViqS"));s.register("locale","br",{delimiters:{thousands:".",decimal:","},abbreviations:{thousand:"mil",million:"mi",billion:"bi",trillion:"tri"},currency:{symbol:"R$"}}),s.locale("br"),s.defaultFormat("0,0.00");var r=t("2v+m").slides,n=t("RdSv"),i=t("O/DJ"),c=t("l6KM");function u(){var e;c.create("chart",n),e=[],Object.keys(r).forEach(function(a,t){var o=r[a],n=o.text,i=a,c=o.cat_2,u=[];c&&c.forEach(function(e){var a=document.getElementById(e);a&&u.push(parseFloat(a.dataset.value))});var d=u.reduce(function(e,a){return e+a},0);d=s(d/1e6).format();var m=u.length?"<p>"+d+" milhões</p>":"",_='<div class="text-paragraph" id="'+i+'"><h1>'+n+"</h1>"+m+"</div>";e.push(_)}),document.querySelector("#text").innerHTML=""+e.join(""),i.triggerSlides(!0)}window.onload=function(){u()},window.addEventListener("resize",u)}},[0]);
//# sourceMappingURL=app.d11440f4.js.map