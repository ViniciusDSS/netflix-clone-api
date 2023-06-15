const movieId = 0; // ID do filme que você deseja obter detalhes
const apiKey = '431d906c5c1aab1ce9d89f91aceb0dd7';


const img_path = "//https://image.tmdb.org/t/p/w500";

for (let index = 200; index < 210; index++) {
  fetch(`https://api.themoviedb.org/3/movie/${index}?api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Processar a resposta da API
    console.log(data);

    movieId = index;
    
  })
  .catch(error => {
    // Tratar erros
    console.error(error);
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzFkOTA2YzVjMWFhYjFjZTlkODlmOTFhY2ViMGRkNyIsInN1YiI6IjY0N2JhYTVmOGQyZjhkMDEzNjUxMmE1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gH5zKzq8t_b4fFh22c5W6X1fTg8KPRZt6aqczwisISw'
    }
  };
  
  fetch(`https://api.themoviedb.org/3/person/${index}/images`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  };

