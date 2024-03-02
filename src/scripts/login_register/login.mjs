import dataUser from "./data.mjs"

const clikEnter = () => {
    const enter = document.querySelector(".enter_login")
    enter.addEventListener("click", () => {
        inputAnalysisUser()
    })
}

const newUser = JSON.parse(localStorage.getItem("newUser"))

const inputAnalysisUser = () => {
    const password = document.querySelector(".password_input").value
    const email = document.querySelector(".email_input").value

    verifyuser(dataUser, password, email)
}

clikEnter()

const verifyuser = (dataUser, password, email) => {
    for (let i = 0; i < dataUser.length; i++) {
        const user = dataUser[i];
        verifyEmail(user, password, email)
    }
}

const verifyEmail = (user, password, email) => {
    if ((user.email == email) || (newUser.email == email)) {
        verifyPassword(user, password)
    }
}

const verifyPassword = (user, password) => {
    if ((user.password == password) || (newUser.password == password)) {
        localAssesUser()
    }
}

const localAssesUser = () => {
    localStorage.setItem("@asseso", JSON.stringify("asseso"))
    window.location.href = "./src/page/homepage.html"
}