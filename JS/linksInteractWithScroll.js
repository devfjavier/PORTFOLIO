const linksInteractWithScroll = (menuLinks, sections) => {
    if (!sections || !menuLinks) return

    const sectionsCoords = sections.map(sect => sect.getBoundingClientRect())
    const clientHeight = document.documentElement.clientHeight

    if (scrollY >= sectionsCoords[0].top && scrollY <= sectionsCoords[0].height * 0.72) {
        menuLinks[0].classList.add("active")
    }

    else {
        menuLinks[0].classList.remove("active")
    }

    if ((scrollY > sectionsCoords[0].height * 0.72) && (screenY <= sectionsCoords[1].top + (sectionsCoords[1].height * 0.72))) {
        menuLinks[1].classList.add("active")
    }
    else {
        menuLinks[1].classList.remove("active")
    }

    if ((screenY > sectionsCoords[1].top + sectionsCoords[1].height * 0.72) && sectionsCoords[2].bottom >= clientHeight - sectionsCoords[3].height * 0.85) {
        menuLinks[2].classList.add("active")
    }
    else {
        menuLinks[2].classList.remove("active")
    }

    if (sectionsCoords[2].bottom < clientHeight - sectionsCoords[3].height * 0.85) {
        menuLinks[3].classList.add("active")
    }
    else {
        menuLinks[3].classList.remove("active")
    }
}

export default linksInteractWithScroll
