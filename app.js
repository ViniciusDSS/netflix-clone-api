
const movieId = 123; // ID do filme que você deseja obter detalhes
const apiKey = '431d906c5c1aab1ce9d89f91aceb0dd7';


fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Processar a resposta da API
    console.log(data);
  })
  .catch(error => {
    // Tratar erros
    console.error(error);
  });
