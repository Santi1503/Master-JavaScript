let themeGreen = document.querySelector(".theme_green")
let themeRed = document.querySelector(".theme_red")
let themeBlue = document.querySelector(".theme_blue")

let page = document.querySelector("html")

themeGreen.addEventListener("click", () => {
    page.removeAttribute("class")
    page.classList.add("theme_green--active")
})

themeRed.addEventListener("click", () => {
    page.removeAttribute("class")
    page.classList.add("theme_red--active")
})

themeBlue.addEventListener("click", () => {
    page.removeAttribute("class")
    page.classList.add("theme_blue--active")
})