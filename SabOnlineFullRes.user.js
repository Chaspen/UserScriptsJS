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

  let toggleWrapper = document.querySelector("h1")
  let elem = document.createElement('p');


  elem.innerHTML = `
    <div id="toggleText">Check to turn off anti-aliasing</div>
    <input id="checkboxElement" type="checkbox" onclick="IfChecked()">
  `
  let main = toggleWrapper.appendChild(elem)

  //checkbox event listender
  let checkboxEventListen = document.getElementById("checkboxElement")
  //define strips


  checkboxEventListen.addEventListener('click', (event) => {
    console.log("waow")
    // set localStorage variable
    if (checkboxEventListen.checked == true) {
      //console.log("checkbox is checked")
      localStorage.setItem("aa", "on");
    } else {
      //console.log("checkbox is unchecked")
      localStorage.setItem("aa", "off");
    }
    // read localStorage variable
    if (localStorage.getItem("aa") == "on") {
      //console.log("AA off")
      strips.style.imageRendering = "pixelated"
    } else if (localStorage.getItem("aa") == "off") {
      //console.log("AA on")
      strips.style.imageRendering = "smooth"
    }
  })



  //set

  localStorage.setItem("aa", "on");


  //stylesheet
  let style = `
      h3 a img {
          width: 90%;

      }

      h3 p:last-child {

          width: 69px;
      }

      h1 {
          font-size: 100%;
          font: inherit;
          font-weight: 0;
      }

      h1 {

          font-weight: 700;
          font-size: 2em;
      }

      #toggleText {
          font-size: 15px;
          font-weight: normal;


      }

    `
  stylesheet = document.createElement("style");
  stylesheet.textContent = style;
  document.head.appendChild(stylesheet)
}



listStrips();
