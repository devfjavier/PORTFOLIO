const linksInteractWithScroll = ([l_home, l_about, l_projects, l_contact], sections) => {

    const [s_home, s_about, s_projects, s_contact] = sections.map(sect => sect.getBoundingClientRect())
    const clientHeight = document.documentElement.clientHeight

    if (scrollY >= s_home.top && scrollY <= s_home.height * 0.72) {
        l_home.classList.add("active")
    }
    else {
        l_home.classList.remove("active")
    }

    if ((scrollY > s_home.height * 0.72) && (screenY <= s_about.top + (s_about.height * 0.72))) {
        l_about.classList.add("active")
    }
    else {
        l_about.classList.remove("active")
    }

    if ((screenY > s_about.top + s_about.height * 0.72) && s_projects.bottom >= clientHeight - s_contact.height * 0.85) {
        l_projects.classList.add("active")
    }
    else {
        l_projects.classList.remove("active")
    }

    if (s_projects.bottom < clientHeight - s_contact.height * 0.85) {
        l_contact.classList.add("active")
    }
    else {
        l_contact.classList.remove("active")
    }
}

export default linksInteractWithScroll
