const topBar = document.getElementsByClassName('top-bar');
const playlist = document.getElementById('playlist');
const themeToggle = document.getElementById('theme-toggler');

themeToggle.addEventListener('click', () => {
	if (topBar[0].classList.contains('dark')) {
		topBar[0].classList.remove('dark');
		playlist.classList.remove('dark');
		themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
	} else {
		topBar[0].classList.add('dark');
		playlist.classList.add('dark');
		themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
	}
}