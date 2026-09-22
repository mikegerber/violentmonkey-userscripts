// ==UserScript==
// @name        TPB replace torrent page title with torrent title
// @namespace   https://github.com/mikegerber
// @version     0.0.1
// @downloadURL https://raw.githubusercontent.com/mikegerber/violetmonkey-userscripts/master/TPB%20replace%20torrent%20page%20title%20with%20torrent%20title.user.js
// @match       https://thepiratebay.org/description.php*
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
