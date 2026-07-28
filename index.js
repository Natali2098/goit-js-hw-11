import{a as f,S as m,i}from"./assets/vendor-BGqwtSVv.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",h="56899501-989548285d21a3ed69d029560";function y(o){return f.get(g,{params:{key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(){l.innerHTML=""}function S(){u.classList.remove("hidden")}function q(){u.classList.add("hidden")}function P(o){const r=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:n,comments:p,downloads:d})=>`
      <li class="gallery-item">
        <a href="${a}">
          <img
            src="${s}"
            alt="${e}"
            loading="lazy"
          />
        </a>

        <div class="info">
          <p>
            <b>Likes</b>
            <span>${t}</span>
          </p>

          <p>
            <b>Views</b>
            <span>${n}</span>
          </p>

          <p>
            <b>Comments</b>
            <span>${p}</span>
          </p>

          <p>
            <b>Downloads</b>
            <span>${d}</span>
          </p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",r),b.refresh()}const c=document.querySelector(".form");c.addEventListener("submit",o=>{o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(!r){i.error({message:"Please enter a search query!",position:"topRight"});return}L(),S(),y(r).then(s=>{if(s.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}P(s.hits)}).catch(()=>{i.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{q(),c.reset()})});
//# sourceMappingURL=index.js.map
