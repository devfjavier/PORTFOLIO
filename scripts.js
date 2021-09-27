"use strict";
addEventListener("DOMContentLoaded", loadJS)

function loadJS() {
    const hamburgerButton = document.getElementById("hamburger-button")
    const hamburgerOpen = document.getElementById("open")
    const hamburgerClose = document.getElementById("close")
    
    const menuHeader = document.getElementById("HEADER") //menu desplegable
    // para los links del menu
    const menuLink = Array.from(document.querySelectorAll(".HEADER .menu a"))
    // para el boton que cambiar color de la pagina
    const themeButton = document.getElementById("theme-button")
    const activateButton = document.getElementById("button")
    const rootStyles = document.documentElement.style
    const lightThemeActive = "translateX(0px)"
    const darkThemeActive = "translateX(100%)"
    let darkthemeState = false // el estado por defecto es lightTheme
    let lightTheme = {
        "--title-color"             : "hsl(190, 100%, 4%)",
        "--text-color"              : "hsl(190, 100%, 6%)",
        "--bg-color"                : "hsl(190, 4%, 99%)",
        "--bg-menu-color"           : "hsla(190, 6%, 96%, .9)",
        "--bg-theme-button-color"   : "hsl(190, 100%, 80%)",
        "--theme-button-color"      : "hsl(190, 100%, 26%)"
    }
    const darkTheme = {
        "--title-color"             : "hsl(190, 100%, 98%)",
        "--text-color"              : "hsl(190, 100%, 94%)",
        "--bg-color"                : "hsl(190, 19%, 16%)",
        "--bg-menu-color"           : "hsla(190, 95%, 9%, .8)",
        "--bg-theme-button-color"   : "hsl(190, 100%, 26%)",
        "--theme-button-color"      : "hsl(190, 100%, 2%)"
    }

    hamburgerButton.addEventListener("click", () => {
        menuHeader.classList.toggle("is-active")
        hamburgerOpen.classList.toggle("is-active")
        hamburgerClose.classList.toggle("is-active")
    });

    menuLink.forEach(link => {
        link.addEventListener("click", () => {
            menuHeader.classList.remove("is-active")
            hamburgerClose.classList.remove("is-active")
            if (!hamburgerOpen.classList.contains("is-active")) {
                hamburgerOpen.classList.add("is-active")
            }
        })
    })

    // boton para cambiar color
    themeButton.addEventListener("click", () => {
        if (darkthemeState === false) {
            darkthemeState = true
            activateButton.style.transform = darkThemeActive
            changeTheme(darkTheme)
        }
        else if (darkthemeState === true) {
            darkthemeState = false
            activateButton.style.transform = lightThemeActive
            changeTheme(lightTheme)
        }
    })

    function changeTheme(theme) {
        let themeKeys = Object.keys(theme)
        for (let key of themeKeys) {
            rootStyles.setProperty(key, theme[key])
        }
    }

}