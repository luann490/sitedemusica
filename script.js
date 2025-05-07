const musicas = {
  rock: [
    { titulo: "Back in Black - AC/DC", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { titulo: "Bohemian Rhapsody - Queen", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" }
  ],
  pop: [
    { titulo: "Blinding Lights - The Weeknd", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
    { titulo: "Levitating - Dua Lipa", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" }
  ],
  jazz: [
    { titulo: "Take Five - Dave Brubeck", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
    { titulo: "So What - Miles Davis", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" }
  ],
  eletronica: [
    { titulo: "One More Time - Daft Punk", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
    { titulo: "Levels - Avicii", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" }
  ]
};

function mostrarMusicas(genero) {
  const lista = document.getElementById("lista-musicas");
  const musicasGenero = musicas[genero];

  let html = `<h3>${genero.charAt(0).toUpperCase() + genero.slice(1)}</h3><div class="row">`;

  musicasGenero.forEach(musica => {
    html += `
      <div class="col-md-6 mb-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${musica.titulo}</h5>
            <audio controls>
              <source src="${musica.url}" type="audio/mpeg">
              Seu navegador não suporta o player de áudio.
            </audio>
          </div>
        </div>
      </div>
    `;
  });

  html += '</div>';
  lista.innerHTML = html;
}

document.getElementById('form-musica').addEventListener('submit', function (e) {
  e.preventDefault();

  const genero = document.getElementById('genero').value;
  const titulo = document.getElementById('titulo').value;
  const url = document.getElementById('url').value;

  if (!genero || !titulo || !url) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (!musicas[genero]) {
    musicas[genero] = [];
  }

  musicas[genero].push({ titulo, url });
  mostrarMusicas(genero);
  this.reset();
});
