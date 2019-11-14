// ==UserScript==
// @name         Better pixiv artworks
// @namespace    http://miyacorata.net/
// @version      1.0.0
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

    setTimeout(()=>{
        /* = document.title から#ハッシュを除去する = */
        document.title = document.title.replace(/^#\S+/i,'');

        /* = Shareボタン生成 = */
        let fedi_share = document.createElement("div");
        fedi_share.setAttribute("class","sc-LzMYX");
        fedi_share.setAttribute("style","margin-right:20px;");

        let share_button = document.createElement("button");
        share_button.setAttribute("class","_35vRH4a");
        share_button.setAttribute("type","button");
        share_button.innerText = "Fediverse共有";
        fedi_share.appendChild(share_button);

        fedi_share.addEventListener("click",()=>{
            domain = window.prompt("共有先サーバのドメインを指定してください\n(mastodon or Misskey)","imastodon.net");
            if(!domain){
                alert("共有を中止しました");
                return false;
            }else{
                let url = window.location.href;
                let title = document.title;
                window.open('https://'+domain+'/share?text='+title+'+'+url,'_blank','width=500,height=350');
            }
        })

        document.querySelector("#root > div.sc-AykKC.jiZwhV > div > div > main > section > div.sc-fzXfNd.bAzGIW > div > div.sc-LzMFm.jkOlKo > div > div.sc-LzNby.jkOmxl > section")
            .appendChild(fedi_share);
    },2000);

})();
