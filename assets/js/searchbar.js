function toggleSearch() {
	var searchBox = document.getElementById("searchBox");
	searchBox.style.display = (searchBox.style.display === "none" || searchBox.style.display === "") ? "flex" : "none";
}

var searchInput = document.querySelector('#search-input');
searchInput.addEventListener('keydown', function (event) {
	if (event.key == 'Enter') {
		createLink();
	}
});