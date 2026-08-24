// ==UserScript==
// @name        Hide Sponsored Row on weav3r.dev
// @namespace   Violentmonkey Scripts
// @icon        https://weav3r.dev/favicon.ico?v=tornw3b-mark-16
// @version     1.0.0
// @license     MIT
//
// @match       https://weav3r.dev/*
// @grant       none
//
// @author      TornPlayer
// @description "Sponsorship hit weav3r, I almost got tricked!"
// ==/UserScript==
 
(function() {
    'use strict';
 
    const style = document.createElement('style');
 
    style.textContent = `
        .item-table-row--sponsored {
            display: none;
        }
    `;
 
    document.head.appendChild(style);
})();