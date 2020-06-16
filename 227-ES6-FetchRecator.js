// Pakai fetch  , vanila js
const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', async function() {
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value);
    console.log(movies);
    updateUI(movies);
});

// event binding
document.addEventListener('click', async function(e) {
    console.log(e);
    if (e.target.classList.contains('modal-detail-button')) {
        console.log('ok');
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getMovieDetail(imdbid);
        updateUIDetail(movieDetail);
    }
});

function getMovieDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=bf1d7674&i=' + imdbid)
        // .then(response => console.log(response.json()));
        .then(response => response.json())
        .then(m => m);
}

function updateUIDetail(m) {
    const movieDetail = showMovieDetail(m);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}

function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=bf1d7674&s=' + keyword)
        // .then(response => console.log(response.json()));
        .then(response => response.json())
        .then(response => response.Search);
}

function updateUI(movies) {
    let cards = '';
    movies.forEach(m => cards += showCards(m));
    const moviecontainer = document.querySelector('.movie-container');
    moviecontainer.innerHTML = cards;
}


function showCards(m) {
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img class="card-img-top" src="${m.Poster}">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`;
}

function showMovieDetail(m) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <h4>${m.Title} (${m.Year})</h4>
                            </li>
                            <li class="list-group-item"><strong>Director: </strong>${m.Director}</li>
                            <li class="list-group-item"><strong>Actor: </strong>${m.Actors}</li>
                            <li class="list-group-item"><strong>Writer: </strong>${m.Writer}</li>
                            <li class="list-group-item"><strong>Plot: <br></strong>${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}




// fetch('http://www.omdbapi.com/?apikey=bf1d7674&s=' + inputKeyword.value)
//     // .then(response => console.log(response.json()));
//     .then(response => response.json())
//     .then(response => {
//         const movies = response.Search;
//         let cards = '';
//         movies.forEach(m => cards += showCards(m));
//         const moviecontainer = document.querySelector('.movie-container');
//         moviecontainer.innerHTML = cards;

//         // Ketika tombol detail di klik
//         const modalDetailButton = document.querySelectorAll('.modal-detail-button');
//         modalDetailButton.forEach(btn => {
//             btn.addEventListener('click', function() {
//                 const imdbid = this.dataset.imdbid;
//                 console.log(imdbid);
//                 fetch('http://www.omdbapi.com/?apikey=bf1d7674&i=' + imdbid)
//                     .then(response => response.json())
//                     .then(m => {
//                         const movieDetail = showMovieDetail(m);
//                         const modalBody = document.querySelector('.modal-body');
//                         modalDetailButton.innerHTML = movieDetail;
//                         $('.modal-body').html(movieDetail);
//                     });
//             });
//         });
//     });