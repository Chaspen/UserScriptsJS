// ==UserScript==
// @name        Sabrina Online Full-res strips
// @namespace   Violentmonkey Scripts
// @match       https://www.sabrina-online.com/*
// @grant       none
// @version     1.0
// @author      Chaspen
// @description absolutely god awful and breaks the site slightly but it works so whatever
// ==/UserScript==


function listStrips() {
  let strips = document.querySelector("h3");
  let StripHTML = strips.innerHTML
  let StripPrefix = /SO_sm|SO_xm/g
  let replaced = StripHTML.replaceAll(StripPrefix, "SabOnline")
  strips.innerHTML = replaced;
  //stylesheet
  let style = `
      h3 a img {
          width: 90%
      }

      h3 p:last-child {

          width: 69px;
      }
    `
  stylesheet = document.createElement("style");
  stylesheet.textContent = style;
  document.head.appendChild(stylesheet)
}

listStrips();
