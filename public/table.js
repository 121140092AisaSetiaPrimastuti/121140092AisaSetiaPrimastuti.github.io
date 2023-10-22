const kontenTable = document.querySelector('.konten.table');

async function fetchProducts() {
    let data = [];
    const storedProducts = localStorage.getItem('films');

    if (storedProducts) {

        data = JSON.parse(storedProducts);
    } else {
        const filmData = [
            {
                title: "Film 1",
                director: "Sutradara 1",
                releaseYear: 2020,
                genre: "Aksi",
                rating: 8.5,
                duration: 120,
                language: "Inggris",
                country: "Amerika Serikat",
                actors: ["Aktor 1", "Aktor 2"],
            },
            {
                title: "Film 2",
                director: "Sutradara 2",
                releaseYear: 2019,
                genre: "Drama",
                rating: 7.9,
                duration: 130,
                language: "Inggris",
                country: "Amerika Serikat",
                actors: ["Aktor 3", "Aktor 4"],
            },
            {
                title: "Film 3",
                director: "Sutradara 3",
                releaseYear: 2018,
                genre: "Komedi",
                rating: 7.2,
                duration: 110,
                language: "Inggris",
                country: "Amerika Serikat",
                actors: ["Aktor 5", "Aktor 6"],
            },
            {
                title: "Film 4",
                director: "Sutradara 4",
                releaseYear: 2021,
                genre: "Horor",
                rating: 6.8,
                duration: 95,
                language: "Inggris",
                country: "Amerika Serikat",
                actors: ["Aktor 7", "Aktor 8"],
            },
            {
                title: "Film 5",
                director: "Sutradara 5",
                releaseYear: 2017,
                genre: "Romantis",
                rating: 8.1,
                duration: 125,
                language: "Inggris",
                country: "Amerika Serikat",
                actors: ["Aktor 9", "Aktor 10"],
            },
            {
                title: "Film 6",
                director: "Sutradara 6",
                releaseYear: 2022,
                genre: "Fiksi Ilmiah",
                rating: 7.5,
                duration: 140,
                language: "Inggris",
                country: "Amerika Serikat",
                actors: ["Aktor 11", "Aktor 12"],
            },
            {
                title: "Film 7",
                director: "Sutradara 7",
                releaseYear: 2016,
                genre: "Fantasi",
                rating: 7.0,
                duration: 105,
                language: "Inggris",
                country: "Amerika Serikat",
                actors: ["Aktor 13", "Aktor 14"],
            },
            {
                title: "Film 8",
                director: "Sutradara 8",
                releaseYear: 2015,
                genre: "Animasi",
                rating: 8.3,
                duration: 88,
                language: "Inggris",
                country: "Amerika Serikat",
                actors: ["Aktor 15", "Aktor 16"],
            },
            {
                title: "Film 9",
                director: "Sutradara 9",
                releaseYear: 2014,
                genre: "Thriller",
                rating: 6.9,
                duration: 112,
                language: "Inggris",
                country: "Amerika Serikat",
                actors: ["Aktor 17", "Aktor 18"],
            },
            {
                title: "Film 10",
                director: "Sutradara 10",
                releaseYear: 2013,
                genre: "Misteri",
                rating: 7.8,
                duration: 115,
                language: "Inggris",
                country: "Amerika Serikat",
                actors: ["Aktor 19", "Aktor 20"],
            },
            {
                title: "Film 11",
                director: "Sutradara 11",
                releaseYear: 2012,
                genre: "Dokumenter",
                rating: 8.7,
                duration: 95,
                language: "Inggris",
                country: "Amerika Serikat",
                actors: ["Aktor 21", "Aktor 22"],
            },
            {
                title: "Film 12",
                director: "Sutradara 12",
                releaseYear: 2011,
                genre: "Musikal",
                rating: 7.4,
                duration: 130,
                language: "Inggris",
                country: "Amerika Serikat",
                actors: ["Aktor 23", "Aktor 24"],
            },
            {
                title: "Film 13",
                director: "Sutradara 13",
                releaseYear: 2010,
                genre: "Sejarah",
                rating: 8.0,
                duration: 125,
                language: "Inggris",
                country: "Amerika Serikat",
                actors: ["Aktor 25", "Aktor 26"],
            },
            {
                title: "Film 14",
                director: "Sutradara 14",
                releaseYear: 2009,
                genre: "Aksi",
                rating: 7.1,
                duration: 110,
                language: "Inggris",
                country: "Amerika Serikat",
                actors: ["Aktor 27", "Aktor 28"],
            },
            {
                title: "Film 15",
                director: "Sutradara 15",
                releaseYear: 2015,
                genre: "Drama",
                rating: 8.8,
                duration: 135,
                language: "Inggris",
                country: "Amerika Serikat",
                actors: ["Aktor 29", "Aktor 30"],
            },
            {
                title: "Film 16",
                director: "Sutradara 16",
                releaseYear: 2014,
                genre: "Komedi",
                rating: 7.6,
                duration: 120,
                language: "Inggris",
                country: "Amerika Serikat",
                actors: ["Aktor 31", "Aktor 32"],
            },
            {
                title: "Film 17",
                director: "Sutradara 17",
                releaseYear: 2013,
                genre: "Horor",
                rating: 6.5,
                duration: 95,
                language: "Inggris",
                country: "Amerika Serikat",
                actors: ["Aktor 33", "Aktor 34"],
            },
            {
                title: "Film 18",
                director: "Sutradara 18",
                releaseYear: 2018,
                genre: "Romantis",
                rating: 8.4,
                duration: 125,
                language: "Inggris",
                country: "Amerika Serikat",
                actors: ["Aktor 35", "Aktor 36"],
            },
            {
                title: "Film 19",
                director: "Sutradara 19",
                releaseYear: 2017,
                genre: "Fiksi Ilmiah",
                rating: 7.7,
                duration: 140,
                language: "Inggris",
                country: "Amerika Serikat",
                actors: ["Aktor 37", "Aktor 38"],
            },
            {
                title: "Film 20",
                director: "Sutradara 20",
                releaseYear: 2023,
                genre: "Fantasi",
                rating: 9.0,
                duration: 150,
                language: "Inggris",
                country: "Amerika Serikat",
                actors: ["Aktor 39", "Aktor 40"],
            }
        ];

        localStorage.setItem('films', JSON.stringify(filmData));

    }
    return data;
}

async function generateTable() {
    try {
        const data = await fetchProducts();
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        const headerRow = document.createElement('tr');

        for (const key in data[0]) {
            const th = document.createElement('th');
            th.textContent = key;
            headerRow.appendChild(th);
        }
        thead.appendChild(headerRow);

        data.forEach(item => {
            const row = document.createElement('tr');
            for (const key in item) {
                const cell = document.createElement('td');
                cell.textContent = item[key];
                row.appendChild(cell);
            }
            tbody.appendChild(row);
        });

        table.appendChild(thead);
        table.appendChild(tbody);

        kontenTable.innerHTML = '';
        kontenTable.appendChild(table);
    } catch (error) {
        console.error('Error:', error);
    }
}


generateTable();
