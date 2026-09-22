// ==UserScript==
// @name        TPB replace torrent page title with torrent title
// @namespace   https://github.com/mikegerber
// @description Replace TPB's generic page title with the torrent title.
// @version     0.0.2
// @downloadURL https://raw.githubusercontent.com/mikegerber/violentmonkey-userscripts/master/TPB%20replace%20torrent%20page%20title%20with%20torrent%20title.user.js
// @match       https://thepiratebay.org/description.php*
// @grant       none
// @run-at      document-end
// @require     https://cdn.jsdelivr.net/npm/@violentmonkey/dom@2
// ==/UserScript==


const labelName = document.querySelector("label#name")?.textContent?.trim();

if (labelName) {
  const newTitle = `TPB: ${labelName}`;
  document.title = newTitle;
}
