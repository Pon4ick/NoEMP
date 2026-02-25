// ==UserScript==
// @name         NoEMP
// @namespace    http://tampermonkey.net/
// @version      0.0.2
// @description  NoEMP
// @author       Pon4ick
// @match        https://kb.bvbinfo.ru/lessons/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/Pon4ick/NoEMP/refs/heads/main/noemp.js
// @downloadURL  https://raw.githubusercontent.com/Pon4ick/NoEMP/refs/heads/main/noemp.js
// ==/UserScript==

(function() {
    'use strict';
    var isProcessed = false;

    function main() {
        let videos = document.querySelectorAll(".vjs-poster");
        console.warn(videos)
        for (let i = 1; i < videos.length; i++) {
            let element = videos[i]
            element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
        }

        let navItems = document.querySelectorAll(".pl-2.mb-1.text-sm");
        let videoText = [];
        for (let element of navItems) {
            if (element.children[0].innerText.toLowerCase().includes("видео")) {
                videoText.push(element)
            }
        }
        for (let i = 1; i < videoText.length; i++) {
            let element = videoText[i]
            element.remove()
        }
    }


    function doYourStuff() {
        let navItems = document.querySelectorAll(".vjs-poster");
        if (navItems.length > 0) {
            main()
            return true;
        }
        return false;
    }

    if (!doYourStuff()) {

        const observer = new MutationObserver(function(mutations) {
            if (doYourStuff()) {
                //observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
})();