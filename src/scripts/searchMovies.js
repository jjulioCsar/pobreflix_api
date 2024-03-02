import modelMovie from "./model.js"

let searchMovie = document.getElementById("SearchMovie")
let valueSearch = document.getElementById('txtBusca')

searchMovie.addEventListener("click", search)
valueSearch.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        search();
    }
});

function search(){
    fetch(`https://www.omdbapi.com/?&apikey=53528d65&s=${valueSearch.value}`)
    .then(data => data.json())
    .then(res => movieGet(res))
    .catch(err => console.log(err)) 
    console.log(res)
    function movieGet(res){{
        if(valueSearch.length < 1 || res.Response === "False" ){
            alert("No Movies")}
        else{
        container_movie.innerHTML = ''
        res.Search.forEach(movie => {
            modelMovie(movie, container_movie)
        })
        }
        }; 
    }
}