!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var o=function(t,e,n,o){let r=document.querySelectorAll(t),a=document.querySelectorAll(e),s=document.querySelector(n);function i(){a.forEach(t=>{t.classList.add("hide"),t.classList.remove("show","fade")}),r.forEach(t=>{t.classList.remove(o)})}function c(t=0){a[t].classList.add("show","fade"),a[t].classList.remove("hide"),r[t].classList.add(o)}i(),c(),s.addEventListener("click",(function(e){const n=e.target;n&&n.classList.contains(t.slice(1))&&r.forEach((t,e)=>{n==t&&(i(),c(e))})}))};function r(t){const e=document.querySelector(t);e.classList.add("hide"),e.classList.remove("show"),document.body.style.overflow=""}function a(t,e){const n=document.querySelector(t);n.classList.add("show"),n.classList.remove("hide"),document.body.style.overflow="hidden",e&&clearInterval(e)}var s=function(t,e,n){const o=document.querySelectorAll(t),s=document.querySelector(e);o.forEach(t=>{t.addEventListener("click",()=>a(e,n))}),s.addEventListener("click",t=>{t.target!==s&&""!=t.target.getAttribute("data-close")||r(e)}),document.addEventListener("keydown",t=>{"Escape"===t.code&&s.classList.contains("show")&&r(e)}),window.addEventListener("scroll",(function t(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(a(e,n),window.removeEventListener("scroll",t))}))};var i=function(t,e){function n(t){return t>=0&&t<10?"0"+t:t}!function(t,e){const o=document.querySelector(t),r=o.querySelector("#days"),a=o.querySelector("#hours"),s=o.querySelector("#minutes"),i=o.querySelector("#seconds"),c=setInterval(l,1e3);function l(){const t=function(t){const e=Date.parse(t)-Date.parse(new Date),n=Math.floor(e/864e5),o=Math.floor(e/1e3%60),r=Math.floor(e/1e3/60%60);return{total:e,days:n,hours:Math.floor(e/36e5%24),minutes:r,seconds:o}}(e);r.innerHTML=n(t.days),a.innerHTML=n(t.hours),s.innerHTML=n(t.minutes),i.innerHTML=n(t.seconds),t.total<=0&&clearInterval(c)}l()}(t,e)};var c=function(){class t{constructor(t,e,n,o,r,a,...s){this.src=t,this.alt=e,this.title=n,this.descr=o,this.price=r,this.classes=s,this.parent=document.querySelector(a),this.transfer=27,this.changeToUAH()}changeToUAH(){this.price=this.price*this.transfer}render(){const t=document.createElement("div");0===this.classes.length?(this.classes="menu__item",t.classList.add(this.classes)):this.classes.forEach(e=>t.classList.add(e)),t.innerHTML=`\n\t\t\t\t\t<img src=${this.src} alt=${this.alt}>\n\t\t\t\t\t<h3 class="menu__item-subtitle">${this.title}</h3>\n\t\t\t\t\t<div class="menu__item-descr">${this.descr}</div>\n\t\t\t\t\t<div class="menu__item-divider"></div>\n\t\t\t\t\t<div class="menu__item-price">\n\t\t\t\t\t\t <div class="menu__item-cost">Цена:</div>\n\t\t\t\t\t\t <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n\t\t\t\t\t</div>\n\t\t\t  `,this.parent.append(t)}}new t("img/tabs/vegy.jpg","vegy",'Меню "Фитнес"','Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',9,".menu .container").render(),new t("img/tabs/post.jpg","post",'Меню "Постное"',"Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",14,".menu .container").render(),new t("img/tabs/elite.jpg","elite","Меню “Премиум”","В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",21,".menu .container").render()};var l=function(){const t=document.querySelector(".calculating__result span");let e,n,o,r,a;function s(){t.textContent=e&&n&&o&&r&&a?"female"===e?Math.round((447.6+9.2*o+3.1*n-4.3*r)*a):Math.round((88.36+13.4*o+4.8*n-5.7*r)*a):"____"}function i(t,e){document.querySelectorAll(t).forEach(t=>{t.classList.remove(e),t.getAttribute("id")===localStorage.getItem("sex")&&t.classList.add(e),t.getAttribute("data-ratio")===localStorage.getItem("ratio")&&t.classList.add(e)})}function c(t,n){const o=document.querySelectorAll(t);o.forEach(t=>{t.addEventListener("click",t=>{t.target.getAttribute("data-ratio")?(a=+t.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+t.target.getAttribute("data-ratio"))):(e=t.target.getAttribute("id"),localStorage.setItem("sex",t.target.getAttribute("id"))),o.forEach(t=>{t.classList.remove(n)}),t.target.classList.add(n),s()})})}function l(t){const e=document.querySelector(t);e.addEventListener("input",()=>{switch(e.value.match(/\D/g)?e.style.border="1px solid red":e.style.border="none",e.getAttribute("id")){case"height":n=+e.value;break;case"weight":o=+e.value;break;case"age":r=+e.value}s()})}localStorage.getItem("sex")?e=localStorage.getItem("sex"):(e="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?a=localStorage.getItem("ratio"):(a=1.375,localStorage.setItem("ratio",1.375)),s(),i("#gender div","calculating__choose-item_active"),i(".calculating__choose_big div","calculating__choose-item_active"),c("#gender div","calculating__choose-item_active"),c(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")};var d=function(t,e){const n=document.querySelectorAll(t),o="img/form/spinner.svg",s="Спасибо! Скоро мы с вами свяжемся",i="Что-то пошло не так...";function c(t){const n=document.querySelector(".modal__dialog");n.classList.add("hide"),a(".modal",e);const o=document.createElement("div");o.classList.add("modal__dialog"),o.innerHTML=`\n\t\t\t  <div class="modal__content">\n\t\t\t\t\t<div class="modal__close" data-close>×</div>\n\t\t\t\t\t<div class="modal__title">${t}</div>\n\t\t\t  </div>\n\t\t `,document.querySelector(".modal").append(o),setTimeout(()=>{o.remove(),n.classList.add("show"),n.classList.remove("hide"),r(".modal")},4e3)}n.forEach(t=>{var e;(e=t).addEventListener("submit",t=>{t.preventDefault();let n=document.createElement("img");n.src=o,n.style.cssText="\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tmargin: 0 auto;\n\t\t\t  ",e.insertAdjacentElement("afterend",n);const r=new FormData(e);(async(t,e)=>{let n=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:e});return await n.json()})("http://localhost:3000/requests",JSON.stringify(Object.fromEntries(r.entries()))).then(t=>{console.log(t),c(s),n.remove()}).catch(()=>{c(i),n.remove()}).finally(()=>{e.reset()})})})};var u=function({container:t,slide:e,nextArrow:n,prevArrow:o,totalCounter:r,currentCounter:a,wrapper:s,field:i}){let c=0,l=1;const d=document.querySelectorAll(e),u=document.querySelector(t),m=document.querySelector(o),f=document.querySelector(n),h=document.querySelector(r),g=document.querySelector(a),p=document.querySelector(s),y=window.getComputedStyle(p).width,v=document.querySelector(i);d.length<10?(h.textContent="0"+d.length,g.textContent="0"+l):(h.textContent=d.length,g.textContent=l),v.style.width=100*d.length+"%",v.style.display="flex",v.style.transition="0.5s all",p.style.overflow="hidden",d.forEach(t=>{t.style.width=y}),u.style.position="relative";const _=document.createElement("ol"),b=[];_.classList.add("carousel-indicators"),_.style.cssText="\n\t\t position: absolute;\n\t\t right: 0;\n\t\t bottom: 0;\n\t\t left: 0;\n\t\t z-index: 15;\n\t\t display: flex;\n\t\t justify-content: center;\n\t\t margin-right: 15%;\n\t\t margin-left: 15%;\n\t\t list-style: none;\n\t",u.append(_);for(let t=0;t<d.length;t++){const e=document.createElement("li");e.setAttribute("data-slide-to",t+1),e.style.cssText="\n\t\t\t  box-sizing: content-box;\n\t\t\t  flex: 0 1 auto;\n\t\t\t  width: 30px;\n\t\t\t  height: 6px;\n\t\t\t  margin-right: 3px;\n\t\t\t  margin-left: 3px;\n\t\t\t  cursor: pointer;\n\t\t\t  background-color: #fff;\n\t\t\t  background-clip: padding-box;\n\t\t\t  border-top: 10px solid transparent;\n\t\t\t  border-bottom: 10px solid transparent;\n\t\t\t  opacity: .5;\n\t\t\t  transition: opacity .6s ease;\n\t\t ",0==t&&(e.style.opacity=1),_.append(e),b.push(e)}function S(t){return+t.replace(/\D/g,"")}f.addEventListener("click",()=>{c==S(y)*(d.length-1)?c=0:c+=S(y),v.style.transform=`translateX(-${c}px)`,l==d.length?l=1:l++,d.length<10?g.textContent="0"+l:g.textContent=l,b.forEach(t=>t.style.opacity=".5"),b[l-1].style.opacity=1}),m.addEventListener("click",()=>{0==c?c=S(y)*(d.length-1):c-=S(y),v.style.transform=`translateX(-${c}px)`,1==l?l=d.length:l--,d.length<10?g.textContent="0"+l:g.textContent=l,b.forEach(t=>t.style.opacity=".5"),b[l-1].style.opacity=1}),b.forEach(t=>{t.addEventListener("click",t=>{const e=t.target.getAttribute("data-slide-to");l=e,c=S(y)*(e-1),v.style.transform=`translateX(-${c}px)`,d.length<10?g.textContent="0"+l:g.textContent=l,b.forEach(t=>t.style.opacity=".5"),b[l-1].style.opacity=1})})};window.addEventListener("DOMContentLoaded",(function(){const t=setTimeout(()=>a(".modal",t),5e4);o(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),s("[data-modal]",".modal",t),i(".timer","2021-12-01"),c(),l(),d("form",t),u({container:".offer__slider",slide:".offer__slide",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"})}))}]);
//# sourceMappingURL=bundle.js.map
