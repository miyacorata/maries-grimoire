// ==UserScript==
// @name         Better pixiv artworks
// @namespace    http://miyacorata.net/
// @version      0.1.0
// @description  pixivイラストページに作用するスクリプトです
// @author       miyacorata
// @match        https://www.pixiv.net/artworks/*
// @grant        none
// @downloadURL  https://github.com/miyacorata/maries-grimoire/raw/master/pixiv-artworks.user.js
// @updateURL    https://github.com/miyacorata/maries-grimoire/raw/master/pixiv-artworks.user.js
// @supportURL   https://github.com/miyacorata/maries-grimoire
// ==/UserScript==

(function() {
    'use strict';

    // document.title から#ハッシュを除去する
    setTimeout(()=>{
        document.title = document.title.replace(/^#\S+/i,'');
    },1500);

})();
