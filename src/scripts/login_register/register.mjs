import dataUser from "./data.mjs"

const clikEnter = () => {
    const enter = document.querySelector(".enter_register")
    enter.addEventListener("click", () => {
        inputAnalysisUser()
    })
}

const inputAnalysisUser = () => {
    const password = document.querySelector(".password_input").value
    const email = document.querySelector(".email_input").value
    const repeatPassword = document.querySelector(".password_repeat_input").value
    const name = document.querySelector(".name_input").value

    const verifyEmail = () => {
        for (let i = 0; i < dataUser.length; i++) {
            const user = dataUser[i];
            if (user.email === email) {
                return false
            } else {
                addUser(name, email, password)
            }
        }
    }

    const verifyPasword = () => {
        if (password == repeatPassword) {
            verifyEmail(email)
        }
    }

    verifyPasword()
}

clikEnter()

const addUser = (name, email, password) => {
    const newUser = {
        name: name,
        email: email,
        password: password,
    }

    dataUser.push(newUser)
    localStorage.setItem("newUser", JSON.stringify(newUser))
    window.location.href = "/index.html"
}