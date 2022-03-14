import linksInteractWithScroll from "./JS/linksInteractWithScroll.js"
// addEventListener("DOMContentLoaded", loadJS)

let sections = null

let menuLinks = null

addEventListener("load", () => {
    sections = Array.from(document.querySelectorAll("section"))
    menuLinks = Array.from(document.querySelectorAll(".link"))
})

onscroll = () => sections && menuLinks && linksInteractWithScroll(menuLinks, sections)

// function loadJS() {}