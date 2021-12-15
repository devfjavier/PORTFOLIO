import linksInteractWithScroll from "./JS/linksInteractWithScroll.js"
// addEventListener("DOMContentLoaded", loadJS)

let sections = null

let menuLinks = null

addEventListener("load", () => {
    sections = Array.from(document.querySelectorAll(".section-container"))
    menuLinks = Array.from(document.querySelectorAll(".link"))
})

addEventListener("scroll", () => linksInteractWithScroll(menuLinks, sections))

// function loadJS() {}