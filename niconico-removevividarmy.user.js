// ==UserScript==
// @name         Remove vividarmy
// @namespace    http://miyacorata.net/
// @version      1.0.2
// @description  ビビッドアーミーとかを殺すスクリプトです
// @author       miyacorata
// @match        https://*.nicovideo.jp/*
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
         * 非表示にされる広告
         *  * トップページの左右及び中央上部のビビッドアーミー広告
         * 
         * ついでに非表示にされるやつ
         *  * 動画ページのマーキーの中身
         */
        style.innerHTML = (function () {/*
.MarqueeContainer,
#pc_uni_top_228x1024_side_wall_left,
#pc_uni_top_228x1024_side_wall_right,
.PcUniTop970x250BillboardAdContainer,
.BaseLayout-billboard {
    display: none !important;
}

*/}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "");

        document.head.appendChild(style);
        console.info("[Done] niconico-RemoveVividArmy");
    });
})();