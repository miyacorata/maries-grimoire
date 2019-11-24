// ==UserScript==
// @name         TwiShareForward for fediverse
// @namespace    http://miyacorata.net/
// @version      1.0.0
// @description  Twitter共有をマストドンとかに飛ばせるやつです
// @author       miyacorata
// @match        https://twitter.com/intent/*
// @grant        none
// @downloadURL  https://github.com/miyacorata/maries-grimoire/raw/master/twitter-twishareforward.user.js
// @updateURL    https://github.com/miyacorata/maries-grimoire/raw/master/twitter-twishareforward.user.js
// @supportURL   https://github.com/miyacorata/maries-grimoire
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // デフォルトサーバの設定 (スキーマは省略)
    const default_domain = "imastodon.net";

    document.addEventListener('DOMContentLoaded' ,()=>{

        /* = Shareボタン生成 = */
        let share_button = document.createElement("button");
        share_button.setAttribute("class","button");
        share_button.setAttribute("type","button");
        share_button.setAttribute("style","margin-right:10px");
        share_button.innerText = "Fediverse共有";

        share_button.addEventListener("click",()=>{
            let domain = window.prompt("共有先サーバのドメインを指定してください\n(mastodon or Misskey)",default_domain);
            if(!domain){
                alert("共有を中止しました");
                return false;
            }else{
                let text = document.getElementById('status').value.replace('#','%23');
                location.href = 'https://'+domain+'/share?text='+text;
            }
        });

        document.querySelector("#update-form > div.ft > fieldset").insertBefore(share_button,document.querySelector("#update-form > div.ft > fieldset > input"));
    });

})();
