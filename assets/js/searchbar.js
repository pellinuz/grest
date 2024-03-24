function toggleSearch() {
	var searchBox = document.getElementById("searchBox");
	searchBox.style.display = (searchBox.style.display === "none" || searchBox.style.display === "") ? "flex" : "none";
}

var searchInput = document.getElementById('search-input');
searchInput.addEventListener('keydown', function (event) {
	if (event.key == 'Enter') {
		createLink();
	}
});