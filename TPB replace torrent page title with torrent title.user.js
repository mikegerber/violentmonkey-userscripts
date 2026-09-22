// ==UserScript==
// @name        TPB replace torrent page title with torrent title
// @namespace   https://github.com/mikegerber
// @match       *://thepiratebay.org/description.php*
// @grant       none
// @run-at     document-end
// @require    https://cdn.jsdelivr.net/npm/@violentmonkey/dom@2
// ==/UserScript==


const config = {
  "debug": true,
};
const debug = config.debug ? console.log.bind(console) : function(){};



const label_name = document.querySelector("label#name").innerText;
const new_title = `TPB: ${label_name}`;

document.title = new_title;
