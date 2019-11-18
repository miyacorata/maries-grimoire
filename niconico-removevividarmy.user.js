// ==UserScript==
// @name         Remove vividarmy
// @namespace    http://miyacorata.net/
// @version      1.0.1
// @description  ビビッドアーミーとかを殺すスクリプトです
// @author       miyacorata
// @match        https://*.nicovideo.jp/*
// @grant        none
// @downloadURL  https://github.com/miyacorata/maries-grimoire/raw/master/niconico-removevividarmy.user.js
// @updateURL    https://github.com/miyacorata/maries-grimoire/raw/master/niconico-removevividarmy.user.js
// @supportURL   https://github.com/miyacorata/maries-grimoire
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded',()=>{
        let style = document.createElement('style');

        /**
         * 非表示にされる広告
         *  * トップページの左右及び中央上部のビビッドアーミー広告
         * 
         * ついでに非表示にされるやつ
         *  * 動画ページのマーキーの中身
         */
        style.innerHTML = (function () {/*
.MarqueeContainer {
    display: none;
}

#pc_uni_top_228x1024_side_wall_left {
    display: none !important;
}

#pc_uni_top_228x1024_side_wall_right {
    display: none !important;
}

.PcUniTop970x250BillboardAdContainer {
    display: none !important;
}
*/}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "");

        document.head.appendChild(style);
    });
})();