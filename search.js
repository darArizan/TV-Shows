
var search = document.querySelector('.search');
var menu = document.querySelector('.menu');
var button = document.querySelector(".button")
var back = document.querySelector('.back')

function getSearch() {
    return localStorage.getItem("movieID")
}

function searchMenu() {
    var req = new XMLHttpRequest();
    var baseUrl = " http://api.tvmaze.com/search/shows?q=";
    req.open('GET', baseUrl + search.value)
    req.onload = function () {
        console.log(JSON.parse(req.responseText))
        listOf((JSON.parse(req.responseText)))
    }
    req.send()
}

function listOf(drops) {
    for (var i = 0; i < 10; i++) {
        createOf(drops[i]);
    }
}

function createOf(el) {
    console.log(el)
    var id = el.show.id
    var p = document.createElement('p')
    p.textContent = el.show.name;
    menu.appendChild(p);
    menu.classList.add('visible');

    p.addEventListener("click", function () {

        storeMovieId(id)
        console.log(id)
        window.location.href = "oneshow.html";

    })
}

function storeMovieId(movieID) {
    localStorage.setItem("movieID", movieID)
}

search.addEventListener('keypress', function (el) {

    if (el.keyCode === 13) {
        searchMenu();
        search.innerHTML = ""
    }
})
button.addEventListener('click', function () {

    searchMenu();

})
back.addEventListener('click', function () {
    window.location.href = "tvshows.html"
    searchMenu()
})