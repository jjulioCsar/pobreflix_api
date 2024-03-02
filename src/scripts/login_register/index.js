const newUser = JSON.parse(localStorage.getItem("@asseso"))

const verifyAsses = () => {
    if (newUser == null) {  
        window.location.href = "https://jjuliocsar.github.io/pobreflix_api/"
    }
}

const off = () =>  {
    const buttonOff = document.querySelector(".log-out")

    buttonOff.addEventListener("click", () => {
        localStorage.removeItem("@asseso")
        verifyAsses()
        
        location.reload()
    })
}

verifyAsses()
off()