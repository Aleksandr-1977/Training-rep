import{S as a}from"./assets/vendor-D0gBiHs0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const l=[{mini1:"../img/polo-front.jpg",discrfoto1:"Polo-front",bigMini1:"../img/polo-front-big.jpg",mini2:"../img/polo-back.jpg",discrfoto2:"Polo-back",bigMini2:"../img/polo-back-big.jpg",mini3:"../img/polo-close-up.jpg",discrfoto3:"Polo-close-up",bigMini3:"../img/polo-close-up-big.jpg",preview:"../img/polo-main.jpg",original:"../img/polo-main-big.jpg",link:"https://www.ralphlauren.com",title:"Custom Fit Polo Bear Oxford Shirt",description:"Blue polo with a classic cut. Made of smooth and soft cotton.",price:132,discount:25},{mini1:"../img/2-front.jpg",discrfoto1:"Polo-front",bigMini1:"../img/2-front-big.jpg",mini2:"../img/2-back.jpg",discrfoto2:"Polo-back",bigMini2:"../img/2-back-big.jpg",mini3:"../img/2-close-up.jpg",discrfoto3:"Polo-close-up",bigMini3:"../img/2-close-up-big.jpg",preview:"../img/2-main.jpg",original:"../img/2-main-big.jpg",link:"https://www.ralphlauren.com",title:"T-Shirt Polo Ralph Lauren ",description:"женская 211891673",price:100,discount:5}],n=document.querySelector(".container-card"),d=l.map(i=>`<li class="container">
    <div class="card-product-mini">
                <ul class="card-product-list">
<a class="mini" href="${i.bigMini1}"><img src="${i.mini1}" alt="${i.discrfoto1}" title="" /></a>
<a class="mini" href="${i.bigMini2}"><img src="${i.mini2}" alt="${i.discrfoto2}" title="" /></a>
<a class="mini" href="${i.bigMini3}"><img src="${i.mini3}" alt="${i.discrfoto3}" title="" /></a>
                </ul>
    <div class="card-product">
<a href="${i.original}"><img id="driveImage" src="${i.preview}" width="400" height="600" /></a>
    </div>
    </div>
    <div class="discription">
<a class="link-production" href="${i.link}" target="_blank">POLO RALPH</a>
<h2 class="title">${i.title}</h2>
<p class="title-text">${i.description}</p>
                <div class="price">
<div class="sale">
<p class="price-fix">$${i.price-i.price*(i.discount/100)}</p>
<p class="discount">-${i.discount}%</p>
</div>
<p class="max-price">$${i.price}</p>
</div>
<p class="size">Choose size</p>
<ul class="select-list">
<li class="size-choose">S</li>
<li class="size-choose">M</li>
<li class="size-choose">L</li>
<li class="size-choose">XL</li>
<li class="size-choose">XXL</li>
</ul>
<button class="btn-submit" type="submit">Add to bag</button>
</div>
 </li>`).join();n.insertAdjacentHTML("beforeend",d);const p=new a(".card-product a",{captions:!0,captionsData:"alt",captionDelay:250,scrollZoom:!1});document.querySelectorAll(".card-product-list").forEach(i=>{i.addEventListener("click",o=>{if(o.preventDefault(),o.target.tagName==="IMG"){const e=o.target.closest(".container"),c=e.querySelector(".card-product a img"),t=e.querySelector(".card-product a");c.src=o.target.src,c.alt=o.target.alt,t.href=o.target.src}p.refresh()})});selectMini.addEventListener("click",chooseMini);const g=document.querySelector(".select-list"),u=i=>{i.target.classList.contains("size-choose")&&(document.querySelectorAll(".size-choose.is-active").forEach(o=>o.classList.remove("is-active")),i.target.classList.add("is-active"))};g.addEventListener("click",u);
//# sourceMappingURL=index.js.map
