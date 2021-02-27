var search = document.querySelector('.search');
var shows = document.querySelector(".shows");

function getShow() {
    var req = new XMLHttpRequest();
    var baseUrl = " http://api.tvmaze.com/shows";
    req.open('GET', baseUrl)
    req.onload = function () {
        listOfMovies((JSON.parse(req.responseText)))

    }
    req.send()
}
getShow()

function listOfMovies(showsData) {
    for (var i = 0; i < 48; i++) {
        createShow(showsData[i]);
    }
}

function createShow(el) {
    var movieContainer = document.createElement('div');
    var movieImage = document.createElement('img');
    var movieName = document.createElement('p');
    var title = el.name
    var poster = el.image.original
    var id = el.id

    movieName.textContent = title
    movieImage.setAttribute('src', poster);

    movieContainer.appendChild(movieImage)
    movieContainer.appendChild(movieName)

    movieContainer.className = 'oneMovie'
    shows.appendChild(movieContainer)

    movieContainer.addEventListener('click', function () {
        storeMovieId(id)
        window.location.href = "oneshow.html";
    });
}

function storeMovieId(movieID) {
    localStorage.setItem("movieID", movieID)
}

