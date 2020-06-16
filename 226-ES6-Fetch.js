// Latihan pakai callback wih jQuery
// Pakai OMDb API http://www.omdbapi.com/

// $('.search-button').on('click', function() {
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=bf1d7674&s=' + $('.input-keyword').val(),
//         success: result => {
//             const movies = result.Search;
//             let cards = '';
//             movies.forEach(m => {
//                 cards += showCards(m);
//             });
//             $('.movie-container').html(cards);
//             // Ketika tombol detail di klik
//             $('.modal-detail-button').on('click', function() {
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=bf1d7674&i=' + $(this).data('imdbid'),
//                     success: m => {
//                         const movieDetail = showMovieDetail(m);
//                         $('.modal-body').html(movieDetail);
//                     },
//                     error: (e) => {
//                         console.log(e.responseText);
//                     }
//                 });
//             });
//         },
//         error: (e) => {
//             console.log(e.responseText);
//         }
//     })
// });


// Pakai fetch  , vanila js
const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', function() {
    const inputKeyword = document.querySelector('.input-keyword');
    fetch('http://www.omdbapi.com/?apikey=bf1d7674&s=' + inputKeyword.value)
        // .then(response => console.log(response.json()));
        .then(response => response.json())
        .then(response => {
            const movies = response.Search;
            let cards = '';
            movies.forEach(m => cards += showCards(m));
            const moviecontainer = document.querySelector('.movie-container');
            moviecontainer.innerHTML = cards;

            // Ketika tombol detail di klik
            const modalDetailButton = document.querySelectorAll('.modal-detail-button');
            modalDetailButton.forEach(btn => {
                btn.addEventListener('click', function() {
                    const imdbid = this.dataset.imdbid;
                    console.log(imdbid);
                    fetch('http://www.omdbapi.com/?apikey=bf1d7674&i=' + imdbid)
                        .then(response => response.json())
                        .then(m => {
                            const movieDetail = showMovieDetail(m);
                            const modalBody = document.querySelector('.modal-body');
                            modalDetailButton.innerHTML = movieDetail;
                            $('.modal-body').html(movieDetail);
                        });
                });
            });
        });
});




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