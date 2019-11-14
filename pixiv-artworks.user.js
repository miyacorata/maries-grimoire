// ==UserScript==
// @name         Better pixiv artworks
// @namespace    http://miyacorata.net/
// @version      0.1.0
// @description  pixivイラストページに作用するスクリプトです
// @author       miyacorata
// @match        https://www.pixiv.net/artworks/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // document.title から#ハッシュを除去する
    setTimeout(()=>{
        document.title = document.title.replace(/^#\S+/i,'');
    },1500);

})();
