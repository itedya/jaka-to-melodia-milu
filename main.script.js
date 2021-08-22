// ==UserScript==
// @name         itedya - JakaToMelodia script
// @namespace    https://itedya.com
// @version      0.1
// @description  try to take over the world!
// @author       itedya
// @match        https://www.youtube.com/watch?v=*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

const main = async () => {
    //window.history.pushState("", "", '/by-itedya');

    const originalPlayPause = document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > button");

    let blackDiv = document.createElement("div");
    blackDiv.style.position = "fixed";
    blackDiv.style.width = "100vw";
    blackDiv.style.height = "100vh";
    blackDiv.style.backgroundColor = "black";
    blackDiv.style.zIndex = '2147483646';
    document.body.appendChild(blackDiv);

    let btn = document.createElement("button");
    btn.innerHTML = "START / PAUZA";
    btn.style.position = 'absolute';
    btn.style.top = '0%';
    btn.style.right = '0%';
    btn.style.zIndex = '2147483647';
    btn.classList.add(`tm-addon-start-pause`);
    document.body.appendChild(btn);

    btn = document.querySelector(`.tm-addon-start-pause`);

    btn.addEventListener("click", function(){
        originalPlayPause.click();
        console.log(1);
    });
}

main();