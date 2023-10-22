function postDataToLocalStorage() {
    const title = document.getElementById('title').value;
    const director = document.getElementById('director').value;
    const releaseYear = document.getElementById('releaseYear').value;
    const genre = document.getElementById('genre').value;
    const rating = document.getElementById('rating').value;
    const duration = document.getElementById('duration').value;
    const language = document.getElementById('language').value;
    const country = document.getElementById('country').value;
    const actors = document.getElementById('actors').value;

    const film = {
        title,
        director,
        releaseYear,
        genre,
        rating,
        duration,
        language,
        country,
        actors: actors.split(',').map(actor => actor.trim())
    };
    let films = JSON.parse(localStorage.getItem('films')) || [];
    films.push(film);
    localStorage.setItem('films', JSON.stringify(films));
    alert('Data film telah berhasil disimpan ke Tabel.');
    document.getElementById('filmForm').reset();
}

const submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener('click', postDataToLocalStorage);