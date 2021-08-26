"use strict";
addEventListener("DOMContentLoaded", loadJS)

function loadJS() {
    // para el boton que activa el menu desplegable
    const menuButton = document.getElementById("menu-button")
    const menuHeader = document.getElementById("menu")
    // para los links del menu
    const menuLink = Array.from(document.querySelectorAll(".HEADER .menu a"))
    // para el boton que cambiar color de la pagina
    const themeButton = document.getElementById("theme-button")
    const activateButton = document.getElementById("button")
    const rootStyles = document.documentElement.style
    const lightThemeActive = "translateX(-100%)"
    const darkThemeActive = "translateX(0px)"
    let darkthemeState = false // el estado por defecto es lightTheme
    let lightTheme = {
        "--title-color"             : "#091210",
        "--text-color"              : "#202624",
        "--banner-title-color"      : "rgb(246, 248, 248)",
        "--banner-text-color"       : "#ecf0efef",
        "--bg-color"                : "rgb(246, 248, 248)",
        "--bg-menu-color"           : "#ecf0efdf",
        "--color-1"                 : "#26b082",
        "--color-2"                 : "#0b8c9166",
        "--bg-theme-button-color"   : "rgb(98, 218, 245)",
        "--theme-button-color"      : "rgb(16, 119, 80)"
    }
    const darkTheme = {
        "--title-color"             : "#f9ffff",
        "--text-color"              : "#f2f2f2",
        "--banner-title-color"      : "#f9ffff",
        "--banner-text-color"       : "#f2f2f2",
        "--bg-color"                : "#1c2b27",
        "--bg-menu-color"           : "#151f2edf",
        "--color-1"                 : "#0b8c91",
        "--color-2"                 : "#26f6f666",
        "--bg-theme-button-color"   : "rgb(28, 51, 226)",
        "--theme-button-color"      : "rgb(27, 12, 66)"
    }

    menuButton.addEventListener("click", () => {
        menuHeader.classList.toggle("is-active")
    });

    menuLink.forEach(link => {
        link.addEventListener("click", () => {
            menuHeader.classList.remove("is-active")
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