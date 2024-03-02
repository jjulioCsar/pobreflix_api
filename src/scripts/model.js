const modelMovie = (data, container) =>{
    let movie_data = document.createElement("div")
    let movie_title = document.createElement("p")
    movie_data.style.backgroundImage = `url(${data.Poster})`
    movie_data.style.backgroundSize = "cover"
    movie_title.innerHTML = data.Title
    movie_data.classList.add("movie_container")
    container.appendChild(movie_data)
    movie_data.appendChild(movie_title)
}


export default modelMovie