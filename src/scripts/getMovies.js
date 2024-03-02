import modelMovie from "./model.js"
import movies from "../scripts/movies.js"



function randomMovie(){
    let filmes = Object.values(movies)
    let RandomMovie = filmes[Math.floor(Math.random() * filmes.length)]
    fetch(`https://www.omdbapi.com/?&apikey=53528d65&t=${RandomMovie.title}`)
    .then(data => data.json())
    .then(res => getmovie(res))

    function getmovie(res) {
        modelMovie(res, container_movie)
    }
}
function getmovies() {    
    for(let i = 0; i < 54; i++){
        randomMovie()
    }
    
}

getmovies()
verifyAsses()