// ==UserScript==
// @name         itedya - JakaToMelodia (title changer) script
// @namespace    https://www.itedya.com
// @version      0.1
// @description  try to take over the world!
// @author       itedya
// @match        https://www.youtube.com/watch?v=*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       document-start
// ==/UserScript==

window.document.title = `by itedya`;

Object.defineProperty(document, 'title', {
    get: function() {return `by itedya`},
    set: function() {}
});
