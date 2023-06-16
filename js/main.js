var prevScrollpos = window.pageYOffset;
var resolutionWidth = window.screen.width;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("bg").style.opacity = "0";
    } else {
      document.getElementById("bg").style.opacity = "1";
    }
    prevScrollpos = currentScrollPos;
  }
  
console.log(resolutionWidth)

window.onload = function loadposter(){
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzFkOTA2YzVjMWFhYjFjZTlkODlmOTFhY2ViMGRkNyIsInN1YiI6IjY0N2JhYTVmOGQyZjhkMDEzNjUxMmE1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gH5zKzq8t_b4fFh22c5W6X1fTg8KPRZt6aqczwisISw'
    }
  };
  
  fetch('https://api.themoviedb.org/3/person/201/images', options)
    .then(response => response.json())
    .then(response =>  { 
      document.getElementById(201).setAttribute("src", "https://image.tmdb.org/t/p/w500" + response.posters[0].file_path)})
    .catch(err => console.error(err));
    
    
}


// VIDEO
const movieId = 123; // ID do filme que você deseja obter detalhes
const apiKey = '';


window.onload = function postersload(){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2Q0ZThjNjJmMmMzZDUyOTM4YmNhYjM4NDUwZmVjNCIsInN1YiI6IjY0OGE0ZjUzN2ViNWYyMDBhZTZhYWNlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kZ6bJ25v6Rda7BlfQ2kcT5Yz0F5bg7Xfin_GrJTteRw'
    }
  };
  
  fetch('https://api.themoviedb.org/3/tv/197588/videos?language=en-US', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  
}

window.onload = function postersload() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2Q0ZThjNjJmMmMzZDUyOTM4YmNhYjM4NDUwZmVjNCIsInN1YiI6IjY0OGE0ZjUzN2ViNWYyMDBhZTZhYWNlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kZ6bJ25v6Rda7BlfQ2kcT5Yz0F5bg7Xfin_GrJTteRw'
    }
  };

  const videoDiv = document.querySelector('.videooo');

  const imagem = videoDiv.querySelector('img');
  // Obtém a imagem existente na div
  // Exibe a imagem inicialmente
  imagem.style.display = 'block';

  setTimeout(() => {
    fetch('https://api.themoviedb.org/3/tv/71712/videos?language=en-US', options)
      .then(response => response.json())
      .then(response => {
        // Obtém o resultado do vídeo da API
        const video = response.results[0];

        // Obtém o ID do vídeo
        const videoId = video.key;

        // Cria o elemento iframe para exibir o vídeo
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.frameBorder = '0';
        iframe.allowFullscreen = true;

        // Esconde a imagem
        imagem.style.display = 'none';

        // Adiciona o elemento iframe à div
        videoDiv.appendChild(iframe);
      })
      .catch(err => console.error(err));
  }, 3000);

};
