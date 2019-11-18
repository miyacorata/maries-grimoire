// ==UserScript==
// @name         Remove vividarmy
// @namespace    http://miyacorata.net/
// @version      1.1.0
// @description  ビビッドアーミーとかを殺すスクリプトです
// @author       miyacorata
// @match        https://*.nicovideo.jp/*
// @match        http://*.nicovideo.jp/*
// @grant        none
// @downloadURL  https://github.com/miyacorata/maries-grimoire/raw/master/niconico-removevividarmy.user.js
// @updateURL    https://github.com/miyacorata/maries-grimoire/raw/master/niconico-removevividarmy.user.js
// @supportURL   https://github.com/miyacorata/maries-grimoire
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded',()=>{
        let style = document.createElement('style');
        style.setAttribute('id','VividArmyRemover');
        style.setAttribute('type','text/css');

        /**
         * 非表示にされる要素
         *  * classに"AdContainer"あるいは"ads_sidewall"を含むすべての要素
         * 
         * ついでに非表示にされるやつ
         *  * 動画ページのマーキーの中身
         */
        style.innerHTML = (function () {/*
.MarqueeContainer ,
*[class*=AdContainer] ,
*[class*=ads_sidewall] ,
.Ads970x250Billboard
{
    display: none !important;
}

*/}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "");

        document.head.appendChild(style);
        console.info("[Done] niconico-RemoveVividArmy");
    });
})();