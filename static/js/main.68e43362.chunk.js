(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('{"img":".../../image/","doc":"./docs/"}')},32:function(e,t,n){e.exports=n(51)},37:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),i=n(23),r=n.n(i),l=(n(37),n(28)),c=n(4),s=(n(38),n(39),n(19)),m=n(6),d=n(11),u=function(e){var t=document.getElementById(e).offsetTop;window.scrollTo({top:t,behavior:"smooth",webkitOverflowScrolling:"touch"})};var p=function(e){var t,n,i,r,l;t=e.height?e.height:50,n=e.color?e.color:"black",i=e.underLine?e.underLine:"red",r=e.backgroundColor?e.backgroundColor:"ivory",l=e.navBarPosition?e.navBarPosition:"center";var c,p,h,g,f,v,T,E,y,b,S,P,N,I,C,L=m.propos.contenuSection[0],x=Object.keys(m),j=Object(o.useState)(window.innerWidth),B=Object(s.a)(j,2),w=B[0],M=B[1],k=Object(o.useState)(),F=Object(s.a)(k,2),O=F[0],A=F[1];return window.addEventListener("resize",(function(e){M(window.innerWidth)})),w<1e3?(c="flex",p="column",g="absolute",f=t,v=window.innerWidth,N=window.innerWidth,window.innerWidth,I="50px",h="0px",T="hidden",C="5px",y="none"):(c="none",p="row",g="relative",v="auto",C="0px",h="auto",E="none",y="flex"),w<1e3&&!O&&(h="0px",E="none",b="height",S="0.5s",P="ease",y="none",w-0,"all","0.5s","ease",window.innerWidth),w<1e3&&O&&(E="2px solid rgba(0, 0, 0, 0.3)",h=(Object.keys(m).length-1)*(6+t/2),b="height",S="0.5s",P="ease",y="flex"),a.a.createElement("div",null,a.a.createElement("div",{className:"topNavigationBarTitle",style:{display:"flex",position:"fixed",zIndex:"5"}},a.a.createElement("div",{className:"topNavigationBarImg",style:{margin:"5px",width:t-10+"px"}},a.a.createElement("img",{src:d.img+L.photoPropos,alt:"Photo profil "+L.nomPropos,style:{borderRadius:"50%",width:"100%"}})),a.a.createElement("div",{className:"topNavigationBarText",style:{margin:"5px",position:"relative",width:"auto",display:"flex",alignItems:"center"}},a.a.createElement("div",{className:"topNavigationBarH1",style:{}},a.a.createElement("h1",{style:{margin:"0",fontSize:"17px",color:"white"}},L.nomPropos),a.a.createElement("h1",{style:{margin:"0",fontSize:"23px",fontWeight:"bolder",textTransform:"uppercase",color:"white"}},L.titrePropos)))),a.a.createElement("div",{style:{position:"fixed",width:w,zIndex:"2"}},"center"===l?a.a.createElement("nav",{style:{height:t,backgroundColor:r,fontWeight:"bolder",display:"flex",flexDirection:"row",justifyContent:"flex-end",position:"relative",padding:"0px 20px 0px 20px"}},a.a.createElement("div",{id:"burger",style:{width:t,height:t,display:c,justifyContent:"center",alignItems:"center"}},a.a.createElement("button",{id:"imgLien",type:"button",onClick:function(){A(!O),document.getElementById("imgBurger").style.boxShadow="none"},onMouseOver:function(e){document.getElementById(e.target.id).style.cursor="pointer"},onMouseLeave:function(e){document.getElementById(e.target.id).style.cursor="none"},onFocus:function(e){},onBlur:function(e){},style:{textAlign:"center",width:"80%",border:"1px solid white",borderRadius:"5px",backgroundColor:"transparent"}},a.a.createElement("img",{id:"imgBurger",src:d.img+"burger.png",className:"burger",style:{width:"100%",height:"auto"},alt:"Ouverture du menu"}))),a.a.createElement("ul",{id:"navCenterUl",style:{flexDirection:p,height:h,overflow:T,position:g,top:f,width:v,backgroundColor:r,transitionProperty:b,transitionDuration:S,transitionTimingFunction:P,border:E,alignItems:"center",padding:"0",margin:"0",textDecoration:"none",listStyleType:"none",display:y,left:"0px"}},x.map((function(e,o){if(o<x.length-1)return a.a.createElement("li",{key:e+o,id:"li"+e+o,style:{height:t/1.5,lineHeight:t/25,width:N,paddingLeft:I,display:"flex",justifyContent:"flex-start",alignItems:"center",marginLeft:"10px",marginRight:"10px",marginBottom:C,borderTop:void 0}},a.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},a.a.createElement("button",{id:"navCenterLien"+m[e].lienSection,onClick:function(e){u(e.target.id.split("navCenterLien")[1]),A(!1)},onMouseOver:function(e){document.getElementById("navCenterLienUnderline"+e.target.id.split("navCenterLien")[1]).style.width="90%",document.getElementById("navCenterLienUnderline"+e.target.id.split("navCenterLien")[1]).style.backgroundColor=i},onMouseLeave:function(e){document.getElementById("navCenterLienUnderline"+e.target.id.split("navCenterLien")[1]).style.width="0%",document.getElementById("navCenterLienUnderline"+e.target.id.split("navCenterLien")[1]).style.backgroundColor="transparent"},onFocus:function(e){document.getElementById("navCenterLienUnderline"+e.target.id.split("navCenterLien")[1]).style.width="90%",document.getElementById("navCenterLienUnderline"+e.target.id.split("navCenterLien")[1]).style.backgroundColor=i},onBlur:function(e){document.getElementById("navCenterLienUnderline"+e.target.id.split("navCenterLien")[1]).style.width="0%",document.getElementById("navCenterLienUnderline"+e.target.id.split("navCenterLien")[1]).style.backgroundColor="transparent"},style:{height:"auto",lineHeight:"normal",color:n,textTransform:"uppercase",border:"none",backgroundColor:"transparent",outline:"transparent"}},m[e].nomSection),a.a.createElement("div",{id:"navCenterLienUnderline"+m[e].lienSection,style:{width:"0%",height:"2px",backgroundColor:"transparent",transitionProperty:"all",transitionDuration:"0.5s",transitionTimingFunction:"ease"}})))})))):a.a.createElement("div",null)))},h=(n(40),n(54));var g=function(e){var t=m.propos;return a.a.createElement("section",{id:t.lienSection,className:"presentation tousLiens tailleEcran all"},a.a.createElement("div",{className:"centre"},a.a.createElement(h.a,{className:"textePresentation"},a.a.createElement(h.a.Body,null,a.a.createElement("h4",null,t.nomSection),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.contenuSection[0].textePropos[0]}}))),a.a.createElement(h.a,{className:"textePresentationInf"},a.a.createElement(h.a.Body,null,a.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.contenuSection[0].textePropos[1]}})))))},f=(n(41),n(53)),v=n(27);var T=function(e){var t=m.formations;return a.a.createElement("section",{id:t.lienSection,className:"formation tousLiens chargement all"},a.a.createElement("div",{className:"centre"},a.a.createElement("h4",{className:"titreSection"},t.nomSection),a.a.createElement("div",{className:"listeFormation"},t.contenuSection.map((function(e,t){return a.a.createElement("div",{className:"flexCard",key:e.lienMenu+t},a.a.createElement("div",{id:e.lienMenu,className:""}),a.a.createElement(h.a,{className:"carteFormation",key:e.lienMenu+t},a.a.createElement(h.a.Header,null,a.a.createElement("div",{className:"formationInfo"},a.a.createElement("img",{src:d.img+e.logoFormation,className:"infoImage",alt:"Logo "+e.nomFormation}),a.a.createElement("div",{className:"infoTexte"},a.a.createElement("span",{className:"sousTitreSection"},e.nomFormation),a.a.createElement("span",null,e.dateFormation),a.a.createElement("span",null,e.objectifFormation),a.a.createElement("span",null,a.a.createElement("a",{href:e.siteFormation,target:"_blank",title:"lien site "+e.nomSite,className:"lienSite",rel:"noopener noreferrer"},e.nomSite))))),a.a.createElement(f.a,{variant:"flush"},a.a.createElement(f.a.Item,{className:"commentaireFormation",dangerouslySetInnerHTML:{__html:e.commentaireFormation}}),a.a.createElement(f.a.Item,{className:"fichierFormation"},e.titreFormation.map((function(e,t){return a.a.createElement("div",{key:e.lienTitre+t},a.a.createElement("a",{href:d.doc+e.lienTitre,target:"_blank",type:"application/pdf",rel:"noopener noreferrer"},a.a.createElement(v.a,null),e.nomTitre))}))))))})))))};n(42),n(43);var E=function(e){var t=e.listeImage,n=[e.widthImage,e.HeightImage],i=n[0],r=n[1],l=e.numCarousel,c=e.prevNext,s=100*(t.length+1)+"%";Object(o.useEffect)((function(){m()}));var m=function(){var e={};e.global=document.getElementsByClassName("carouselGlobal"+l)[0],e.container=document.getElementsByClassName("carouselContainer"+l)[0],e.ul=document.getElementsByClassName("carouselUl"+l)[0],e.bouton={advance:document.getElementsByClassName("carouselAdvance"+l)[0],preview:document.getElementsByClassName("carouselPrevious"+l)[0]},e.currentItem=-1,e.items=e.ul.children;var n=3e3,o=c;function a(o){document.getElementById(t[e.currentItem].nom).style.color="#4472c4",document.getElementById(t[e.currentItem].nom).style.fontWeight="normal",e.currentItem=o,document.getElementById(t[e.currentItem].nom).style.color="#cc3300",document.getElementById(t[e.currentItem].nom).style.fontWeight="bolder",n=3e3,e.ul.style.transition="all 2s ease",e.ul.style.left=100*e.currentItem*-1+"%",clearTimeout(e.interval)}function i(){clearTimeout(e.interval),e.interval=setTimeout((function(){e.currentItem>=0&&e.currentItem<t.length&&(document.getElementById(t[e.currentItem].nom).style.color="#4472c4",document.getElementById(t[e.currentItem].nom).style.fontWeight="normal"),e.currentItem++,e.currentItem>=e.items.length?(e.currentItem=0,e.ul.style.transition="none",e.ul.style.left=100*e.currentItem*-1+"%",n=500):(n=3e3,e.ul.style.transition="all 2s ease",e.ul.style.left=100*e.currentItem*-1+"%"),document.getElementById(t[e.currentItem].nom).style.color="#4472c4",document.getElementById(t[e.currentItem].nom).style.fontWeight="bolder",i()}),n)}e.bouton.advance&&o&&(e.bouton.preview.addEventListener("click",(function(t){e.currentItem--,e.currentItem<=-1?(e.currentItem=e.items.length-1,e.ul.style.transition="none",e.ul.style.left=100*e.currentItem*-1+"%"):(n=3e3,e.ul.style.transition="all 2s ease",e.ul.style.left=100*e.currentItem*-1+"%",i())})),e.bouton.advance.addEventListener("click",(function(t){!function(){e.currentItem++,e.currentItem>=e.items.length?(e.currentItem=0,e.ul.style.transition="none",e.ul.style.left=100*e.currentItem*-1+"%",n=500):(n=3e3,e.ul.style.transition="all 2s ease",e.ul.style.left=100*e.currentItem*-1+"%");i()}()}))),t.forEach((function(e,t){document.getElementById(e.nom).addEventListener("mouseover",(function(e){a(t)})),document.getElementById(e.nom).addEventListener("mouseleave",(function(e){i()})),document.getElementById(e.nom).addEventListener("onFocus",(function(e){a(t)}))})),i()};return a.a.createElement("div",{className:"carouselGlobal"+l,style:{display:"flex",justifyContent:"center",border:"3px inset lightgrey"}},c?a.a.createElement("button",{className:"carouselPrevious"+l,style:{border:"0px",height:"28px",width:"17px"}},"P"):a.a.createElement(a.a.Fragment,null),a.a.createElement("div",{className:"carouselContainer"+l,style:{width:i,maxWidth:"1000px",overflow:"hidden"}},a.a.createElement("ul",{className:"carouselUl"+l,style:{listStyleType:"none",position:"relative",width:s,height:"auto",margin:"0",padding:"0",fontSize:"0",textAlign:"left"}},t.map((function(e,t){return a.a.createElement("li",{className:"carouselLi"+l,key:"carouselLi"+l+t,name:"carouselLi"+e.nom},a.a.createElement("img",{src:d.img+e.source,alt:e.nom,name:e.nom,style:{float:"left",width:i,height:r}}))})))),c?a.a.createElement("button",{className:"carouselAdvance"+l,style:{border:"0px",height:"28px",width:"17px"}},"N"):a.a.createElement(a.a.Fragment,null))},y=n(13);var b=function(e){var t=m.techno;return a.a.createElement("section",{id:t.lienSection,className:"technologie tousLiens chargement tailleEcran all"},a.a.createElement("div",{className:"centre"},a.a.createElement("h4",{className:"titreSection"},t.nomSection),a.a.createElement("div",{className:"listeTechno",id:"listeTechno"},t.contenuSection.map((function(e,t){var n=[];return e.listeTechno.forEach((function(e){n.push({nom:e.nomTechno,source:e.logoTechno})})),n.push({nom:e.listeTechno[0].nomTechno,source:e.listeTechno[0].logoTechno}),a.a.createElement("div",{className:"groupTechnoCard",key:e.lienMenu+t},a.a.createElement(h.a,{id:e.lienMenu,className:"carteTechno"},a.a.createElement(h.a.Header,null,a.a.createElement("div",{className:"TechnoTitre"},a.a.createElement(E,{numCarousel:t,listeImage:n,widthImage:"50px",HeightImage:"50px",prevNext:!1}),a.a.createElement("span",{className:"sousTitreSection"},e.categorieTechno))),a.a.createElement(f.a,{variant:"flush"},e.listeTechno.map((function(e,t){return a.a.createElement(f.a.Item,{key:e.nomTechno+t,className:"skillItem"},a.a.createElement("div",{className:"skillLevel"},function(e){for(var t=Math.trunc(e/20),n=5-t,o=[],i=0;i<t;i++)o.push("F");for(var r=0;r<n;r++)o.push("O");return o.map((function(e,t){return"F"===e?a.a.createElement(y.b,{color:"#cc3300",key:e+t}):a.a.createElement(y.c,{color:"#cc3300",key:e+t})}))}(e.niveauTechno)),a.a.createElement("div",{className:"skillName"},a.a.createElement("span",{className:"itemTecho",id:e.nomTechno,name:e.nomTechno+t},e.nomTechno)))})))))})))))},S=(n(44),n(55));var P=function(e){var t=m.projet;return a.a.createElement("section",{id:t.lienSection,className:"portfolio tousLiens chargement all"},a.a.createElement("div",{className:"centre"},a.a.createElement("h4",{className:"titreSection"},t.nomSection),a.a.createElement("div",{className:"listePortfolio"},t.contenuSection.map((function(e,t){return a.a.createElement("div",{id:"unitPortfolioCard"+t,className:"unitPortfolioCard",key:e.lienMenu+t},a.a.createElement(h.a,{id:e.lienMenu,className:"cartePortfolio",key:e.lienMenu+t},a.a.createElement(h.a.Header,null,a.a.createElement("div",{className:"titrePortfolio"},a.a.createElement("div",{className:"imgProjet"},a.a.createElement("img",{src:d.img+e.photoProjet,className:"ImagePortfolio",alt:"photo"+e.photoProjet})),a.a.createElement("div",{className:"TextePortfolio"},a.a.createElement("span",{className:"sousTitreSection"},e.nomProjet),a.a.createElement("span",null,e.anneeProjet)),a.a.createElement(S.a,{id:"button"+t,name:e.idProjet+t,className:"moreCloseButton",onClick:function(e){!function(e){for(var t=document.getElementById(e.target.name),n=document.getElementById(e.target.id),o=document.getElementsByClassName("moreCloseButton"),a=0;a<o.length;a++)document.getElementById(o[a].id)!==n&&(document.getElementById(o[a].id).innerText="En savoir plus..",document.getElementById(o[a].name).style.height="0");if("En savoir plus.."===n.innerText)return t.style.height=document.getElementsByName(e.target.id)[0].offsetHeight+"px",void(n.innerText="Fermer");"Fermer"===n.innerText&&(t.style.height="0",n.innerText="En savoir plus..")}(e)}},"En savoir plus.."))),a.a.createElement(f.a,{variant:"flush",id:e.idProjet+t,className:"plus"},a.a.createElement("div",{className:"detailPortfolio",name:"button"+t},a.a.createElement("p",{className:"portfolioSeparation"},e.objectifProjet),a.a.createElement("span",null,e.descriptionProjet),a.a.createElement("p",{className:"portfolioSeparation"},"Technologies"),a.a.createElement("span",null,e.technoProjet),a.a.createElement("p",{className:"portfolioSeparation"},"Liens"),a.a.createElement("div",{className:"githubPortfolio"},e.GitProjet.map((function(e,t){return a.a.createElement("div",{key:e.gitNom+t},a.a.createElement(y.a,null),a.a.createElement("a",{href:e.gitLien,title:"Lien GitHub "+e.gitNom,target:"_blank",rel:"noopener noreferrer"},e.gitNom))})))))))})))))};n(45);var N=function(e){return Object(o.useEffect)((function(){u("propos")})),a.a.createElement("div",{className:"homepage",id:"homepage"},a.a.createElement(p,{height:80,backgroundColor:"#4472c4",color:"#f0f8ff",underLine:"#cc3300"}),a.a.createElement(g,null),a.a.createElement(T,null),a.a.createElement(b,null),a.a.createElement(P,null))};var I=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,null,a.a.createElement(c.c,null,a.a.createElement(c.a,{path:"/",component:N}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e){e.exports=JSON.parse('{"propos":{"lienSection":"propos","nomSection":"A propos ..","contenuSection":[{"titrePropos":"Developpeuse Web","nomPropos":"Carole Sotirio","photoPropos":"PhotoCV.jpg","pseudoPropos":"CSO-DEV","textePropos":["<p>Pourquoi devenir d\xe9veloppeuse WEB ? ..par engouement pour le code depuis que j\'ai d\xe9couvert les languages VBA excel par opportunit\xe9, python en autodidacte et le d\xe9veloppement WEB en suivant une formation qui a confirm\xe9 ce choix pour mon avenir professionnel.</p><p>Je recherche un poste qui me permettra \xe0 la fois de mettre en application mes nouvelles comp\xe9tences, de les consolider et en apprendre davantage.</p><p>Je suis ouverte au pr\xe9sentiel ou au t\xe9l\xe9pr\xe9sentiel : l\'essentiel...</p>","<h4>c\'est coder !</h4>"]}]},"formations":{"lienSection":"formations","nomSection":"Mes formations","contenuSection":[{"lienMenu":"lebocalacademy","nomMenu":"Le Bocal Acad\xe9my","nomFormation":"Le Bocal Acad\xe9my","idFormation":"lebocalacademy","objectifFormation":"Full stack MERN","commentaireFormation":"<p>Formation Bootcamp de 10 semaines, en t\xe9l\xe9pr\xe9sentiel dont l\'objectif est d\'apprendre \xe0 :</p><ul><li>Construire une page web avec les langages HTML et CSS</li><li>Lire, comprendre et interpr\xe9ter un algorythme</li><li>Ma\xeetriser les bases de Javascript</li><li>Savoir d\xe9velopper une application webfront-end avec ReactJS</li><li>Ma\xeetriser le fonctionnement de base de NodeJS</li><li>Savoir cr\xe9er et utiliser une base de donn\xe9es MongoDB</li><li>Ma\xeetriser le d\xe9veloppement d\u2019une application mobile simple avec ReactNative</li><li>Conna\xeetre le fonctionement de SCRUM</li><li>Mener un projet web Fullstack en autonomie</li></ul>","logoFormation":"lebocal.jpg","dateFormation":"Mars-Mai 2020","nomSite":"lebocal.academy","siteFormation":"https://lebocal.academy/","titreFormation":[{"docTitre":"pdf","nomTitre":"certificat de comp\xe9tences","lienTitre":"SOTIRIO Carole - Attestation de fin de formation.pdf"},{"docTitre":"pdf","nomTitre":"Attestation de fin de formation","lienTitre":"SOTIRIO Carole - Certificat de comp\xe9tences.pdf"}]},{"lienMenu":"opquast","nomMenu":"OPQUAST","nomFormation":"OPQUAST","idFormation":"opquast","objectifFormation":"Qualit\xe9 du Web","commentaireFormation":"<p>Formation sur plateforme sur d\'une dur\xe9e de 3 mois de pr\xe9paration dont les objectifs sont :</p><ul><li>de connaitre les fondamentaux de la qualit\xe9 WEB</li><li>de maitriser les risques et les aspects \xe9conomiques</li><li>d\u2019appliquer les bonnes pratiques du WEB</li></ul>","logoFormation":"opquast.png","dateFormation":"Sept 2020","nomSite":"www.opquast.com","siteFormation":"https://www.opquast.com/","titreFormation":[{"docTitre":"pdf","nomTitre":"Certificat Opquast N\xb0 9DRWVO","lienTitre":"SOTIRIO Carole - Certification opquast 2020.pdf"}]}]},"techno":{"lienSection":"technologies","nomSection":"Mes comp\xe9tences","contenuSection":[{"lienMenu":"frontend","nomMenu":"Front-end","categorieTechno":"Front-end","idTechno":"frontEnd","listeTechno":[{"nomTechno":"HTML","idTechno":"","commentaireTechno":"ddddd","logoTechno":"html.png","niveauTechno":80},{"nomTechno":"CSS","idTechno":"navigationPhotoTitre","commentaireTechno":"ddddd","logoTechno":"css.png","niveauTechno":70},{"nomTechno":"javaScript","idTechno":"navigationPhotoTitre","commentaireTechno":"ddddd","logoTechno":"javascript.png","niveauTechno":80}]},{"lienMenu":"backend","nomMenu":"Back-end","categorieTechno":"Back-end","idTechno":"backEnd","listeTechno":[{"nomTechno":"Node JS","idTechno":"navigationPhotoTitre","commentaireTechno":"ddddd","logoTechno":"nodejs.png","niveauTechno":70},{"nomTechno":"Mongodb","idTechno":"navigationPhotoTitre","commentaire":"ddddd","logoTechno":"mongodb.png","niveauTechno":70}]},{"lienMenu":"frameworks","nomMenu":"Frameworks","categorieTechno":"Frameworks","idTechno":"frameworks","listeTechno":[{"nomTechno":"JQuery","idTechno":"navigationPhotoTitre","commentaireTechno":"ddddd","logoTechno":"jquery.png","niveauTechno":60},{"nomTechno":"Sass","idTechno":"navigationPhotoTitre","commentaireTechno":"ddddd","logoTechno":"sass.png","niveauTechno":40},{"nomTechno":"Bootstrap","idTechno":"navigationPhotoTitre","commentaireTechno":"ddddd","logoTechno":"bootstrap.png","niveauTechno":60},{"nomTechno":"React Bootstrap","idTechno":"navigationPhotoTitre","commentaireTechno":"ddddd","logoTechno":"reactbootstrap.png","niveauTechno":60},{"nomTechno":"Express JS","idTechno":"navigationPhotoTitre","commentaireTechno":"ddddd","logoTechno":"expressjs.png","niveauTechno":60},{"nomTechno":"React","idTechno":"navigationPhotoTitre","commentaireTechno":"ddddd","logoTechno":"react.png","niveauTechno":80},{"nomTechno":"React Native","idTechno":"navigationPhotoTitre","commentaireTechno":"ddddd","logoTechno":"reactnative.png","niveauTechno":60}]},{"lienMenu":"supports","nomMenu":"Supports","categorieTechno":"Supports","idTechno":"supports","listeTechno":[{"nomTechno":"GIT","idTechno":"navigationPhotoTitre","commentaireTechno":"ddddd","logoTechno":"git.png","niveauTechno":70},{"nomTechno":"Robo 3T","idTechno":"navigationPhotoTitre","commentaireTechno":"ddddd","logoTechno":"robo 3t.png","niveauTechno":80},{"nomTechno":"Postman","idTechno":"navigationPhotoTitre","commentaireTechno":"ddddd","logoTechno":"postman.png","niveauTechno":80},{"nomTechno":"M\xe9thode Agile Scrum","idTechno":"navigationPhotoTitre","commentaireTechno":"ddddd","logoTechno":"scrum.png","niveauTechno":60},{"nomTechno":"Trello","idTechno":"navigationPhotoTitre","commentaireTechno":"ddddd","logoTechno":"trello.png","niveauTechno":80},{"nomTechno":"Andro\xefd Studio","idTechno":"navigationPhotoTitre","commentaire":"ddddd","logoTechno":"androidStudio.png","niveauTechno":60}]}]},"projet":{"lienSection":"realisations","nomSection":"Mon portFolio","contenuSection":[{"lienMenu":"cannesisup","nomMenu":"Cannes Is Up","nomProjet":"Cannes Is Up","idProjet":"cannesisup","anneeProjet":"2020","objectifProjet":"Projet de fin de formation","descriptionProjet":"Cr\xe9ation d\'un sous domaine qui compl\xe8te le site vitrine de l\'association de startUp de cannes, pour la gestion d\'un annuaire et les comptes des adh\xe9rents.","demoProjet":"","photoProjet":"cannesisup.gif","technoProjet":"Mongodb, Express, React, NodeJs, ReactBootstrap","GitProjet":[{"gitNom":"Cannes Is Up","gitLien":"https://github.com/CSO-DEV/CannesIsUp"}]},{"lienMenu":"lestonneliers","nomMenu":"Les Tonneliers","nomProjet":"Les Tonneliers","idProjet":"lestonneliers","anneeProjet":"2020","objectifProjet":"Exercice module MERN","descriptionProjet":"Cr\xe9ation d\'un site de location d\'appartements en stack MERN , en commen\xe7ant par la r\xe9alisation du Front-end, puis le back-end associ\xe9 ainsi que l\'application mobile.","demoProjet":"","photoProjet":"tonnelier.gif","technoProjet":"Mongodb, Express, React, React Native, NodeJs, ReactBootstrap","GitProjet":[{"gitNom":"Les Tonneliers Front-End","gitLien":"https://github.com/CSO-DEV/LBA-LesTonneliers-FrontEnd"},{"gitNom":"Les Tonneliers Back-End","gitLien":"https://github.com/CSO-DEV/LBA-LesTonneliers-FrontEnd"},{"gitNom":"Les Tonneliers AppliMobil","gitLien":"https://github.com/CSO-DEV/LBA-LesTonneliers-AppliMobil"}]},{"lienMenu":"todolist","nomMenu":"ToDoList","nomProjet":"ToDoList","idProjet":"todolist","anneeProjet":"2020","objectifProjet":"Exercice module DOM","descriptionProjet":"Cr\xe9ation d\'une application simple pour manipuler le DOM et m\xe9morisation en localStorage.","demoProjet":"ToDoList.mp4","photoProjet":"todolist.gif","technoProjet":"HTML, CSS, JavaScript, JQuery","GitProjet":[{"gitNom":"ToDoList","gitLien":"https://cso-dev.github.io/LBA-ToDoList/","prodNom":"Site toDoList","prodImg":"toDoList.png","prodLien":"https://cso-dev.github.io/LBA-ToDoList/"}]},{"lienMenu":"artenobilia","nomMenu":"Artenobilia","nomProjet":"Artenobilia","idProjet":"artenobilia","anneeProjet":"2020","objectifProjet":"Exercice module HTML/CSS","descriptionProjet":"A partir d\'\xe9lements fournis par le designer, cr\xe9er le site statique responsive.","demoProjet":"","photoProjet":"artenobilia.gif","technoProjet":"HTML, CSS, JavaScript","GitProjet":[{"gitNom":"Artenobilia","gitLien":"https://github.com/CSO-DEV/LBA-Artenobilia/","prodNom":"Site toDoList"}]}]},"contact":{"lienSection":"contact","nomSection":"Contactez-moi","contenuSection":[{"emailContact":"ca.sotirio@gmail.com","telContact":"+33 06 50 11 15 85","messageContact":"","reseauContact":[{"nomReseau":"Linkedin","lienReseau":"https://www.linkedin.com/in/carole-sotirio/"},{"nomReseau":"Github","lienReseau":"https://github.com/CSO-DEV"}]}]}}')}},[[32,1,2]]]);
//# sourceMappingURL=main.68e43362.chunk.js.map