// ==UserScript==
// @name         AlwaysDefaultContextMenu
// @namespace    kararasenok-gd
// @version      0.1
// @description  Blocks disabling of context menu and text selection on websites.
// @match        *://*/*
// @grant        none
// @run-at       document-start
// @icon         https://i.ibb.co/Vp5JLSR/128.png
// ==/UserScript==

(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const styles = document.createElement('style');
        styles.innerHTML = `
        * {
          user-select: text !important;
          -webkit-user-select: text !important;
        }
      `;
        document.head.appendChild(styles);

        document.addEventListener('contextmenu', (event) => {
            event.stopPropagation();
        }, true);

        document.addEventListener('selectstart', (event) => {
            event.stopPropagation();
        }, true);

        document.addEventListener('mousedown', (event) => {
            event.stopPropagation();
        }, true);

        document.addEventListener('mouseup', (event) => {
            event.stopPropagation();
        }, true);

        document.addEventListener('mousemove', (event) => {
            event.stopPropagation();
        }, true);

        document.addEventListener('keydown', (event) => {
            if (event.ctrlKey && (event.key === 'a' || event.key === 'A')) {
                event.stopPropagation();
            }
        }, true);
    });
})();