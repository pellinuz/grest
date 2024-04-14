var musicData = getSongsArray();

function toggleSearch() {
	var searchBox = document.getElementById("searchBox");
	searchBox.style.display = (searchBox.style.display === "none" || searchBox.style.display === "") ? "flex" : "none";
}

function refreshPlaylistEventListeners() {
	const playlistItems = document.querySelectorAll("[data-playlist-item]");

	playlistItems.forEach(item => {
		item.addEventListener("click", function() {
			// Rimuovi la classe 'playing' da tutti gli elementi
			document.querySelectorAll('.music-item.playing').forEach(playingItem => {
				playingItem.classList.remove('playing');
			});

			// Aggiungi la classe 'playing' all'elemento cliccato
			this.classList.add('playing');

			// Aggiorna la canzone corrente e il player come necessario
			lastPlayedMusic = currentMusic;
			currentMusic = Number(this.getAttribute('data-playlist-item'));
			changePlaylistItem(); // Se hai questa funzione per gestire lo stato attivo/inattivo
			changePlayerInfo(); // Aggiorna le informazioni del player in base alla canzone selezionata
		});
	});
}

// Assicurati che questa funzione sia definita nel tuo script
function search_song_by_title() {
	// Prendere il valore dalla barra di ricerca
	const searchInput = document.getElementById('search-input').value.trim().toLowerCase();

	// Cercare le canzoni che includono la stringa cercata nel titolo
	const songs = musicData.filter(song => song.title.toLowerCase().includes(searchInput));

	// Selezionare l'elemento della lista di musica
	const musicList = document.querySelector('.music-list');

	// Pulire la lista prima di aggiungere i risultati della ricerca
	musicList.innerHTML = '';

	// Verificare se sono state trovate canzoni
	if (songs.length > 0) {
		songs.forEach(song => {
			const originalIndex = musicData.findIndex(originalSong => originalSong.title === song.title);
			const songItemHTML = `
				<li>
					<button class="music-item" data-playlist-toggler data-playlist-item="${originalIndex}">
						<img src="${song.posterUrl}" width="800" height="800" alt="${song.title} Album Poster" class="img-cover">
						<div class="item-icon">
							<span class="material-symbols-rounded">equalizer</span>
						</div>
					</button>
				</li>
			`;

			// Aggiungere la canzone alla lista
			musicList.innerHTML += songItemHTML;
		});
	} else {
		// Mostrare un messaggio se non vengono trovate canzoni
		musicList.innerHTML = '<li>Nessuna canzone trovata con il testo inserito</li>';
	}

	// Riassegna gli event listener agli elementi della playlist dopo l'aggiornamento
	refreshPlaylistEventListeners();
}


var searchInput = document.getElementById('search-input');
searchInput.addEventListener('keydown', function (event) {
	if (event.key == 'Enter') {
		createLink();
	}
});