let loginForm = document.querySelector(".aside_login")
let inputName = document.querySelector("#name")
let inputEmail = document.querySelector("#email")
let inputPassword = document.querySelector("#password")
let asideData = document.querySelector(".aside_data")
let loginName = document.querySelector(".data_name")
let btnLogout = document.querySelector(".data_logout")

let getUser = () => {
    let myUser = localStorage.getItem("user")

    if(myUser) {
        let identity = JSON.parse(myUser)

        loginName.innerHTML = identity.name
        loginForm.classList.add("aside_login--hide")
        asideData.classList.remove("aside_data--hide")
    }
}

loginForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let name = inputName.value
    let email = inputEmail.value
    let password = inputPassword.value

    let user = {}
    if (name && email && password) {
        user = {name, email, password}

        localStorage.setItem("user", JSON.stringify(user))

        loginForm.reset()
        getUser()
    }
})

getUser()

btnLogout.addEventListener("click", () => {
    localStorage.clear()
    loginForm.classList.remove("aside_login--hide")
    asideData.classList.add("aside_data--hide")
})
